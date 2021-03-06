$_mod.def("/marko$4.2.8/taglibs/html/marko", {
    "taglib-id": "marko-html",
    "<html-comment>": {
        "renderer": "./html-comment-tag.js",
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<a>": {
        "@href": "#html-href",
        "@hreflang": "#html-hreflang",
        "@media": "#html-media",
        "@rel": "#html-rel",
        "@target": "#html-target",
        "@type": "#html-type",
        "html": true,
        "autocomplete": [
            {},
            {
                "displayText": "a href=\"\"",
                "snippet": "a href=\"${1:#}\""
            },
            {
                "snippet": "a name=\"${1:name}\""
            },
            {
                "displayText": "a href=\"mailto:\"",
                "snippet": "a href=\"mailto:${1:joe@example.com}?subject=${2:feedback}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<abbr>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "abbr title=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<address>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<area>": {
        "@alt": "#html-alt",
        "@coords": "#html-coords",
        "@href": "#html-href",
        "@hreflang": "#html-hreflang",
        "@media": "#html-media",
        "@rel": "#html-rel",
        "@shape": "#html-shape",
        "@target": "#html-target",
        "@type": "#html-type",
        "html": true,
        "autocomplete": [
            {},
            {
                "displayText": "area shape=\"\" coords=\"\" href=\"\"",
                "snippet": "area ${1:shape=\"${2:default}\"} coords=\"$3\" ${4:href=\"${5:#}\"}"
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<article>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<aside>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<audio>": {
        "@autoplay": "#html-autoplay",
        "@controls": "#html-controls",
        "@loop": "#html-loop",
        "@mediagroup": "#html-mediagroup",
        "@muted": "#html-muted",
        "@preload": "#html-preload",
        "@src": "#html-src",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "audio src=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<b>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<base>": {
        "@href": "#html-href",
        "@target": "#html-target",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "base href=\"${1:#}\" target=\"${2:_blank}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<bdi>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "bdi dir=\"${1:auto}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<bdo>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "bdo dir=\"${1:auto}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<blockquote>": {
        "@cite": "#html-cite",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "blockquote cite=\"${1:http://}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<body>": {
        "@onafterprint": "#html-onafterprint",
        "@onbeforeprint": "#html-onbeforeprint",
        "@onbeforeunload": "#html-onbeforeunload",
        "@onhashchange": "#html-onhashchange",
        "@onmessage": "#html-onmessage",
        "@onoffline": "#html-onoffline",
        "@ononline": "#html-ononline",
        "@onpagehide": "#html-onpagehide",
        "@onpageshow": "#html-onpageshow",
        "@onpopstate": "#html-onpopstate",
        "@onredo": "#html-onredo",
        "@onresize": "#html-onresize",
        "@onstorage": "#html-onstorage",
        "@onundo": "#html-onundo",
        "@onunload": "#html-onunload",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<br>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<button>": {
        "@autofocus": "#html-autofocus",
        "@disabled": "#html-disabled",
        "@form": "#html-form",
        "@formaction": "#html-formaction",
        "@formenctype": "#html-formenctype",
        "@formmethod": "#html-formmethod",
        "@formnovalidate": "#html-formnovalidate",
        "@formtarget": "#html-formtarget",
        "@name": "#html-name",
        "@type": "#html-type",
        "@value": "#html-value",
        "html": true,
        "autocomplete": [
            {},
            {
                "displayText": "button type=\"button\"",
                "snippet": "button type=\"${1:button}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<canvas>": {
        "@height": "#html-height",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "canvas id=\"${1:canvas}\" width=\"${2:300}\" height=\"${3:300}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<caption>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<cite>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<code>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<col>": {
        "@span": "#html-span",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<colgroup>": {
        "@span": "#html-span",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<command>": {
        "@checked": "#html-checked",
        "@disabled": "#html-disabled",
        "@icon": "#html-icon",
        "@label": "#html-label",
        "@radiogroup": "#html-radiogroup",
        "@type": "#html-type",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<datalist>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<dd>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<del>": {
        "@cite": "#html-cite",
        "@datetime": "#html-datetime",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<details>": {
        "@open": "#html-open",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<dfn>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<div>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "div class=\"$2\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<dl>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<dt>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<em>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<embed>": {
        "@height": "#html-height",
        "@src": "#html-src",
        "@type": "#html-type",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "embed type=\"${1:video/quicktime}\" src=\"${2:#}\" width=\"${3:300}\" height=\"${4:300}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<fieldset>": {
        "@disabled": "#html-disabled",
        "@form": "#html-form",
        "@name": "#html-name",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<figcaption>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<figure>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<footer>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<form>": {
        "@accept-charset": "#html-accept-charset",
        "@action": "#html-action",
        "@autocomplete": "#html-autocomplete",
        "@enctype": "#html-enctype",
        "@method": "#html-method",
        "@name": "#html-name",
        "@novalidate": "#html-novalidate",
        "@target": "#html-target",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "form class=\"$1\" action=\"${2:index.html}\" method=\"${3:post}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<h1>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<h2>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<h3>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<h4>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<h5>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<h6>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<head>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<header>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<hgroup>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<hr>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<html>": {
        "@manifest": "#html-manifest",
        "@xml:lang": "#html-xml:lang",
        "@xmlns": "#html-xmlns",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "!DOCTYPE html"
            },
            {
                "displayText": "HTML page",
                "snippet": "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\">\n\t\t<title>${1:title}</title>\n\t</head>\n\t<body>\n\t\t$2\n\t</body>\n</html>\n"
            },
            {
                "displayText": "HTML page (concise)",
                "snippet": "<!DOCTYPE html>\nhtml lang=\"en\"\n\thead\n\t\tmeta charset=\"UTF-8\"\n\t\t<title>${1:title}</title>\n\tbody\n\t\t$2\n"
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<i>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<iframe>": {
        "@height": "#html-height",
        "@name": "#html-name",
        "@sandbox": "#html-sandbox",
        "@seamless": "#html-seamless",
        "@src": "#html-src",
        "@srcdoc": "#html-srcdoc",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "iframe src=\"$1\" width=\"$2\" height=\"$3\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<img>": {
        "@alt": "#html-alt",
        "@height": "#html-height",
        "@ismap": "#html-ismap",
        "@longdesc": "#html-longdesc",
        "@src": "#html-src",
        "@usemap": "#html-usemap",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "img src=\"$1\" alt=\"$2\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<input>": {
        "@accept": "#html-accept",
        "@alt": "#html-alt",
        "@autocomplete": "#html-autocomplete",
        "@autofocus": "#html-autofocus",
        "@checked": "#html-checked",
        "@dirname": "#html-dirname",
        "@disabled": "#html-disabled",
        "@form": "#html-form",
        "@formaction": "#html-formaction",
        "@formenctype": "#html-formenctype",
        "@formmethod": "#html-formmethod",
        "@formnovalidate": "#html-formnovalidate",
        "@formtarget": "#html-formtarget",
        "@height": "#html-height",
        "@list": "#html-list",
        "@max": "#html-max",
        "@maxlength": "#html-maxlength",
        "@min": "#html-min",
        "@multiple": "#html-multiple",
        "@name": "#html-name",
        "@pattern": "#html-pattern",
        "@placeholder": "#html-placeholder",
        "@readonly": "#html-readonly",
        "@required": "#html-required",
        "@size": "#html-size",
        "@src": "#html-src",
        "@step": "#html-step",
        "@type": "#html-type",
        "@value": "#html-value",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "input type=\"${1}\" name=\"${2:name}\" value=\"$3\"",
                "triggerAutocompleteAfterInsert": true
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<ins>": {
        "@cite": "#html-cite",
        "@datetime": "#html-datetime",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<kbd>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<keygen>": {
        "@autofocus": "#html-autofocus",
        "@challenge": "#html-challenge",
        "@disabled": "#html-disabled",
        "@form": "#html-form",
        "@keytype": "#html-keytype",
        "@name": "#html-name",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "keygen name=\"${1:name}\" challenge=\"${2:string}\" keytype=\"${3:RSA}\" keyparams=\"${4:medium}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<label>": {
        "@for": "#html-for",
        "@form": "#html-form",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "label${1: for=\"$2\"}"
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<legend>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<li>": {
        "@value": "#html-value",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<link>": {
        "@disabled": "#html-disabled",
        "@href": "#html-href",
        "@hreflang": "#html-hreflang",
        "@media": "#html-media",
        "@rel": "#html-rel",
        "@sizes": "#html-sizes",
        "@type": "#html-type",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "link rel=\"${1:stylesheet}\" href=\"${2:/css/master.css}\" media=\"${3:screen}\" title=\"${4:no title}\" charset=\"${5:utf-8}\""
            },
            {
                "snippet": "link rel=\"icon\" href=\"$1.ico\""
            },
            {
                "snippet": "link rel=\"import\" href=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<map>": {
        "@name": "#html-name",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<mark>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<menu>": {
        "@label": "#html-label",
        "@type": "#html-type",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<meta>": {
        "@charset": "#html-charset",
        "@content": "#html-content",
        "@http-equiv": "#html-http-equiv",
        "@name": "#html-name",
        "html": true,
        "autocomplete": [
            {
                "snippet": "meta name=\"${1:name}\" content=\"${2:content}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<meter>": {
        "@form": "#html-form",
        "@high": "#html-high",
        "@low": "#html-low",
        "@max": "#html-max",
        "@min": "#html-min",
        "@optimum": "#html-optimum",
        "@value": "#html-value",
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "meter min=\"${1:200}\" max=\"${2:500}\" value=\"${3:350}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<nav>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<noscript>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<object>": {
        "@archive": "#html-archive",
        "@codebase": "#html-codebase",
        "@codetype": "#html-codetype",
        "@data": "#html-data",
        "@declare": "#html-declare",
        "@form": "#html-form",
        "@height": "#html-height",
        "@name": "#html-name",
        "@standby": "#html-standby",
        "@type": "#html-type",
        "@usemap": "#html-usemap",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {
                "snippet": "object data=\"${1:http://}\" type=\"${2:mimetype}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<ol>": {
        "@reversed": "#html-reversed",
        "@start": "#html-start",
        "@type": "#html-type",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<optgroup>": {
        "@disabled": "#html-disabled",
        "@label": "#html-label",
        "html": true,
        "autocomplete": [
            {
                "snippet": "optgroup label=\"${1:Group 1}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<option>": {
        "@disabled": "#html-disabled",
        "@label": "#html-label",
        "@selected": "#html-selected",
        "@value": "#html-value",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<output>": {
        "@for": "#html-for",
        "@form": "#html-form",
        "@name": "#html-name",
        "html": true,
        "autocomplete": [
            {
                "snippet": "output name=\"${1:result}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<p>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<param>": {
        "@name": "#html-name",
        "@value": "#html-value",
        "html": true,
        "autocomplete": [
            {
                "snippet": "param name=\"${1:foo}\" value=\"${2:bar}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<picture>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<pre>": {
        "preserve-whitespace": true,
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<progress>": {
        "@form": "#html-form",
        "@max": "#html-max",
        "@value": "#html-value",
        "html": true,
        "autocomplete": [
            {
                "snippet": "progress value=\"${1:50}\" max=\"${2:100}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<q>": {
        "@cite": "#html-cite",
        "html": true,
        "autocomplete": [
            {
                "snippet": "q cite=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<rp>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<rt>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<ruby>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<s>": {
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<samp>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<script>": {
        "preserve-whitespace": true,
        "@marko-init": "boolean",
        "@template-helpers": "boolean",
        "@*": {
            "ignore": true
        },
        "autocomplete": [
            {
                "snippet": "script template-helpers",
                "descriptionMoreURL": "http://markojs.com/docs/marko/language-guide/#helpers"
            }
        ],
        "@async": "#html-async",
        "@charset": "#html-charset",
        "@defer": "#html-defer",
        "@src": "#html-src",
        "@type": "#html-type",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<section>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<select>": {
        "@autofocus": "#html-autofocus",
        "@disabled": "#html-disabled",
        "@form": "#html-form",
        "@multiple": "#html-multiple",
        "@name": "#html-name",
        "@required": "#html-required",
        "@size": "#html-size",
        "html": true,
        "autocomplete": [
            {
                "snippet": "select class=\"$1\" name=\"$2\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<small>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<source>": {
        "@media": "#html-media",
        "@src": "#html-src",
        "@type": "#html-type",
        "html": true,
        "autocomplete": [
            {
                "snippet": "source src=\"${1:http://}\" type=\"${2:mimetype}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<span>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<strong>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<style>": {
        "preserve-whitespace": true,
        "@disabled": "#html-disabled",
        "@media": "#html-media",
        "@scoped": "#html-scoped",
        "@type": "#html-type",
        "html": true,
        "autocomplete": [
            {
                "snippet": "style media=\"screen\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<sub>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<summary>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<sup>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<table>": {
        "@border": "#html-border",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<tbody>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<td>": {
        "@colspan": "#html-colspan",
        "@headers": "#html-headers",
        "@rowspan": "#html-rowspan",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<textarea>": {
        "preserve-whitespace": true,
        "@autofocus": "#html-autofocus",
        "@cols": "#html-cols",
        "@dirname": "#html-dirname",
        "@disabled": "#html-disabled",
        "@form": "#html-form",
        "@label": "#html-label",
        "@maxlength": "#html-maxlength",
        "@name": "#html-name",
        "@placeholder": "#html-placeholder",
        "@readonly": "#html-readonly",
        "@required": "#html-required",
        "@rows": "#html-rows",
        "@wrap": "#html-wrap",
        "html": true,
        "autocomplete": [
            {
                "snippet": "textarea name=\"${1:name}\" rows=\"${2:8}\" cols=\"${3:40}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<tfoot>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<th>": {
        "@colspan": "#html-colspan",
        "@headers": "#html-headers",
        "@rowspan": "#html-rowspan",
        "@scope": "#html-scope",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<thead>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<time>": {
        "@datetime": "#html-datetime",
        "@pubdate": "#html-pubdate",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<title>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<tr>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<track>": {
        "@default": "#html-default",
        "@kind": "#html-kind",
        "@label": "#html-label",
        "@src": "#html-src",
        "@srclang": "#html-srclang",
        "html": true,
        "autocomplete": [
            {
                "snippet": "track kind=\"${1:subtitles}\" src=\"${2:sampleSubtitles_en.srt}\" srclang=\"${3:en}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<u>": {
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<ul>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<video>": {
        "@autoplay": "#html-autoplay",
        "@controls": "#html-controls",
        "@height": "#html-height",
        "@loop": "#html-loop",
        "@mediagroup": "#html-mediagroup",
        "@muted": "#html-muted",
        "@poster": "#html-poster",
        "@preload": "#html-preload",
        "@src": "#html-src",
        "@width": "#html-width",
        "html": true,
        "autocomplete": [
            {
                "displayText": "video src=\"\" autoplay poster=\"\"",
                "snippet": "video src=\"${1:videofile.ogg}\" ${2:autoplay} ${3:poster=\"${4:posterimage.jpg}\"}"
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<wbr>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "attribute-groups": {
        "html-attributes": {
            "*": "string",
            "accesskey": {
                "html": true
            },
            "class": {
                "type": "cssStyle",
                "html": true
            },
            "contenteditable": {
                "type": "boolean",
                "html": true
            },
            "contextmenu": {
                "html": true
            },
            "dir": {
                "enum": [
                    "ltr",
                    "rtl"
                ],
                "html": true
            },
            "draggable": {
                "enum": [
                    "auto",
                    "false",
                    "true"
                ],
                "html": true
            },
            "dropzone": {
                "enum": [
                    "copy",
                    "move",
                    "link"
                ],
                "html": true
            },
            "hidden": {
                "enum": [
                    "hidden"
                ],
                "html": true
            },
            "id": {
                "type": "cssId",
                "html": true
            },
            "lang": {
                "enum": [
                    "ab",
                    "aa",
                    "af",
                    "sq",
                    "am",
                    "ar",
                    "an",
                    "hy",
                    "as",
                    "ay",
                    "az",
                    "ba",
                    "eu",
                    "bn",
                    "dz",
                    "bh",
                    "bi",
                    "br",
                    "bg",
                    "my",
                    "be",
                    "km",
                    "ca",
                    "zh",
                    "co",
                    "hr",
                    "cs",
                    "da",
                    "nl",
                    "en",
                    "eo",
                    "et",
                    "fo",
                    "fa",
                    "fi",
                    "fr",
                    "fy",
                    "gl",
                    "gd",
                    "gv",
                    "ka",
                    "de",
                    "el",
                    "kl",
                    "gn",
                    "gu",
                    "ht",
                    "ha",
                    "he",
                    "hi",
                    "hu",
                    "is",
                    "io",
                    "id",
                    "ia",
                    "ie",
                    "iu",
                    "ik",
                    "ga",
                    "it",
                    "ja",
                    "jv",
                    "kn",
                    "ks",
                    "kk",
                    "rw",
                    "ky",
                    "rn",
                    "ko",
                    "ku",
                    "lo",
                    "la",
                    "lv",
                    "li",
                    "ln",
                    "lt",
                    "mk",
                    "mg",
                    "ms",
                    "ml",
                    "mt",
                    "mi",
                    "mr",
                    "mo",
                    "mn",
                    "na",
                    "ne",
                    "no",
                    "oc",
                    "or",
                    "om",
                    "ps",
                    "pl",
                    "pt",
                    "pa",
                    "qu",
                    "rm",
                    "ro",
                    "ru",
                    "sz",
                    "sm",
                    "sg",
                    "sa",
                    "sr",
                    "sh",
                    "st",
                    "tn",
                    "sn",
                    "ii",
                    "sd",
                    "si",
                    "ss",
                    "sk",
                    "sl",
                    "so",
                    "es",
                    "su",
                    "sw",
                    "sv",
                    "tl",
                    "tg",
                    "ta",
                    "tt",
                    "te",
                    "th",
                    "bo",
                    "ti",
                    "to",
                    "ts",
                    "tr",
                    "tk",
                    "tw",
                    "ug",
                    "uk",
                    "ur",
                    "uz",
                    "vi",
                    "vo",
                    "wa",
                    "cy",
                    "wo",
                    "xh",
                    "yi",
                    "yo",
                    "zu"
                ],
                "html": true
            },
            "role": {
                "enum": [
                    "alert",
                    "alertdialog",
                    "article",
                    "application",
                    "banner",
                    "button",
                    "checkbox",
                    "columnheader",
                    "combobox",
                    "complementary",
                    "contentinfo",
                    "definition",
                    "directory",
                    "dialog",
                    "document",
                    "form",
                    "grid",
                    "gridcell",
                    "group",
                    "heading",
                    "img",
                    "link",
                    "list",
                    "listbox",
                    "listitem",
                    "log",
                    "main",
                    "marquee",
                    "math",
                    "menu",
                    "menubar",
                    "menuitem",
                    "menuitemcheckbox",
                    "menuitemradio",
                    "navigation",
                    "note",
                    "option",
                    "presentation",
                    "progressbar",
                    "radio",
                    "radiogroup",
                    "region",
                    "row",
                    "rowgroup",
                    "rowheader",
                    "scrollbar",
                    "search",
                    "separator",
                    "slider",
                    "spinbutton",
                    "status",
                    "tab",
                    "tablist",
                    "tabpanel",
                    "textbox",
                    "timer",
                    "toolbar",
                    "tooltip",
                    "tree",
                    "treegrid",
                    "treeitem"
                ],
                "html": true
            },
            "spellcheck": {
                "type": "boolean",
                "html": true
            },
            "style": {
                "type": "style",
                "html": true
            },
            "tabindex": {
                "html": true
            },
            "title": {
                "html": true
            },
            "onabort": {
                "html": true
            },
            "onblur": {
                "html": true
            },
            "oncanplay": {
                "html": true
            },
            "oncanplaythrough": {
                "html": true
            },
            "onchange": {
                "html": true
            },
            "onclick": {
                "html": true
            },
            "oncontextmenu": {
                "html": true
            },
            "oncuechange": {
                "html": true
            },
            "ondblclick": {
                "html": true
            },
            "ondrag": {
                "html": true
            },
            "ondragend": {
                "html": true
            },
            "ondragenter": {
                "html": true
            },
            "ondragleave": {
                "html": true
            },
            "ondragover": {
                "html": true
            },
            "ondragstart": {
                "html": true
            },
            "ondrop": {
                "html": true
            },
            "ondurationchange": {
                "html": true
            },
            "onemptied": {
                "html": true
            },
            "onended": {
                "html": true
            },
            "onerror": {
                "html": true
            },
            "onfocus": {
                "html": true
            },
            "oninput": {
                "html": true
            },
            "oninvalid": {
                "html": true
            },
            "onkeydown": {
                "html": true
            },
            "onkeypress": {
                "html": true
            },
            "onkeyup": {
                "html": true
            },
            "onload": {
                "html": true
            },
            "onloadeddata": {
                "html": true
            },
            "onloadedmetadata": {
                "html": true
            },
            "onloadstart": {
                "html": true
            },
            "onmousedown": {
                "html": true
            },
            "onmousemove": {
                "html": true
            },
            "onmouseout": {
                "html": true
            },
            "onmouseover": {
                "html": true
            },
            "onmouseup": {
                "html": true
            },
            "onmousewheel": {
                "html": true
            },
            "onpause": {
                "html": true
            },
            "onplay": {
                "html": true
            },
            "onplaying": {
                "html": true
            },
            "onprogress": {
                "html": true
            },
            "onratechange": {
                "html": true
            },
            "onreadystatechange": {
                "html": true
            },
            "onreset": {
                "html": true
            },
            "onscroll": {
                "html": true
            },
            "onseeked": {
                "html": true
            },
            "onseeking": {
                "html": true
            },
            "onselect": {
                "html": true
            },
            "onshow": {
                "html": true
            },
            "onstalled": {
                "html": true
            },
            "onsubmit": {
                "html": true
            },
            "onsuspend": {
                "html": true
            },
            "ontimeupdate": {
                "html": true
            },
            "onvolumechange": {
                "html": true
            },
            "onwaiting": {
                "html": true
            }
        }
    },
    "attributes": {
        "html-accept": {
            "enum": [
                "text/html",
                "text/plain",
                "application/msword",
                "application/msexcel",
                "application/postscript",
                "application/x-zip-compressed",
                "application/pdf",
                "application/rtf",
                "video/x-msvideo",
                "video/quicktime",
                "video/x-mpeg2",
                "audio/x-pn/realaudio",
                "audio/x-mpeg",
                "audio/x-waw",
                "audio/x-aiff",
                "audio/basic",
                "image/tiff",
                "image/jpeg",
                "image/gif",
                "image/x-png",
                "image/x-photo-cd",
                "image/x-MS-bmp",
                "image/x-rgb",
                "image/x-portable-pixmap",
                "image/x-portable-greymap",
                "image/x-portablebitmap"
            ],
            "html": true,
            "name": "accept"
        },
        "html-accept-charset": {
            "html": true,
            "name": "accept-charset"
        },
        "html-action": {
            "html": true,
            "name": "action"
        },
        "html-align": {
            "html": true,
            "name": "align"
        },
        "html-alt": {
            "html": true,
            "name": "alt"
        },
        "html-archive": {
            "html": true,
            "name": "archive"
        },
        "html-async": {
            "type": "flag",
            "html": true,
            "name": "async"
        },
        "html-autocomplete": {
            "enum": [
                "off",
                "on"
            ],
            "html": true,
            "name": "autocomplete"
        },
        "html-autofocus": {
            "type": "flag",
            "html": true,
            "name": "autofocus"
        },
        "html-autoplay": {
            "type": "flag",
            "html": true,
            "name": "autoplay"
        },
        "html-behavior": {
            "enum": [
                "scroll",
                "slide",
                "alternate"
            ],
            "html": true,
            "name": "behavior"
        },
        "html-bgcolor": {
            "type": "color",
            "html": true,
            "name": "bgcolor"
        },
        "html-border": {
            "html": true,
            "name": "border"
        },
        "html-challenge": {
            "html": true,
            "name": "challenge"
        },
        "html-charset": {
            "enum": [
                "iso-8859-1",
                "utf-8",
                "shift_jis",
                "euc-jp",
                "big5",
                "gb2312",
                "euc-kr",
                "din_66003-kr",
                "ns_4551-1-kr",
                "sen_850200_b",
                "csISO2022jp",
                "hz-gb-2312",
                "ibm852",
                "ibm866",
                "irv",
                "iso-2022-kr",
                "iso-8859-2",
                "iso-8859-3",
                "iso-8859-4",
                "iso-8859-5",
                "iso-8859-6",
                "iso-8859-7",
                "iso-8859-8",
                "iso-8859-9",
                "koi8-r",
                "ks_c_5601",
                "windows-1250",
                "windows-1251",
                "windows-1252",
                "windows-1253",
                "windows-1254",
                "windows-1255",
                "windows-1256",
                "windows-1257",
                "windows-1258",
                "windows-874",
                "x-euc",
                "asmo-708",
                "dos-720",
                "dos-862",
                "dos-874",
                "cp866",
                "cp1256"
            ],
            "html": true,
            "name": "charset"
        },
        "html-checked": {
            "type": "flag",
            "html": true,
            "name": "checked"
        },
        "html-cite": {
            "html": true,
            "name": "cite"
        },
        "html-codebase": {
            "html": true,
            "name": "codebase"
        },
        "html-codetype": {
            "html": true,
            "name": "codetype"
        },
        "html-cols": {
            "html": true,
            "name": "cols"
        },
        "html-colspan": {
            "html": true,
            "name": "colspan"
        },
        "html-content": {
            "html": true,
            "name": "content"
        },
        "html-controls": {
            "type": "flag",
            "html": true,
            "name": "controls"
        },
        "html-coords": {
            "html": true,
            "name": "coords"
        },
        "html-data": {
            "html": true,
            "name": "data"
        },
        "html-datetime": {
            "html": true,
            "name": "datetime"
        },
        "html-declare": {
            "type": "flag",
            "html": true,
            "name": "declare"
        },
        "html-default": {
            "type": "flag",
            "html": true,
            "name": "default"
        },
        "html-defer": {
            "type": "flag",
            "html": true,
            "name": "defer"
        },
        "html-direction": {
            "enum": [
                "left",
                "right",
                "up",
                "down"
            ],
            "html": true,
            "name": "direction"
        },
        "html-dirname": {
            "html": true,
            "name": "dirname"
        },
        "html-disabled": {
            "type": "flag",
            "html": true,
            "name": "disabled"
        },
        "html-enctype": {
            "enum": [
                "application/x-www-form-urlencoded",
                "multipart/form-data",
                "text/plain"
            ],
            "html": true,
            "name": "enctype"
        },
        "html-for": {
            "html": true,
            "name": "for"
        },
        "html-form": {
            "html": true,
            "name": "form"
        },
        "html-formaction": {
            "html": true,
            "name": "formaction"
        },
        "html-formenctype": {
            "enum": [
                "application/x-www-form-urlencoded",
                "multipart/form-data",
                "text/plain"
            ],
            "html": true,
            "name": "formenctype"
        },
        "html-formmethod": {
            "enum": [
                "get",
                "post"
            ],
            "html": true,
            "name": "formmethod"
        },
        "html-formnovalidate": {
            "type": "flag",
            "html": true,
            "name": "formnovalidate"
        },
        "html-formtarget": {
            "enum": [
                "_blank",
                "_parent",
                "_self",
                "_top"
            ],
            "html": true,
            "name": "formtarget"
        },
        "html-headers": {
            "html": true,
            "name": "headers"
        },
        "html-height": {
            "html": true,
            "name": "height"
        },
        "html-high": {
            "html": true,
            "name": "high"
        },
        "html-href": {
            "html": true,
            "name": "href"
        },
        "html-hreflang": {
            "html": true,
            "name": "hreflang"
        },
        "html-hspace": {
            "html": true,
            "name": "hspace"
        },
        "html-http-equiv": {
            "enum": [
                "content-type",
                "default-style",
                "refresh"
            ],
            "html": true,
            "name": "http-equiv"
        },
        "html-icon": {
            "html": true,
            "name": "icon"
        },
        "html-ismap": {
            "type": "flag",
            "html": true,
            "name": "ismap"
        },
        "html-keytype": {
            "enum": [
                "dsa",
                "ec",
                "rsa"
            ],
            "html": true,
            "name": "keytype"
        },
        "html-kind": {
            "enum": [
                "captions",
                "chapters",
                "descriptions",
                "metadata",
                "subtitles"
            ],
            "html": true,
            "name": "kind"
        },
        "html-label": {
            "html": true,
            "name": "label"
        },
        "html-list": {
            "html": true,
            "name": "list"
        },
        "html-longdesc": {
            "html": true,
            "name": "longdesc"
        },
        "html-loop": {
            "type": "flag",
            "html": true,
            "name": "loop"
        },
        "html-low": {
            "html": true,
            "name": "low"
        },
        "html-manifest": {
            "html": true,
            "name": "manifest"
        },
        "html-max": {
            "html": true,
            "name": "max"
        },
        "html-maxlength": {
            "html": true,
            "name": "maxlength"
        },
        "html-media": {
            "enum": [
                "screen",
                "tty",
                "tv",
                "projection",
                "handheld",
                "print",
                "aural",
                "braille",
                "embossed",
                "speech",
                "all",
                "width",
                "min-width",
                "max-width",
                "height",
                "min-height",
                "max-height",
                "device-width",
                "min-device-width",
                "max-device-width",
                "device-height",
                "min-device-height",
                "max-device-height",
                "orientation",
                "aspect-ratio",
                "min-aspect-ratio",
                "max-aspect-ratio",
                "device-aspect-ratio",
                "min-device-aspect-ratio",
                "max-device-aspect-ratio",
                "color",
                "min-color",
                "max-color",
                "color-index",
                "min-color-index",
                "max-color-index",
                "monochrome",
                "min-monochrome",
                "max-monochrome",
                "resolution",
                "min-resolution",
                "max-resolution",
                "scan",
                "grid"
            ],
            "html": true,
            "name": "media"
        },
        "html-mediagroup": {
            "html": true,
            "name": "mediagroup"
        },
        "html-method": {
            "enum": [
                "get",
                "post"
            ],
            "html": true,
            "name": "method"
        },
        "html-min": {
            "html": true,
            "name": "min"
        },
        "html-multiple": {
            "type": "flag",
            "html": true,
            "name": "multiple"
        },
        "html-muted": {
            "type": "flag",
            "html": true,
            "name": "muted"
        },
        "html-name": {
            "html": true,
            "name": "name"
        },
        "html-novalidate": {
            "type": "flag",
            "html": true,
            "name": "novalidate"
        },
        "html-open": {
            "type": "flag",
            "html": true,
            "name": "open"
        },
        "html-optimum": {
            "html": true,
            "name": "optimum"
        },
        "html-pattern": {
            "html": true,
            "name": "pattern"
        },
        "html-placeholder": {
            "html": true,
            "name": "placeholder"
        },
        "html-poster": {
            "html": true,
            "name": "poster"
        },
        "html-preload": {
            "enum": [
                "auto",
                "metadata",
                "none"
            ],
            "html": true,
            "name": "preload"
        },
        "html-pubdate": {
            "html": true,
            "name": "pubdate"
        },
        "html-radiogroup": {
            "html": true,
            "name": "radiogroup"
        },
        "html-rel": {
            "enum": [
                "alternate",
                "author",
                "bookmark",
                "help",
                "license",
                "next",
                "nofollow",
                "noreferrer",
                "prefetch",
                "prev",
                "search",
                "sidebar",
                "tag",
                "external"
            ],
            "html": true,
            "name": "rel"
        },
        "html-readonly": {
            "type": "flag",
            "html": true,
            "name": "readonly"
        },
        "html-required": {
            "type": "flag",
            "html": true,
            "name": "required"
        },
        "html-reversed": {
            "type": "flag",
            "html": true,
            "name": "reversed"
        },
        "html-rows": {
            "html": true,
            "name": "rows"
        },
        "html-rowspan": {
            "html": true,
            "name": "rowspan"
        },
        "html-sandbox": {
            "enum": [
                "allow-forms",
                "allow-same-origin",
                "allow-scripts",
                "allow-top-navigation"
            ],
            "html": true,
            "name": "sandbox"
        },
        "html-seamless": {
            "type": "flag",
            "html": true,
            "name": "seamless"
        },
        "html-selected": {
            "type": "flag",
            "html": true,
            "name": "selected"
        },
        "html-scope": {
            "enum": [
                "col",
                "colgroup",
                "row",
                "rowgroup"
            ],
            "html": true,
            "name": "scope"
        },
        "html-scoped": {
            "type": "boolean",
            "html": true,
            "name": "scoped"
        },
        "html-scrollamount": {
            "html": true,
            "name": "scrollamount"
        },
        "html-scrolldelay": {
            "html": true,
            "name": "scrolldelay"
        },
        "html-shape": {
            "enum": [
                "circle",
                "default",
                "poly",
                "rect"
            ],
            "html": true,
            "name": "shape"
        },
        "html-size": {
            "html": true,
            "name": "size"
        },
        "html-sizes": {
            "enum": [
                "any"
            ],
            "html": true,
            "name": "sizes"
        },
        "html-span": {
            "html": true,
            "name": "span"
        },
        "html-src": {
            "html": true,
            "name": "src"
        },
        "html-srcdoc": {
            "html": true,
            "name": "srcdoc"
        },
        "html-srclang": {
            "html": true,
            "name": "srclang"
        },
        "html-standby": {
            "html": true,
            "name": "standby"
        },
        "html-start": {
            "html": true,
            "name": "start"
        },
        "html-step": {
            "html": true,
            "name": "step"
        },
        "html-target": {
            "enum": [
                "_blank",
                "_parent",
                "_self",
                "_top"
            ],
            "html": true,
            "name": "target"
        },
        "html-truespeed": {
            "type": "flag",
            "html": true,
            "name": "truespeed"
        },
        "html-type": {
            "html": true,
            "name": "type"
        },
        "html-usemap": {
            "html": true,
            "name": "usemap"
        },
        "html-value": {
            "html": true,
            "name": "value"
        },
        "html-vspace": {
            "html": true,
            "name": "vspace"
        },
        "html-width": {
            "html": true,
            "name": "width"
        },
        "html-wrap": {
            "enum": [
                "hard",
                "soft"
            ],
            "html": true,
            "name": "wrap"
        },
        "html-xml:lang": {
            "html": true,
            "name": "xml:lang"
        },
        "html-xmlns": {
            "html": true,
            "name": "xmlns"
        }
    },
    "<big>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<dialog>": {
        "@open": "#html-open",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<ilayer>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<main>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<marquee>": {
        "@align": "#html-align",
        "@behavior": "#html-behavior",
        "@bgcolor": "#html-bgcolor",
        "@direction": "#html-direction",
        "@height": "#html-height",
        "@hspace": "#html-hspace",
        "@loop": "#html-loop",
        "@scrollamount": "#html-scrollamount",
        "@scrolldelay": "#html-scrolldelay",
        "@truespeed": "#html-truespeed",
        "@vspace": "#html-vspace",
        "@width": "#html-width",
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<tt>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<var>": {
        "html": true,
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<content>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "content select=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<data>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "data value=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<menuitem>": {
        "html": true,
        "autocomplete": [
            {},
            {
                "snippet": "menuitem type=\"${1:command}\" label=\"${2:Save}\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<opt>": {
        "html": true,
        "autocomplete": [
            {
                "snippet": "option${1: value=\"${2:option}\"}"
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    },
    "<template>": {
        "html": true,
        "autocomplete": [
            {
                "snippet": "template id=\"$1\""
            }
        ],
        "attribute-groups": [
            "html-attributes"
        ]
    }
}
);