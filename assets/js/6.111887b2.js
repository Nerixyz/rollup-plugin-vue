(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(e,t,n){"use strict";n.r(t);var o=n(0),s=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("ul",[n("li",[n("p",[e._m(1),n("br"),e._v("\nThe "),n("code",[e._v("__file")]),e._v(' variable is used by devtools to provide "open in editor" feature. However, in production mode only filename is used. See issue '),n("a",{attrs:{href:"https://github.com/vuejs/rollup-plugin-vue/issues/258",target:"_blank",rel:"noopener noreferrer"}},[e._v("#258"),n("OutboundLink")],1),e._v(" to enable production mode.")])]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"frequently-asked-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions","aria-hidden":"true"}},[this._v("#")]),this._v(" Frequently Asked Questions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("strong",[this._v("Why does "),t("code",[this._v("__file")]),this._v(" use absolute path?")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[n("strong",[e._v("Error: Cannot find module "),n("code",[e._v("vue-template-compiler")]),e._v("?")]),n("br"),e._v(" "),n("code",[e._v("vue-template-compiler")]),e._v(" has a constraint that it should be exact same version as "),n("code",[e._v("vue")]),e._v(" that is why it is included as peer dependency. Make sure you install "),n("code",[e._v("vue-template-compiler")]),e._v(" and "),n("code",[e._v("vue")]),e._v(" in your project.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[n("strong",[e._v("Error: Cannot find module "),n("code",[e._v("less")]),e._v(" or "),n("code",[e._v("node-sass")]),e._v(" or "),n("code",[e._v("stylus")]),e._v("?")]),n("br"),e._v("\nIf you're using any of the style languages (other than css) supported in "),n("code",[e._v(".vue")]),e._v(" file, you have to install that language's compiler.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[n("strong",[e._v("Error: 'default' is not exported by node_modules/vue-runtime-helpers/dist/normalize-component.js")]),n("br"),e._v("\nYou may encounter this error when using version 4.6.2 onwards. The solution is to include "),n("code",[e._v("rollup-plugin-commonjs")]),e._v(". In your config file "),n("code",[e._v("rollup.config.js")]),e._v(", you have to import this plugin and invoke it like so:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import vue from 'rollup-plugin-vue';\nimport commonjs from 'rollup-plugin-commonjs';\n\nexport default {\n  entry: 'index.js',\n  plugins: [\n    commonjs(),\n    vue(),\n  ]\n}\n")])])])])}],!1,null,null,null);s.options.__file="faqs.md";t.default=s.exports}}]);