var fs = require('fs');
var path = require('path');

function readVirtualFiles(vfs) {
    var rootDir = path.join(__dirname, '../virtual-projects');

    function addDir(dir) {
        var files = fs.readdirSync(dir);
        files.forEach((file) => {
            file = path.join(dir, file);
            var stat = fs.statSync(file);
            if (stat.isDirectory()) {
                addDir(file);
            } else {
                var relativeFile = file.substring(rootDir.length);
                relativeFile = relativeFile.replace(/[\\]/g, '/');
                var text = fs.readFileSync(file, { encoding: 'utf8' });
                vfs.writeFileSync(relativeFile, text);
            }
        });
    }

    addDir(rootDir);
}

module.exports = readVirtualFiles;