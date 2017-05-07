$_mod.def("/marko$4.2.8/compiler/util/isCompoundExpression", function(require, exports, module, __filename, __dirname) { function isCompoundExpression(expression) {
    if (typeof expression === 'string') {
        // TBD: Should we use Esprima to parse the expression string to see if it is a compount expression?
        return true;
    }

    return expression.isCompoundExpression();
}

module.exports = isCompoundExpression;
});