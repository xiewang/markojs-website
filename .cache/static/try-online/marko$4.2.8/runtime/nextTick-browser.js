$_mod.def("/marko$4.2.8/runtime/nextTick-browser", function(require, exports, module, __filename, __dirname) { /* globals window */

var win = window;
var setImmediate = win.setImmediate;

if (!setImmediate) {
    if (win.postMessage) {
        var queue = [];
        var messageName = 'si';
        win.addEventListener('message', function (event) {
            var source = event.source;
            if (source == win || !source && event.data === messageName) {
                event.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        setImmediate = function(fn) {
            queue.push(fn);
            win.postMessage(messageName, '*');
        };
    } else {
        setImmediate = setTimeout;
    }
}

module.exports = setImmediate;

});