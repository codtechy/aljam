(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7245],{42214:function(e,a,t){Promise.resolve().then(t.bind(t,66527))},40908:function(e){var a;a=function(){return function(e){function a(s){if(t[s])return t[s].exports;var i=t[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}var t={};return a.m=e,a.c=t,a.p="dist/",a(0)}([function(e,a,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},n=(s(t(1)),t(6)),r=s(n),l=s(t(7)),c=s(t(8)),o=s(t(9)),d=s(t(10)),f=s(t(11)),u=s(t(14)),m=[],h=!1,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(h=!0),h)return m=(0,f.default)(m,j),(0,d.default)(m,j.once),m},b=function(){m=(0,u.default)(),x()},v=function(){m.forEach(function(e,a){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){j=i(j,e),m=(0,u.default)();var a,t=document.all&&!window.atob;return!0===(a=j.disable)||"mobile"===a&&o.default.mobile()||"phone"===a&&o.default.phone()||"tablet"===a&&o.default.tablet()||"function"==typeof a&&!0===a()||t?v():(j.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),j.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?x(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){x(!0)}):document.addEventListener(j.startEvent,function(){x(!0)}),window.addEventListener("resize",(0,l.default)(x,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(x,j.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,d.default)(m,j.once)},j.throttleDelay)),j.disableMutationObserver||c.default.ready("[data-aos]",b),m)},refresh:x,refreshHard:b}},function(e,a){},,,,,function(e,a){(function(a){"use strict";function t(e){var a=void 0===e?"undefined":i(e);return!!e&&("object"==a||"function"==a)}function s(e){if("number"==typeof e)return e;if("symbol"==(void 0===(a=e)?"undefined":i(a))||a&&"object"==(void 0===a?"undefined":i(a))&&x.call(a)==l)return r;if(t(e)){var a,s="function"==typeof e.valueOf?e.valueOf():e;e=t(s)?s+"":s}if("string"!=typeof e)return 0===e?e:+e;var n=d.test(e=e.replace(c,""));return n||f.test(e)?u(e.slice(2),n?2:8):o.test(e)?r:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n="Expected a function",r=NaN,l="[object Symbol]",c=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,m="object"==(void 0===a?"undefined":i(a))&&a&&a.Object===Object&&a,h="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,j=m||h||Function("return this")(),x=Object.prototype.toString,b=Math.max,v=Math.min,p=function(){return j.Date.now()};e.exports=function(e,a,i){var r=!0,l=!0;if("function"!=typeof e)throw TypeError(n);return t(i)&&(r="leading"in i?!!i.leading:r,l="trailing"in i?!!i.trailing:l),function(e,a,i){function r(a){var t=f,s=u;return f=u=void 0,g=a,h=e.apply(s,t)}function l(e){var t=e-x,s=e-g;return void 0===x||t>=a||t<0||y&&s>=m}function c(){var e,t,s,i=p();return l(i)?o(i):void(j=setTimeout(c,(e=i-x,t=i-g,s=a-e,y?v(s,m-t):s)))}function o(e){return j=void 0,w&&f?r(e):(f=u=void 0,h)}function d(){var e,t=p(),s=l(t);if(f=arguments,u=this,x=t,s){if(void 0===j)return g=e=x,j=setTimeout(c,a),N?r(e):h;if(y)return j=setTimeout(c,a),r(x)}return void 0===j&&(j=setTimeout(c,a)),h}var f,u,m,h,j,x,g=0,N=!1,y=!1,w=!0;if("function"!=typeof e)throw TypeError(n);return a=s(a)||0,t(i)&&(N=!!i.leading,m=(y="maxWait"in i)?b(s(i.maxWait)||0,a):m,w="trailing"in i?!!i.trailing:w),d.cancel=function(){void 0!==j&&clearTimeout(j),g=0,f=x=u=j=void 0},d.flush=function(){return void 0===j?h:o(p())},d}(e,a,{leading:r,maxWait:a,trailing:l})}}).call(a,function(){return this}())},function(e,a){(function(a){"use strict";function t(e){var a=void 0===e?"undefined":i(e);return!!e&&("object"==a||"function"==a)}function s(e){if("number"==typeof e)return e;if("symbol"==(void 0===(a=e)?"undefined":i(a))||a&&"object"==(void 0===a?"undefined":i(a))&&j.call(a)==r)return n;if(t(e)){var a,s="function"==typeof e.valueOf?e.valueOf():e;e=t(s)?s+"":s}if("string"!=typeof e)return 0===e?e:+e;var u=o.test(e=e.replace(l,""));return u||d.test(e)?f(e.slice(2),u?2:8):c.test(e)?n:+e}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=NaN,r="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,u="object"==(void 0===a?"undefined":i(a))&&a&&a.Object===Object&&a,m="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,h=u||m||Function("return this")(),j=Object.prototype.toString,x=Math.max,b=Math.min,v=function(){return h.Date.now()};e.exports=function(e,a,i){function n(a){var t=d,s=f;return d=f=void 0,p=a,m=e.apply(s,t)}function r(e){var t=e-j,s=e-p;return void 0===j||t>=a||t<0||N&&s>=u}function l(){var e,t,s,i=v();return r(i)?c(i):void(h=setTimeout(l,(e=i-j,t=i-p,s=a-e,N?b(s,u-t):s)))}function c(e){return h=void 0,y&&d?n(e):(d=f=void 0,m)}function o(){var e,t=v(),s=r(t);if(d=arguments,f=this,j=t,s){if(void 0===h)return p=e=j,h=setTimeout(l,a),g?n(e):m;if(N)return h=setTimeout(l,a),n(j)}return void 0===h&&(h=setTimeout(l,a)),m}var d,f,u,m,h,j,p=0,g=!1,N=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");return a=s(a)||0,t(i)&&(g=!!i.leading,u=(N="maxWait"in i)?x(s(i.maxWait)||0,a):u,y="trailing"in i?!!i.trailing:y),o.cancel=function(){void 0!==h&&clearTimeout(h),p=0,d=j=f=h=void 0},o.flush=function(){return void 0===h?m:c(v())},o}}).call(a,function(){return this}())},function(e,a){"use strict";function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(e){e&&e.forEach(function(e){var a=Array.prototype.slice.call(e.addedNodes),t=Array.prototype.slice.call(e.removedNodes);if(function e(a){var t=void 0,s=void 0;for(t=0;t<a.length;t+=1)if((s=a[t]).dataset&&s.dataset.aos||s.children&&e(s.children))return!0;return!1}(a.concat(t)))return i()})}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){};a.default={isSupported:function(){return!!t()},ready:function(e,a){var n=window.document,r=new(t())(s);i=a,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,a){"use strict";function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){function e(e,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(a,t,s){return t&&e(a.prototype,t),s&&e(a,s),a}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,n=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,e)}return s(e,[{key:"phone",value:function(){var e=t();return!(!i.test(e)&&!n.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=t();return!(!r.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();a.default=new c},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(e,a,t){var s=e.node.getAttribute("data-aos-once");a>e.position?e.node.classList.add("aos-animate"):void 0===s||"false"!==s&&(t||"true"===s)||e.node.classList.remove("aos-animate")};a.default=function(e,a){var s=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,n){t(e,i+s,a)})}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,i=(s=t(12))&&s.__esModule?s:{default:s};a.default=function(e,a){return e.forEach(function(e,t){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,a.offset)}),e}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,i=(s=t(13))&&s.__esModule?s:{default:s};a.default=function(e,a){var t=0,s=0,n=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(s=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),t=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":t+=e.offsetHeight/2;break;case"bottom-bottom":t+=e.offsetHeight;break;case"top-center":t+=n/2;break;case"bottom-center":t+=n/2+e.offsetHeight;break;case"center-center":t+=n/2+e.offsetHeight/2;break;case"top-top":t+=n;break;case"bottom-top":t+=e.offsetHeight+n;break;case"center-top":t+=e.offsetHeight/2+n}return r.anchorPlacement||r.offset||isNaN(a)||(s=a),t+s}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var a=0,t=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)a+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),t+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:t,left:a}}},function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},e.exports=a()},66527:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return j}});var s=t(57437),i=t(2265),n=t(58408),r=t(82117),l=t(93272),c=t(40908),o=t.n(c),d=t(27648),f=function(){return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"rts-team-area rts-section-gap",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12 text-center",children:(0,s.jsxs)("div",{className:"title-style-center",children:[(0,s.jsx)("h2",{className:"title",children:"Meet Our Talented Team"}),(0,s.jsxs)("p",{className:"disc",children:["we are proud to have a dedicated and skilled team of professionals"," ",(0,s.jsx)("br",{}),"who are passionate about interior renovation and design."]})]})})}),(0,s.jsxs)("div",{className:"row mt--30 g-24",children:[(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/01.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/02.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/03.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/04.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/06.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/07.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/08.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12",children:(0,s.jsxs)("div",{className:"team-area-start-one",children:[(0,s.jsx)(d.default,{href:"/team-single",className:"thumbnail",children:(0,s.jsx)("img",{src:"assets/images/team/09.jpg",alt:"team_area"})}),(0,s.jsxs)("div",{className:"team-content",children:[(0,s.jsxs)("div",{className:"name-area",children:[(0,s.jsx)("h6",{className:"name",children:"David Leo"}),(0,s.jsx)("span",{className:"desig",children:"Architecture"})]}),(0,s.jsx)("div",{className:"social-team-one",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d.default,{href:"#",children:(0,s.jsx)("i",{className:"fab fa-linkedin-in"})})})]})})]})]})})]})]})})})},u=t(89741),m=t(8746),h=t(53512);function j(){return(0,i.useEffect)(()=>{o().init({duration:1500,once:!0,offset:0})},[]),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(n.default,{}),(0,s.jsx)(l.Z,{title:"Our Team",activeLink:"Our Team"}),(0,s.jsx)(f,{}),(0,s.jsx)(h.Z,{}),(0,s.jsx)(u.Z,{}),(0,s.jsx)(m.Z,{}),(0,s.jsx)(r.default,{})]})}},93272:function(e,a,t){"use strict";var s=t(57437);t(2265),a.Z=e=>{let{title:a,activeLink:t}=e;return(0,s.jsx)("div",{className:"breadcrumb-area-bg bg_image",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"bread-crumb-area-inner",children:[(0,s.jsxs)("div",{className:"breadcrumb-top",children:[(0,s.jsx)("a",{href:"#",children:"Home"})," /",(0,s.jsx)("a",{className:"active",href:"#",children:t})]}),(0,s.jsx)("div",{className:"bottom-title",children:(0,s.jsx)("h1",{className:"title",children:a})})]})})})})})}},53512:function(e,a,t){"use strict";var s=t(57437);t(2265),a.Z=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"rts-brand-area ptb--100 bg-light",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"brand-area-wrapper-one",children:[(0,s.jsx)("a",{href:"#",className:"single-brand",children:(0,s.jsx)("img",{src:"assets/images/brand/01.png",alt:"brand"})}),(0,s.jsx)("a",{href:"#",className:"single-brand",children:(0,s.jsx)("img",{src:"assets/images/brand/02.png",alt:"brand"})}),(0,s.jsx)("a",{href:"#",className:"single-brand",children:(0,s.jsx)("img",{src:"assets/images/brand/03.png",alt:"brand"})}),(0,s.jsx)("a",{href:"#",className:"single-brand",children:(0,s.jsx)("img",{src:"assets/images/brand/04.png",alt:"brand"})})]})})})})})})})}},89741:function(e,a,t){"use strict";var s=t(57437),i=t(27648);a.Z=function(){return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"rts-cta-main-wrapper rts-section-gap",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"title-style-center cta-wrapper-two",children:[(0,s.jsxs)("div",{className:"pre-title-area",children:[(0,s.jsx)("img",{src:"assets/images/about/02.png",alt:"about"}),(0,s.jsx)("span",{className:"pre-title",children:"Work With Us"})]}),(0,s.jsxs)("h2",{className:"title quote",children:[(0,s.jsx)("span",{children:"We are"})," excited to learn ",(0,s.jsx)("br",{}),"more about ",(0,s.jsx)("span",{children:"your project"})]}),(0,s.jsxs)(i.default,{href:"/contact",className:"rts-btn btn-border",children:["Read More ",(0,s.jsx)("i",{className:"fa-regular fa-arrow-right"})]})]})})})})})})}}},function(e){e.O(0,[7648,2650,5472,6690,2971,2117,1744],function(){return e(e.s=42214)}),_N_E=e.O()}]);