(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91ba40a6"],{"446e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?a("span",{staticClass:"required"},[e._v("*")]):e._e()]),a("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?a("small",{staticClass:"note"},[a("Markdown",{attrs:{content:e.note}})],1):e._e()])},n=[],r=a("2b0e"),l=a("84f8"),o=a("e6e0"),i=r["a"].extend({name:"TextInput",components:{Markdown:o["a"]},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},note:{type:String,required:!1},isRequired:{type:Boolean,required:!1}},computed:{slug:function(){return Object(l["a"])("text",this.label,this.value)}}}),c=i,u=(a("6850"),a("2877")),d=Object(u["a"])(c,s,n,!1,null,"548f8ecc",null);t["a"]=d.exports},6850:function(e,t,a){"use strict";a("7f9c")},7737:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)+" ")]),a("input",{attrs:{id:e.slug,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?a("small",{staticClass:"note"},[a("Markdown",{attrs:{content:e.note}})],1):e._e()])},n=[],r=a("2b0e"),l=a("e6e0"),o=a("84f8"),i=r["a"].extend({name:"Checkbox",components:{Markdown:l["a"]},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(o["a"])("box",this.label)}}}),c=i,u=a("2877"),d=Object(u["a"])(c,s,n,!1,null,null,null);t["a"]=d.exports},"7f9c":function(e,t,a){},8169:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-results"},[a("h2",[e._v("Output values")]),a("div",[a("h3",[e._v("Preview")]),a("Markdown",{attrs:{content:e.result}})],1),a("div",[a("h3",[e._v("Code")]),a("Pre",[e._v(e._s(e.result))])],1)])},n=[],r=a("2b0e"),l=a("ee75"),o=a("e6e0"),i=r["a"].extend({name:"Results",components:{Markdown:o["a"],Pre:l["a"]},props:{result:String}}),c=i,u=a("2877"),d=Object(u["a"])(c,s,n,!1,null,null,null);t["a"]=d.exports},"84f8":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return n}));a("a15b"),a("ac1f"),a("5319");function s(e){return e.replace(/^\/+/,"")}function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var s=t.join("-");return s.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},ca2c:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-notes"},[a("h2",[e._v("Notes")]),a("p",[a("Markdown",{attrs:{content:e.message}})],1)])},n=[],r=a("2b0e"),l=a("e6e0"),o=r["a"].extend({name:"Help",components:{Markdown:l["a"]},props:{message:String}}),i=o,c=a("2877"),u=Object(c["a"])(i,s,n,!1,null,null,null);t["a"]=u.exports},ee75:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",[e._t("default")],2)])},n=[],r=a("2b0e"),l=r["a"].extend({name:"Pre"}),o=l,i=a("2877"),c=Object(i["a"])(o,s,n,!1,null,null,null);t["a"]=c.exports},f3c2:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"badges container-lg"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"app-input"},[a("h2",[e._v("Input values")]),a("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[a("fieldset",{attrs:{name:"text"}},[a("legend",[e._v("Text")]),a("TextInput",{attrs:{label:"Label"},model:{value:e.label,callback:function(t){e.label=t},expression:"label"}}),a("br"),a("TextInput",{attrs:{label:"Message",isRequired:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("br")],1),a("br"),a("fieldset",{attrs:{name:"appearance"}},[a("legend",[e._v("Appearance")]),a("TextInput",{attrs:{label:"Color",note:"Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`",isRequired:""},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),a("Checkbox",{attrs:{label:"Large"},model:{value:e.isLarge,callback:function(t){e.isLarge=t},expression:"isLarge"}}),a("br"),a("TextInput",{attrs:{label:"Logo",note:"Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"},model:{value:e.logo,callback:function(t){e.logo=t},expression:"logo"}}),a("TextInput",{attrs:{label:"Logo color",note:"The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},model:{value:e.logoColor,callback:function(t){e.logoColor=t},expression:"logoColor"}})],1),a("br"),a("fieldset",{attrs:{name:"links"}},[a("legend",[e._v("Links")]),a("TextInput",{attrs:{label:"Click target",placeholder:"e.g. https://example.com",note:"URL or a local path like `/docs/`. This doesn't have to be set, but a button without a click destination is not so useful."},model:{value:e.target,callback:function(t){e.target=t},expression:"target"}})],1),a("br"),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),a("div",{staticClass:"col-6"},[a("Results",{attrs:{result:e.result}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("Help",{attrs:{message:e.note}})],1)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[e._v("Generic badges")])])])}],r=(a("99af"),a("2b0e")),l=a("7737"),o=a("ca2c"),i=a("8169"),c=a("446e"),u=a("5167"),d=a("17a3"),p="\nThis form lets you create a fixed badge using arbitrary text and a link.\n\nFor example, describe a tools or platforms your repo is built on or built for running. This form takes care of encoding characters so they are safe for the badge URL.\n",g=r["a"].extend({name:"GenericBadges",components:{Checkbox:l["a"],Help:o["a"],Results:i["a"],TextInput:c["a"]},data:function(){return{label:"Foo",message:"Bar",color:d["a"].Green,isLarge:!1,target:"https://",logo:"",logoColor:"",result:"_Your output will appear here_",note:p}},methods:{submit:function(){console.debug("Process inputs and render results");var e=[this.label,this.message,this.color,this.isLarge,this.target,this.logo,this.logoColor];console.debug(e);var t=Object(u["a"])(this.label,this.message,this.color,this.isLarge,this.target,this.logo,this.logoColor,!1),a=Object(u["a"])(this.label,this.message,this.color,this.isLarge,this.target,this.logo,this.logoColor,!0);this.result="_Dash badge_\n\n".concat(t,"\n\n_Query parameter badge_\n\n").concat(a,"\n      ")}}}),b=g,f=a("2877"),h=Object(f["a"])(b,s,n,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-91ba40a6.2d102d38.js.map