(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-fields-f58f4f8061d96ebfbe5ec1d4d038382c.png"},123:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-path-e0ae42b2a224e021260032b6ef7decab.png"},124:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-params-38ee277b9e4933d64b5bef7a544d626b.png"},125:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-headers-ec374ed9d6de475ce39800bb051c473a.png"},126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/editor-body-ad8dc6437ce714c17f96967631c4419d.png"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(84)),i={id:"query-editor",title:"Query editor"},s={unversionedId:"query-editor",id:"query-editor",isDocsHomePage:!1,title:"Query editor",description:"This page explains the what each part of the query editor does, and how you can configure it.",source:"@site/docs/query-editor.md",slug:"/query-editor",permalink:"/grafana-json-datasource/query-editor",editUrl:"https://github.com/marcusolsson/grafana-json-datasource/edit/main/website/docs/query-editor.md",version:"current",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/grafana-json-datasource/configuration"},next:{title:"Macros",permalink:"/grafana-json-datasource/macros"}},c=[{value:"Fields",id:"fields",children:[]},{value:"Path",id:"path",children:[]},{value:"Params",id:"params",children:[]},{value:"Headers",id:"headers",children:[]},{value:"Body",id:"body",children:[]},{value:"Cache time",id:"cache-time",children:[]}],b={toc:c};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page explains the what each part of the query editor does, and how you can configure it."),Object(o.b)("p",null,"The query editor for the JSON API data source consists of a number of tabs. Each tab configures a part of the query."),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Fields",src:a(122).default})),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Fields")," tab is where you select the data to extract from the JSON document returned by the URL configured in the data source configuration."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Field")," must contain a valid ",Object(o.b)("a",{parentName:"p",href:"/grafana-json-datasource/jsonpath"},"JSONPath")," expression and can return one or more elements.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Type")," defines the JSON type of the elements returned by the ",Object(o.b)("strong",{parentName:"p"},"Field")," expression. By default, Grafana uses the types in the JSON document. If ",Object(o.b)("strong",{parentName:"p"},"Type")," is set to a different type than the original property type, Grafana tries to parse the value."),Object(o.b)("p",{parentName:"li"},"This can be useful in cases where the API returns quoted numbers, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'"price": "3.49"'),"."))),Object(o.b)("h4",{id:"fields-have-different-lengths"},Object(o.b)("inlineCode",{parentName:"h4"},"Fields have different lengths")),Object(o.b)("p",null,"All fields must return the same number of values. If you get this error it means that one or more of the objects are missing the queried element."),Object(o.b)("p",null,"In the following example, the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," property is present in both objects, but ",Object(o.b)("inlineCode",{parentName:"p"},"version")," isn't."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [\n    {\n      "name": "order-api",\n      "version": "1"\n    },\n    {\n      "name": "billing-api"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"In the example below, you can see a couple of expressions and their results for the JSON structure in the previous example. Since JSONPath expressions are evaluated individually, Grafana can't tell which version that was missing."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Expression"),Object(o.b)("th",{parentName:"tr",align:null},"Result"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"$.services[*].name")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},'["order-api", "billing-api"]'))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"$.services[*].version")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},'["1"]'))))),Object(o.b)("p",null,"Depending on your use case, you can use a filter expression to only return items that contain a version:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},"$.services[?(@.version)].name\n")),Object(o.b)("h3",{id:"path"},"Path"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Path",src:a(123).default})),Object(o.b)("p",null,"The drop-down box to the left lets you configure the ",Object(o.b)("strong",{parentName:"p"},"HTTP method")," of the request sent to the URL and can be set to ",Object(o.b)("strong",{parentName:"p"},"GET")," and ",Object(o.b)("strong",{parentName:"p"},"POST"),"."),Object(o.b)("p",null,"The text box lets you append a path to the URL in the data source configuration. This can be used to dynamically change the request URL using ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables"),"."),Object(o.b)("p",null,"For example, by setting the path to ",Object(o.b)("inlineCode",{parentName:"p"},"/movies/${movie}/summary")," you can query the summary for any movie without having to change the query itself."),Object(o.b)("h3",{id:"params"},"Params"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Params",src:a(124).default})),Object(o.b)("p",null,"Add any parameters you'd like to send as part of the query string. For example, the parameters in the screenshot gets encoded as ",Object(o.b)("inlineCode",{parentName:"p"},"?category=movies"),"."),Object(o.b)("p",null,"Both the ",Object(o.b)("strong",{parentName:"p"},"Key")," and ",Object(o.b)("strong",{parentName:"p"},"Value")," fields support ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," Any query parameters that have been set by the administrator in the data source configuration has higher priority and overrides the parameters set by the query.")),Object(o.b)("h3",{id:"headers"},"Headers"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Headers",src:a(125).default})),Object(o.b)("p",null,"Add any parameters you'd like to send as HTTP headers."),Object(o.b)("p",null,"Both the ",Object(o.b)("strong",{parentName:"p"},"Key")," and ",Object(o.b)("strong",{parentName:"p"},"Value")," fields support ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/variables/"},"variables"),"."),Object(o.b)("h3",{id:"body"},"Body"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Body",src:a(126).default})),Object(o.b)("p",null,"Sets the text to send as a request body."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Syntax highlighting")," sets the active syntax for the editor. This is only for visual purposes and doesn't change the actual request.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," Due to limitations in modern browsers, Grafana ignores the request body if the HTTP method is set to GET.")),Object(o.b)("h3",{id:"cache-time"},"Cache time"),Object(o.b)("p",null,"By default, Grafana caches the JSON document returned by the last request to avoid hitting rate limits while configuring your query. Once you're happy with your query, consider setting the cache time to ",Object(o.b)("strong",{parentName:"p"},"0s")," to disable caching."))}l.isMDXComponent=!0},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(m,s(s({ref:t},b),{},{components:a})):r.a.createElement(m,s({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);