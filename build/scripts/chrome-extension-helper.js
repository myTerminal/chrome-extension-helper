!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("chromeExtensionHelper",[],n):"object"==typeof exports?exports.chromeExtensionHelper=n():e.chromeExtensionHelper=n()}(window,function(){return t={},e.m=n=[function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=[],o=[],u=(n.initializeStorage=function(){chrome.storage.local.onChanged.addListener(u(r)),chrome.storage.sync.onChanged.addListener(u(o))},n.createLocalProperty=function(e,n,t){return i(chrome.storage.local,e,n,t,r)},n.createSyncedProperty=function(e,n,t){return i(chrome.storage.sync,e,n,t,o)},function(e){return function(n){Object.keys(n).forEach(function(t){var r=e.filter(function(e){return e.name===t})[0];r&&r.load(n[t].newValue)})}}),i=function(e,n,t,r,o){var u=o.filter(function(e){return e.name===n}).length;if(u.length)return u[0];var i={name:n,values:t,set:c(e,n),get:f(e,n,t),load:r};return o.push(i),i.get(i.load),i},c=function(e,n){return function(t,r){e.set(function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},n,t),r)}},f=function(e,n,t){return function(r){e.get([n],function(e){r(e[n]||t[0])})}}}],e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(e){return n[e]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e.p="",e(e.s=0);function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n,t});