$(".color-item-door").equalHeights();$("#wrapper #menu ul li").equalHeights();var isNode="object"==typeof module&&module.exports;!function(e){"use strict";var o=isNode?require("url"):null;e.URLparse=function(e){return isNode?o.parse(e):(o=document.createElement("a"),o.href=e,o)}}(isNode?module.exports:this.lib={});var url=lib.URLparse(window.location.href);"admin"==url.pathname.split("/")[1]&&$("div.stels").toggleClass("stels-none");
