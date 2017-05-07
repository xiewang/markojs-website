$_mod.def("/marko$4.2.8/compiler/Builder", function(require, exports, module, __filename, __dirname) { 'use strict';
var isArray = Array.isArray;
var ok = require('/assert$1.4.1/assert'/*'assert'*/).ok;

var Node = require('/marko$4.2.8/compiler/ast/Node'/*'./ast/Node'*/);
var Program = require('/marko$4.2.8/compiler/ast/Program'/*'./ast/Program'*/);
var TemplateRoot = require('/marko$4.2.8/compiler/ast/TemplateRoot'/*'./ast/TemplateRoot'*/);
var FunctionDeclaration = require('/marko$4.2.8/compiler/ast/FunctionDeclaration'/*'./ast/FunctionDeclaration'*/);
var FunctionCall = require('/marko$4.2.8/compiler/ast/FunctionCall'/*'./ast/FunctionCall'*/);
var Literal = require('/marko$4.2.8/compiler/ast/Literal'/*'./ast/Literal'*/);
var Identifier = require('/marko$4.2.8/compiler/ast/Identifier'/*'./ast/Identifier'*/);
var Comment = require('/marko$4.2.8/compiler/ast/Comment'/*'./ast/Comment'*/);
var If = require('/marko$4.2.8/compiler/ast/If'/*'./ast/If'*/);
var ElseIf = require('/marko$4.2.8/compiler/ast/ElseIf'/*'./ast/ElseIf'*/);
var Else = require('/marko$4.2.8/compiler/ast/Else'/*'./ast/Else'*/);
var Assignment = require('/marko$4.2.8/compiler/ast/Assignment'/*'./ast/Assignment'*/);
var BinaryExpression = require('/marko$4.2.8/compiler/ast/BinaryExpression'/*'./ast/BinaryExpression'*/);
var LogicalExpression = require('/marko$4.2.8/compiler/ast/LogicalExpression'/*'./ast/LogicalExpression'*/);
var Vars = require('/marko$4.2.8/compiler/ast/Vars'/*'./ast/Vars'*/);
var Return = require('/marko$4.2.8/compiler/ast/Return'/*'./ast/Return'*/);
var HtmlElement = require('/marko$4.2.8/compiler/ast/HtmlElement/index'/*'./ast/HtmlElement'*/);
var Html = require('/marko$4.2.8/compiler/ast/Html'/*'./ast/Html'*/);
var Text = require('/marko$4.2.8/compiler/ast/Text/index'/*'./ast/Text'*/);
var ForEach = require('/marko$4.2.8/compiler/ast/ForEach'/*'./ast/ForEach'*/);
var ForEachProp = require('/marko$4.2.8/compiler/ast/ForEachProp'/*'./ast/ForEachProp'*/);
var ForRange = require('/marko$4.2.8/compiler/ast/ForRange'/*'./ast/ForRange'*/);
var HtmlComment = require('/marko$4.2.8/compiler/ast/HtmlComment'/*'./ast/HtmlComment'*/);
var SelfInvokingFunction = require('/marko$4.2.8/compiler/ast/SelfInvokingFunction'/*'./ast/SelfInvokingFunction'*/);
var ForStatement = require('/marko$4.2.8/compiler/ast/ForStatement'/*'./ast/ForStatement'*/);
var BinaryExpression = require('/marko$4.2.8/compiler/ast/BinaryExpression'/*'./ast/BinaryExpression'*/);
var UpdateExpression = require('/marko$4.2.8/compiler/ast/UpdateExpression'/*'./ast/UpdateExpression'*/);
var UnaryExpression = require('/marko$4.2.8/compiler/ast/UnaryExpression'/*'./ast/UnaryExpression'*/);
var MemberExpression = require('/marko$4.2.8/compiler/ast/MemberExpression'/*'./ast/MemberExpression'*/);
var Code = require('/marko$4.2.8/compiler/ast/Code'/*'./ast/Code'*/);
var InvokeMacro = require('/marko$4.2.8/compiler/ast/InvokeMacro'/*'./ast/InvokeMacro'*/);
var Macro = require('/marko$4.2.8/compiler/ast/Macro'/*'./ast/Macro'*/);
var ConditionalExpression = require('/marko$4.2.8/compiler/ast/ConditionalExpression'/*'./ast/ConditionalExpression'*/);
var NewExpression = require('/marko$4.2.8/compiler/ast/NewExpression'/*'./ast/NewExpression'*/);
var ObjectExpression = require('/marko$4.2.8/compiler/ast/ObjectExpression'/*'./ast/ObjectExpression'*/);
var ArrayExpression = require('/marko$4.2.8/compiler/ast/ArrayExpression'/*'./ast/ArrayExpression'*/);
var Property = require('/marko$4.2.8/compiler/ast/Property'/*'./ast/Property'*/);
var VariableDeclarator = require('/marko$4.2.8/compiler/ast/VariableDeclarator'/*'./ast/VariableDeclarator'*/);
var ThisExpression = require('/marko$4.2.8/compiler/ast/ThisExpression'/*'./ast/ThisExpression'*/);
var Expression = require('/marko$4.2.8/compiler/ast/Expression'/*'./ast/Expression'*/);
var Scriptlet = require('/marko$4.2.8/compiler/ast/Scriptlet'/*'./ast/Scriptlet'*/);
var ContainerNode = require('/marko$4.2.8/compiler/ast/ContainerNode'/*'./ast/ContainerNode'*/);
var WhileStatement = require('/marko$4.2.8/compiler/ast/WhileStatement'/*'./ast/WhileStatement'*/);
var DocumentType = require('/marko$4.2.8/compiler/ast/DocumentType'/*'./ast/DocumentType'*/);
var Declaration = require('/marko$4.2.8/compiler/ast/Declaration'/*'./ast/Declaration'*/);
var SequenceExpression = require('/marko$4.2.8/compiler/ast/SequenceExpression'/*'./ast/SequenceExpression'*/);
var CustomTag = require('/marko$4.2.8/compiler/ast/CustomTag'/*'./ast/CustomTag'*/);

var parseExpression = require('/marko$4.2.8/compiler/util/parseExpression'/*'./util/parseExpression'*/);
var parseStatement = require('/marko$4.2.8/compiler/util/parseStatement'/*'./util/parseStatement'*/);
var parseJavaScriptArgs = require('/marko$4.2.8/compiler/util/parseJavaScriptArgs'/*'./util/parseJavaScriptArgs'*/);
var replacePlaceholderEscapeFuncs = require('/marko$4.2.8/compiler/util/replacePlaceholderEscapeFuncs'/*'./util/replacePlaceholderEscapeFuncs'*/);
var isValidJavaScriptIdentifier = require('/marko$4.2.8/compiler/util/isValidJavaScriptIdentifier'/*'./util/isValidJavaScriptIdentifier'*/);

var DEFAULT_BUILDER;

function makeNode(arg) {
    if (typeof arg === 'string') {
        return parseExpression(arg, DEFAULT_BUILDER);
    } else if (arg instanceof Node) {
        return arg;
    } else if (arg == null) {
        return undefined;
    } else if (Array.isArray(arg)) {
        return arg.map((arg) => {
            return makeNode(arg);
        });
    } else {
        throw new Error('Argument should be a string or Node or null. Actual: ' + arg);
    }
}

var literalNull = new Literal({value: null});
var literalUndefined = new Literal({value: undefined});
var literalTrue = new Literal({value: true});
var literalFalse = new Literal({value: false});
var identifierOut = new Identifier({name: 'out'});
var identifierRequire = new Identifier({name: 'require'});

class Builder {
    arrayExpression(elements) {
        if (elements) {
            if (!isArray(elements)) {
                elements = [elements];
            }

            for (var i=0; i<elements.length; i++) {
                elements[i] = makeNode(elements[i]);
            }
        } else {
            elements = [];
        }

        return new ArrayExpression({elements});
    }

    assignment(left, right, operator) {
        if (operator == null) {
            operator = '=';
        }
        left = makeNode(left);
        right = makeNode(right);
        return new Assignment({left, right, operator});
    }

    binaryExpression(left, operator, right) {
        left = makeNode(left);
        right = makeNode(right);
        return new BinaryExpression({left, operator, right});
    }

    sequenceExpression(expressions) {
        expressions = makeNode(expressions);
        return new SequenceExpression({expressions});
    }

    code(value) {
        return new Code({value});
    }

    computedMemberExpression(object, property) {
        object = makeNode(object);
        property = makeNode(property);
        let computed = true;

        return new MemberExpression({object, property, computed});
    }

    concat(args) {
        var prev;
        let operator = '+';

        for (var i=1; i<arguments.length; i++) {
            var left;
            var right = makeNode(arguments[i]);
            if (i === 1) {
                left = makeNode(arguments[i-1]);
            } else {
                left = prev;
            }

            prev = new BinaryExpression({left, operator, right});
        }

        return prev;
    }

    conditionalExpression(test, consequent, alternate) {
        return new ConditionalExpression({test, consequent, alternate});
    }

    containerNode(type, generateCode) {
        if (typeof type === 'function') {
            generateCode = arguments[0];
            type = 'ContainerNode';
        }

        var node = new ContainerNode(type);
        if (generateCode) {
            node.setCodeGenerator(generateCode);
        }
        return node;
    }

    customTag(el, tagDef) {
        return new CustomTag(el, tagDef);
    }

    declaration(declaration) {
        return new Declaration({declaration});
    }

    documentType(documentType) {
        return new DocumentType({documentType});
    }

    elseStatement(body) {
        return new Else({body});
    }

    elseIfStatement(test, body, elseStatement) {
        test = makeNode(test);

        return new ElseIf({test, body, else: elseStatement});
    }

    expression(value) {
        return new Expression({value});
    }

    forEach(varName, inExpression, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForEach(def);
        } else {
            varName = makeNode(varName);
            inExpression = makeNode(inExpression);
            return new ForEach({varName, in: inExpression, body});
        }
    }

    forEachProp(nameVarName, valueVarName, inExpression, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForEachProp(def);
        } else {
            nameVarName = makeNode(nameVarName);
            valueVarName = makeNode(valueVarName);
            inExpression = makeNode(inExpression);
            return new ForEachProp({nameVarName, valueVarName, in: inExpression, body});
        }
    }

    forRange(varName, from, to, step, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForRange(def);
        } else {
            varName = makeNode(varName);
            from = makeNode(from);
            to = makeNode(to);
            step = makeNode(step);
            body = makeNode(body);

            return new ForRange({varName, from, to, step, body});
        }
    }

    forStatement(init, test, update, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForStatement(def);
        } else {
            init = makeNode(init);
            test = makeNode(test);
            update = makeNode(update);
            return new ForStatement({init, test, update, body});
        }
    }

    functionCall(callee, args) {
        callee = makeNode(callee);

        if (args) {
            if (!isArray(args)) {
                throw new Error('"args" should be an array');
            }

            for (var i=0; i<args.length; i++) {
                args[i] = makeNode(args[i]);
            }
        } else {
            args = [];
        }

        return new FunctionCall({callee, args});
    }

    functionDeclaration(name, params, body) {
        return new FunctionDeclaration({name, params, body});
    }

    html(argument) {
        argument = makeNode(argument);

        return new Html({argument});
    }

    htmlComment(comment) {
        return new HtmlComment({comment});
    }

    comment(comment) {
        return new Comment({comment});
    }

    htmlElement(tagName, attributes, body, argument, openTagOnly, selfClosed) {
        if (typeof tagName === 'object' && !(tagName instanceof Node)) {
            let def = arguments[0];
            return new HtmlElement(def);
        } else {
            return new HtmlElement({tagName, attributes, body, argument, openTagOnly, selfClosed});
        }
    }

    htmlLiteral(htmlCode) {
        var argument = new Literal({value: htmlCode});
        return new Html({argument});
    }

    identifier(name) {
        ok(typeof name === 'string', '"name" should be a string');

        if (!isValidJavaScriptIdentifier(name)) {
            var error = new Error('Invalid JavaScript identifier: ' + name);
            error.code = 'INVALID_IDENTIFIER';
            throw error;
        }
        return new Identifier({name});
    }

    identifierOut(name) {
        return identifierOut;
    }

    ifStatement(test, body, elseStatement) {
        test = makeNode(test);

        return new If({test, body, else: elseStatement});
    }

    invokeMacro(name, args, body) {
        return new InvokeMacro({name, args, body});
    }

    invokeMacroFromEl(el) {
        return new InvokeMacro({el});
    }

    literal(value) {
        return new Literal({value});
    }

    literalFalse() {
        return literalFalse;
    }

    literalNull() {
        return literalNull;
    }

    literalTrue() {
        return literalTrue;
    }

    literalUndefined() {
        return literalUndefined;
    }

    logicalExpression(left, operator, right) {
        left = makeNode(left);
        right = makeNode(right);
        return new LogicalExpression({left, operator, right});
    }

    macro(name, params, body) {
        return new Macro({name, params, body});
    }

    memberExpression(object, property, computed) {
        object = makeNode(object);
        property = makeNode(property);

        return new MemberExpression({object, property, computed});
    }

    moduleExports(value) {
        let object = new Identifier({name: 'module'});
        let property = new Identifier({name: 'exports'});

        var moduleExports = new MemberExpression({object, property });

        if (value) {
            return new Assignment({left: moduleExports, right: value, operator: '='});
        } else {
            return moduleExports;
        }
    }

    negate(argument) {
        argument = makeNode(argument);

        var operator = '!';
        var prefix = true;
        return new UnaryExpression({argument, operator, prefix});
    }

    newExpression(callee, args) {
        callee = makeNode(callee);

        if (args) {
            if (!isArray(args)) {
                args = [args];
            }

            for (var i=0; i<args.length; i++) {
                args[i] = makeNode(args[i]);
            }
        } else {
            args = [];
        }

        return new NewExpression({callee, args});
    }

    node(type, generateCode) {
        if (typeof type === 'function') {
            generateCode = arguments[0];
            type = 'Node';
        }

        var node = new Node(type);
        if (generateCode) {
            node.setCodeGenerator(generateCode);
        }
        return node;
    }

    objectExpression(properties) {
        if (properties) {
            if (!isArray(properties)) {
                properties = [properties];
            }

            for (var i=0; i<properties.length; i++) {
                let prop = properties[i];
                prop.value = makeNode(prop.value);
            }
        } else {
            properties = [];
        }

        return new ObjectExpression({properties});
    }

    parseExpression(str, options) {
        ok(typeof str === 'string', '"str" should be a string expression');
        var parsed = parseExpression(str, DEFAULT_BUILDER);
        return parsed;
    }

    parseJavaScriptArgs(args) {
        ok(typeof args === 'string', '"args" should be a string');
        return parseJavaScriptArgs(args, DEFAULT_BUILDER);
    }

    parseStatement(str, options) {
        ok(typeof str === 'string', '"str" should be a string expression');
        var parsed = parseStatement(str, DEFAULT_BUILDER);
        return parsed;
    }

    replacePlaceholderEscapeFuncs(node, context) {
        return replacePlaceholderEscapeFuncs(node, context);
    }

    program(body) {
        return new Program({body});
    }

    property(key, value) {
        key = makeNode(key);
        value = makeNode(value);

        return new Property({key, value});
    }

    renderBodyFunction(body, params) {
        let name = 'renderBody';
        if (!params) {
            params = [new Identifier({name: 'out'})];
        }
        return new FunctionDeclaration({name, params, body});
    }

    require(path) {
        path = makeNode(path);

        let callee = identifierRequire;
        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    requireResolve(path) {
        path = makeNode(path);

        let callee = new MemberExpression({
            object: new Identifier({name: 'require'}),
            property: new Identifier({name: 'resolve'})
        });

        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    returnStatement(argument) {
        argument = makeNode(argument);

        return new Return({argument});
    }

    scriptlet(scriptlet) {
        return new Scriptlet({
            code: scriptlet.value,
            tag: scriptlet.tag,
            block: scriptlet.block
        });
    }

    selfInvokingFunction(params, args, body) {
        if (arguments.length === 1) {
            body = arguments[0];
            params = null;
            args = null;
        }

        return new SelfInvokingFunction({params, args, body});
    }

    strictEquality(left, right) {
        left = makeNode(left);
        right = makeNode(right);

        var operator = '===';
        return new BinaryExpression({left, right, operator});
    }

    templateRoot(body) {
        return new TemplateRoot({body});
    }

    text(argument, escape, preserveWhitespace) {
        if (typeof argument === 'object' && !(argument instanceof Node)) {
            var def = arguments[0];
            return new Text(def);
        }
        argument = makeNode(argument);

        return new Text({argument, escape, preserveWhitespace});
    }

    thisExpression() {
        return new ThisExpression();
    }

    unaryExpression(argument, operator, prefix) {
        argument = makeNode(argument);

        return new UnaryExpression({argument, operator, prefix});
    }

    updateExpression(argument, operator, prefix) {
        argument = makeNode(argument);
        return new UpdateExpression({argument, operator, prefix});
    }

    variableDeclarator(id, init) {
        if (typeof id === 'string') {
            id = new Identifier({name: id});
        }
        if (init) {
            init = makeNode(init);
        }

        return new VariableDeclarator({id, init});
    }

    var(id, init, kind) {
        if (!kind) {
            kind = 'var';
        }

        id = makeNode(id);
        init = makeNode(init);

        var declarations = [
            new VariableDeclarator({id, init})
        ];

        return new Vars({declarations, kind});
    }

    vars(declarations, kind) {
        if (declarations) {
            if (Array.isArray(declarations)) {
                for (let i=0; i<declarations.length; i++) {
                    var declaration = declarations[i];
                    if (!declaration) {
                        throw new Error('Invalid variable declaration');
                    }
                    if (typeof declaration === 'string') {
                        declarations[i] = new VariableDeclarator({
                            id: new Identifier({name: declaration})
                        });
                    } else if (declaration instanceof Identifier) {
                        declarations[i] = new VariableDeclarator({
                            id: declaration
                        });
                    } else if (typeof declaration === 'object') {
                        if (!(declaration instanceof VariableDeclarator)) {
                            let id = declaration.id;
                            let init = declaration.init;

                            if (typeof id === 'string') {
                                id = new Identifier({name: id});
                            }

                            if (!id) {
                                throw new Error('Invalid variable declaration');
                            }

                            if (init) {
                                init = makeNode(init);
                            }


                            declarations[i] = new VariableDeclarator({id, init});
                        }
                    }
                }
            } else if (typeof declarations === 'object') {
                // Convert the object into an array of variables
                declarations = Object.keys(declarations).map((key) => {
                    let id = new Identifier({name: key});
                    let init = makeNode(declarations[key]);
                    return new VariableDeclarator({ id, init });
                });
            }
        }


        return new Vars({declarations, kind});
    }

    whileStatement(test, body) {
        return new WhileStatement({test, body});
    }
}

DEFAULT_BUILDER = new Builder();

Builder.DEFAULT_BUILDER = DEFAULT_BUILDER;

module.exports = Builder;

});