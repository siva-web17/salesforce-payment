!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(0),c=n.n(i),u=n(3),a=n.n(u),l=n(4),f=n.n(l),s=n(1);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),a=0;a<i;a++)u[a]=arguments[a];return r=this,o=(e=y(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==p(o)&&"function"!=typeof o?d(r):o,v(d(n),"onclick",function(){return console.log(d(n))}),v(d(n),"Headers",function(){return c.a.createElement(s.Helmet,null,c.a.createElement("title",null,"Super"))}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,c.a.Component),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",null,this.Headers(),c.a.createElement("h1",null,"Test"),c.a.createElement("button",{onClick:this.onclick},"Click"))}}])&&b(n.prototype,r),o&&b(n,o),t}(),O=o()();O.use("/static",o.a.static(f.a.resolve(__dirname,"public")));var g=process.env.PORT||3e3;O.get("/",function(e,t){var n=s.Helmet.renderStatic(),r=a.a.renderToStaticMarkup(c.a.createElement(h,null));t.send("\n  <!DOCTYPE html />\n  <html>\n  <head>\n      ".concat(n.meta.toString(),"\n      ").concat(n.title.toString(),'\n  </head>\n  <body>\n  <div id="app">').concat(r,'</div>\n  </body>\n  <script src="/static/client.js"><\/script>\n  <script src="/static/vendors~client.js"><\/script>\n  </html>\n    '))}),O.listen(g,function(){return console.log("Running in 3000")})}]);