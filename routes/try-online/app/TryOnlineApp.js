'use strict';

require('marko/runtime/dependencies/vdom');

var vfs = require('~/browser-shims/fs');
var vmodules = require('./vmodules');
var readVirtualFiles = require('./readVirtualFiles');
var path = require('path');
var EventEmitter = require('events-light');


class TryOnlineApp extends EventEmitter {
    constructor() {
        super();
        if (typeof readVirtualFiles === 'function') {
            readVirtualFiles(vfs);
        }

        this.state = {
            rootDir: vfs.readTreeSync(),
            focusedFile: undefined,
            openFiles: [],
            previewFile: undefined
        };

        this.assignOpenFilesToPanes();

        vfs.on('file:modified', (file) => {
            vmodules.clearCache();
            this.emit('file:modified', file);
        });
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

        this.state.rootDir = vfs.readTreeSync();
        this.state.focusedDirectory = state.focusedDirectory;
        this.state.focusedFile = state.focusedFile;
        this.state.openFiles = state.openFiles;
    }



    updateFile(filePath, text) {
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

    focusFile(filePath) {
        var file = vfs.getFile(filePath);
        if (!file) {
            return;
        }

        if (this.state.focusedFile === filePath) {
            return;
        }

        this.state.focusedFile = filePath;

        var isDirectory = file.isDirectory();
        var dirPath = filePath;

        var previouslyFocusedDirectory = this.state.focusedDirectory;

        if (isDirectory) {
            this.state.focusedDirectory = dirPath;
        } else {
            dirPath = path.dirname(filePath);
        }

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
        } else {
            this.state.openFiles = [];

            if (isDirectory) {
                // Open the first file

                for (let i=0; i<dir.files.length; i++) {
                    var curFile = dir.files[i];
                    if (curFile.isFile()) {
                        addOpenFile(curFile);
                        break;
                    }
                }

            } else {
                this.state.openFiles = [file];
            }

            this.state.previewFile = this.state.openFiles[0];
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
}


module.exports = TryOnlineApp;