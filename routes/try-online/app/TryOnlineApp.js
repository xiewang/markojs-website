'use strict';

require('marko/runtime/dependencies/vdom');

var vfs = require('~/browser-shims/fs');
var vmodules = require('./vmodules');
var readVirtualFiles = require('./readVirtualFiles');
var path = require('path');
var EventEmitter = require('events-light');

var projectNameRegExp = /[/]([a-zA-Z0-9_-]+)([/]|$)/;


class TryOnlineApp extends EventEmitter {
    constructor() {
        super();
        if (typeof readVirtualFiles === 'function') {
            readVirtualFiles(vfs);
        }

        let rootDir = vfs.readTreeSync();


        this.state = {
            rootDir: rootDir,
            activeProject: undefined,
            focusedFile: undefined,
            openFiles: [],
            previewFile: undefined,
            projectPreviewFile: undefined,
            projectLookup: []
        };

        this.assignOpenFilesToPanes();

        vfs.on('file:modified', (file) => {
            vmodules.clearFileCache(file.path);

            if (file.name === 'marko-tag.json' ||
                file.name === 'marko-taglib.json') {

                vmodules.clearCache((filePath) => {
                    if (filePath.endsWith('.marko')) {
                        return true;
                    }
                });
            }

            this.emit('file:modified', file);
        });
    }

    loadProjects() {
        var projectLookup = {};
        var projects = [];

        var rootDir = vfs.readTreeSync();

        rootDir.files.forEach((file) => {
            let packageJsonPath = path.join(file.path, 'package.json');
            let description = file.name;
            let name = file.name;

            if (vfs.existsSync(packageJsonPath)) {
                let pkg = vmodules.require(packageJsonPath);
                description = pkg.description || description;
            }

            let previewFile;

            var projectPreviewFilePath = file.path + '/index.marko';
            if (vfs.existsSync(projectPreviewFilePath)) {
                previewFile = vfs.getFile(projectPreviewFilePath);
            }

            var project = {
                name: name,
                description: description,
                rootDir: file,
                previewFile: previewFile
            };

            projectLookup[name] = project;
            projects.push(project);
        });

        this.state.projectLookup = projectLookup;
        this.state.projects = projects;
    }

    initialize(state) {
        function addFiles(dir) {
            dir.files.forEach((file) => {
                if (file.type === 'dir') {
                    addFiles(file);
                } else {
                    vfs.writeFileSync(file.path, file.text);
                }
            });
        }

        addFiles(state.rootDir);

        this.loadProjects();

        this.state.activeProject = this.state.projects[0];
        this.state.focusedDirectory = state.focusedDirectory;
        this.state.focusedFile = state.focusedFile;
        this.state.openFiles = state.openFiles;
    }

    getProjectForPath(filePath) {
        var projectNameMatches = projectNameRegExp.exec(filePath);
        var projectName = projectNameMatches[1];
        return this.state.projectLookup[projectName];
    }

    saveFile(filePath, text) {
        vfs.writeFileSync(filePath, text);
    }

    assignOpenFilesToPanes() {
        var state = this.state;
        var openFiles = state.openFiles;

        var panes = {
            inputTop: [],
            inputBottom: [],
            outputTop: [],
            outputBottom: [],
        };

        if (state.previewFile) {
            var previewFile = Object.create(state.previewFile);
            previewFile.preview = true;
            panes.outputTop.push(previewFile);
        }

        if (state.projectPreviewFile) {
            var projectPreviewFile = Object.create(state.projectPreviewFile);
            projectPreviewFile.preview = true;
            panes.outputBottom.push(projectPreviewFile);
        }

        openFiles.forEach((openFile) => {
            var targetPane;

            if (openFile.name === 'demo.marko') {
                targetPane = 'inputTop';
            } else if (openFile.name === 'index.marko') {
                targetPane = 'inputBottom';
            } else if (openFile.name.endsWith('.marko.js')) {
                targetPane = 'outputTop';
            }

            if (!targetPane) {
                targetPane = 'inputBottom';
            }
            panes[targetPane].push(openFile);
        });

        this.state.panes = panes;
    }

    fileExists(filePath) {
        return vfs.getFile(filePath) !== undefined;
    }

    focusProject(projectName) {
        var project = this.state.projectLookup[projectName];
        this.focusFile(path.join(project.rootDir.path, 'index.marko'));
    }

    focusFile(filePath) {
        var file = vfs.getFile(filePath);
        if (!file) {
            return;
        }

        if (this.state.focusedFile === filePath) {
            return;
        }

        this.state.focusedFile = filePath;

        this.state.activeProject = this.getProjectForPath(filePath);

        var isDirectory = file.isDirectory();
        var dirPath;

        var previouslyFocusedDirectory = this.state.focusedDirectory;

        if (isDirectory) {
            dirPath = filePath;
        } else {
            dirPath = path.dirname(filePath);
        }

        this.state.focusedDirectory = dirPath;

        var dir = vfs.getFile(dirPath);

        var index = {};

        dir.files.forEach((childFile) => {
            index[childFile.name] = childFile;
        });

        var isComponent = 'demo.marko' in index;

        var addOpenFile = (file) => {
            this.state.openFiles.push(file);
        };

        if (isComponent) {
            if (isDirectory && previouslyFocusedDirectory === dirPath) {
                // We have already opened all of the required files in the
                // directory. Nothing else to do except adjust the focus
                this._emitStateChange();
                return;
            }

            this.state.openFiles = [];

            for (let i=0; i<dir.files.length; i++) {
                var curFile = dir.files[i];
                if (curFile.isFile()) {
                    addOpenFile(curFile);

                    if (curFile.name === 'demo.marko') {
                        this.state.previewFile = index['demo.marko'];
                    }
                }
            }

            this.state.projectPreviewFile = this.state.activeProject.previewFile;
        } else {
            this.state.openFiles = [];
            this.state.previewFile = undefined;

            if (isDirectory) {
                // Open the first file

                for (let i=0; i<dir.files.length; i++) {
                    let curFile = dir.files[i];
                    if (curFile.isFile()) {
                        if (path.extname(curFile.path) === '.marko') {
                            this.state.projectPreviewFile = curFile;
                        }

                        addOpenFile(curFile);
                        break;
                    }
                }

            } else {
                this.state.openFiles = [file];

                if (path.extname(file.path) === '.marko') {
                    this.state.projectPreviewFile = file;
                }
            }
        }

        this.assignOpenFilesToPanes();

        this._emitStateChange();
    }

    _emitStateChange() {
        this.emit('state:change', Object.assign({}, this.state));
    }

    onStateChange(callback) {
        this.on('state:change', callback);
    }

    get focusedFile() {
        return this.state.focusedFile;
    }

    get focusedDirectory() {
        return this.state.focusedDirectory;
    }
}


module.exports = TryOnlineApp;
