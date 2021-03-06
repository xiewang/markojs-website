$_mod.def("/marko$4.2.8/taglibs/async/marko", {
    "<await>": {
        "renderer": "./await-tag",
        "@_var": "identifier",
        "@_dataProvider": "expression",

        "@arg": {
            "type": "expression",
            "preserve-name": true
        },
        "@arg-*": {
            "pattern": true,
            "type": "string",
            "preserve-name": true
        },

        "@method": "string",

        "@timeout": "integer",

        "@timeout-message": "string",
        "@error-message": "string",
        "@placeholder": "string",

        "@renderTimeout": "function",
        "@renderError": "function",
        "@renderPlaceholder": "function",

        "@name": {
            "type": "string",
            "description": "Name of await",
            "autocomplete": [
                {
                    "snippet": "name=\"${1:name}\""
                },
                {
                }
            ]
        },
        "@_name": "string",
        "@client-reorder": {
            "type": "boolean",
            "description": "Use JavaScript on client to move async fragment into the proper place."
        },
        "@scope": {
            "type": "expression",
            "description": "The value of 'this' when invoking the data provider function (N/A with promises)"
        },
        "@show-after": {
            "type": "string"
        },

        "vars": [{
            "name-from-attribute": "_var"
        }],
        "transformer": "./await-tag-transformer",
        "autocomplete": [
            {
                "snippet": "await(${1:varName} from ${2:data.myDataProvider})",
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait><code>"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait><code>"
            }
        ]
    },
    "<await-reorderer>": {
        "renderer": "./await-reorderer-tag",
        "autocomplete": [
            {
                "snippet": "await-reorderer",
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait-reorderer><code>"
            },
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait-reorderer><code>"
            }
        ]
    },
    "<await-placeholder>": {
        "transformer": "./await-nested-tag-transformer",
        "autocomplete": [
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait-placeholder><code>"
            }
        ]
    },
    "<await-timeout>": {
        "transformer": "./await-nested-tag-transformer",
        "autocomplete": [
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait-timeout><code>"
            }
        ]
    },
    "<await-error>": {
        "transformer": "./await-nested-tag-transformer",
        "autocomplete": [
            {
                "descriptionMoreURL": "http://markojs.com/docs/marko/async-taglib/#<code>&ltawait-error><code>"
            }
        ]
    },
    "<async-fragment>": {
        "transformer": {
            "path": "./async-fragment-to-await-transformer",
            "priority": -1
        },
        "deprecated": true
    },
    "<async-fragments>": {
        "transformer": {
            "path": "./async-fragment-to-await-transformer",
            "priority": -1
        },
        "deprecated": true
    },
    "<async-fragment-placeholder>": {
        "transformer": {
            "path": "./async-fragment-to-await-transformer",
            "priority": -1
        },
        "deprecated": true
    },
    "<async-fragment-timeout>": {
        "transformer": {
            "path": "./async-fragment-to-await-transformer",
            "priority": -1
        },
        "deprecated": true
    },
    "<async-fragment-error>": {
        "transformer": {
            "path": "./async-fragment-to-await-transformer",
            "priority": -1
        },
        "deprecated": true
    }
});