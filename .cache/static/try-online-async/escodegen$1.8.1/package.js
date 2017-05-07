$_mod.def("/escodegen$1.8.1/package", {
  "_args": [
    [
      {
        "raw": "escodegen@^1.8.1",
        "scope": null,
        "escapedName": "escodegen",
        "name": "escodegen",
        "rawSpec": "^1.8.1",
        "spec": ">=1.8.1 <2.0.0",
        "type": "range"
      },
      "/Users/wanxie/Documents/workspace/markojs-website/node_modules/marko"
    ]
  ],
  "_cnpm_publish_time": 1470506723246,
  "_from": "escodegen@>=1.8.1 <2.0.0",
  "_hasShrinkwrap": false,
  "_id": "escodegen@1.8.1",
  "_inCache": true,
  "_location": "/escodegen",
  "_nodeVersion": "6.3.0",
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/escodegen-1.8.1.tgz_1470506723009_0.12818681285716593"
  },
  "_npmUser": {
    "name": "michaelficarra",
    "email": "npm@michael.ficarra.me"
  },
  "_npmVersion": "3.10.3",
  "_phantomChildren": {},
  "_requested": {
    "raw": "escodegen@^1.8.1",
    "scope": null,
    "escapedName": "escodegen",
    "name": "escodegen",
    "rawSpec": "^1.8.1",
    "spec": ">=1.8.1 <2.0.0",
    "type": "range"
  },
  "_requiredBy": [
    "/lasso-require",
    "/marko"
  ],
  "_resolved": "https://registry.npm.taobao.org/escodegen/download/escodegen-1.8.1.tgz",
  "_shasum": "5a5b53af4693110bebb0867aa3430dd3b70a1018",
  "_shrinkwrap": null,
  "_spec": "escodegen@^1.8.1",
  "_where": "/Users/wanxie/Documents/workspace/markojs-website/node_modules/marko",
  "bin": {
    "esgenerate": "./bin/esgenerate.js",
    "escodegen": "./bin/escodegen.js"
  },
  "bugs": {
    "url": "https://github.com/estools/escodegen/issues"
  },
  "dependencies": {
    "esprima": "^2.7.1",
    "estraverse": "^1.9.1",
    "esutils": "^2.0.2",
    "optionator": "^0.8.1",
    "source-map": "~0.2.0"
  },
  "description": "ECMAScript code generator",
  "devDependencies": {
    "acorn": "^2.7.0",
    "bluebird": "^2.3.11",
    "bower-registry-client": "^0.2.1",
    "chai": "^1.10.0",
    "commonjs-everywhere": "^0.9.7",
    "gulp": "^3.8.10",
    "gulp-eslint": "^0.2.0",
    "gulp-mocha": "^2.0.0",
    "semver": "^5.1.0"
  },
  "directories": {},
  "dist": {
    "shasum": "5a5b53af4693110bebb0867aa3430dd3b70a1018",
    "size": 20047,
    "noattachment": false,
    "tarball": "http://registry.npm.taobao.org/escodegen/download/escodegen-1.8.1.tgz"
  },
  "engines": {
    "node": ">=0.12.0"
  },
  "files": [
    "LICENSE.BSD",
    "LICENSE.source-map",
    "README.md",
    "bin",
    "escodegen.js",
    "package.json"
  ],
  "gitHead": "ba4faabb224b2d5e0080c8e4f964702b699c7d1f",
  "homepage": "http://github.com/estools/escodegen",
  "license": "BSD-2-Clause",
  "main": "escodegen.js",
  "maintainers": [
    {
      "name": "constellation",
      "email": "utatane.tea@gmail.com"
    },
    {
      "name": "michaelficarra",
      "email": "npm@michael.ficarra.me"
    }
  ],
  "name": "escodegen",
  "optionalDependencies": {
    "source-map": "~0.2.0"
  },
  "publish_time": 1470506723246,
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/estools/escodegen.git"
  },
  "scripts": {
    "build": "cjsify -a path: tools/entry-point.js > escodegen.browser.js",
    "build-min": "cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
    "lint": "gulp lint",
    "release": "node tools/release.js",
    "test": "gulp travis",
    "unit-test": "gulp test"
  },
  "version": "1.8.1"
}
);