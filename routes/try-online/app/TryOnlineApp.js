'use strict';

var vfs = require('~/browser-shims/fs');
var Compiler = require('./Compiler');
var readVirtualFiles = require('./readVirtualFiles');
var path = require('path');
var EventEmitter = require('events-light');
var vmodules = require('./vmodules');

class TryOnlineApp extends EventEmitter {
    constructor() {
        super();
        if (typeof readVirtualFiles === 'function') {
            readVirtualFiles(vfs);
        }

        this.state = {
            rootDir: vfs.readTreeSync(),
            focusedDirectory: undefined,
            focusedFile: undefined,
            openFiles: [],
            previewFile: undefined
        };

        this.assignOpenFilesToPanes();

        this.compiler = new Compiler(vfs);

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

        var isDirectory = file.isDirectory();
        var dirPath = filePath;

        if (isDirectory) {
            if (this.state.focusedDirectory === filePath) {
                // Directory is already focused
                return;
            }
        } else {
            if (this.state.focusedFile === filePath) {
                // Directory is already focused
                return;
            }

            dirPath = path.dirname(filePath);
            if (this.state.focusedDirectory !== dirPath) {
                this.state.openFiles = [];
            }
            this.state.focusedDirectory = dirPath;
        }

        var dir = vfs.getFile(dirPath);

        var index = {};

        dir.files.forEach((childFile) => {
            index[childFile.name] = childFile;
        });

        var addOpenFile = (file) => {
            this.state.openFiles.push(file);
        };

        if (isDirectory) {
            if (this.state.focusedDirectory === dirPath) {
                // Directory is already focused
                return;
            }

            this.state.openFiles = [];

            if (index['index.marko'] && index['demo.marko']) {
                addOpenFile(index['index.marko']);
                addOpenFile(index['demo.marko']);
                this.state.previewFile = index['demo.marko'];
            } else {
                let firstFile;

                for (let i=0; i<dir.files.length; i++) {
                    var curFile = dir.files[i];
                    if (curFile.isFile()) {
                        firstFile = curFile;
                        break;
                    }
                }

                if (firstFile) {
                    addOpenFile(firstFile);
                    this.state.previewFile = firstFile;
                } else if (dir.files.length) {
                    // Focus the first directory instead
                    this.focusFile(dir.files[0]);
                    return;
                }
            }

            this.state.focusedFile = this.state.openFiles.length ? this.state.openFiles[0].path : undefined;
            this.state.focusedDirectory = dirPath;
        } else {
            this.state.focusedFile = filePath;

            var isComponent = 'demo.marko' in index;
            if (isComponent) {
                var isOpen = false;
                var openFiles = this.state.openFiles;
                for (let i=0; i<openFiles.length; i++) {
                    let openFile = openFiles[i];
                    if (openFile.path === filePath) {
                        isOpen = true;
                        break;
                    }
                }

                if (!isOpen) {
                    this.state.openFiles = this.state.openFiles.concat(file);
                }

                if (file.name === 'demo.marko') {
                    this.state.previewFile = file;
                }
            } else {
                this.state.openFiles = [file];
                this.state.previewFile = file;
            }
        }

        this.assignOpenFilesToPanes();

        this._emitStateChange();
    }

    _emitStateChange() {
        this.emit('state:change', this.state);
    }

    onStateChange(callback) {
        this.on('state:change', callback);
    }
}


module.exports = TryOnlineApp;