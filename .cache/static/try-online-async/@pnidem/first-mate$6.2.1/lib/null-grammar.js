$_mod.def("/@pnidem/first-mate$6.2.1/lib/null-grammar", function(require, exports, module, __filename, __dirname) { (function() {
  var Grammar, NullGrammar,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Grammar = require('/@pnidem/first-mate$6.2.1/lib/grammar'/*'./grammar'*/);

  module.exports = NullGrammar = (function(_super) {
    __extends(NullGrammar, _super);

    function NullGrammar(registry) {
      var name, scopeName;
      name = 'Null Grammar';
      scopeName = 'text.plain.null-grammar';
      NullGrammar.__super__.constructor.call(this, registry, {
        name: name,
        scopeName: scopeName
      });
    }

    NullGrammar.prototype.getScore = function() {
      return 0;
    };

    return NullGrammar;

  })(Grammar);

}).call(this);

});