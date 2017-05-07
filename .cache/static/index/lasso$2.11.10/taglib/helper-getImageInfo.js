$_mod.def("/lasso$2.11.10/taglib/helper-getImageInfo", function(require, exports, module, __filename, __dirname) { var getLassoRenderContext = require('/lasso$2.11.10/taglib/getLassoRenderContext-browser'/*'./getLassoRenderContext'*/);
var lassoImage = require('/lasso-image$1.0.11/lasso-image-browser'/*'lasso-image'*/);

module.exports = function(out, path, callback) {
    var targetOut = out;
    var done = false;

    var lassoRenderContext = getLassoRenderContext(out);
    var theLasso = lassoRenderContext.lasso;

    lassoImage.getImageInfo(path, { lasso: theLasso }, function(err, imageInfo) {
        done = true;

        if (err) return targetOut.error(err);

        callback(targetOut, imageInfo);

        if (targetOut !== out) {
            targetOut.end();
        }
    });

    if (!done) {
        targetOut = out.beginAsync();
    }
};
});