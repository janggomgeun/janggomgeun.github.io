(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2Zix":function(t,n,e){var r=e("NC/Y");t.exports=/MSIE|Trident/.test(r)},BNF5:function(t,n,e){var r=e("NC/Y").match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},DQNa:function(t,n,e){var r=e("busE"),s=Date.prototype,i=s.toString,a=s.getTime;"Invalid Date"!=String(new Date(NaN))&&r(s,"toString",(function(){var t=a.call(this);return t==t?i.call(this):"Invalid Date"}))},TeQF:function(t,n,e){"use strict";var r=e("I+eb"),s=e("tycR").filter;r({target:"Array",proto:!0,forced:!e("Hd5f")("filter")},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ToJy:function(t,n,e){"use strict";var r=e("I+eb"),s=e("HAuM"),i=e("ewvW"),a=e("UMSQ"),o=e("V37c"),c=e("0Dky"),u=e("rdv8"),d=e("pkCn"),l=e("BNF5"),v=e("2Zix"),_=e("LQDL"),f=e("USzg"),p=[],h=p.sort,m=c((function(){p.sort(void 0)})),g=c((function(){p.sort(null)})),y=d("sort"),k=!c((function(){if(_)return _<70;if(!(l&&l>3)){if(v)return!0;if(f)return f<603;var t,n,e,r,s="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)p.push({k:n+r,v:e})}for(p.sort((function(t,n){return n.v-t.v})),r=0;r<p.length;r++)n=p[r].k.charAt(0),s.charAt(s.length-1)!==n&&(s+=n);return"DGBEFHACIJK"!==s}}));r({target:"Array",proto:!0,forced:m||!g||!y||!k},{sort:function(t){void 0!==t&&s(t);var n=i(this);if(k)return void 0===t?h.call(n):h.call(n,t);var e,r,c=[],d=a(n.length);for(r=0;r<d;r++)r in n&&c.push(n[r]);for(e=(c=u(c,function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:o(n)>o(e)?1:-1}}(t))).length,r=0;r<e;)n[r]=c[r++];for(;r<d;)delete n[r++];return n}})},USzg:function(t,n,e){var r=e("NC/Y").match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},fx0o:function(t,n,e){"use strict";e.r(n);e("ToJy"),e("TeQF"),e("2B1R"),e("DQNa");var r={props:{data:{type:Object}}},s=e("KHd+"),i={components:{ProjectHeader:Object(s.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"rounded-lg border-solid border-gray-800 border-4 mb-4 p-4"},[e("strong",{staticClass:"text-2xl"},[t._v(t._s(t.data.title))]),e("span",[t._v(", ")]),e("span",[t._v(t._s(t.data.period.startedAt))]),e("span",[t._v(" ~ ")]),e("span",[t._v(t._s(t.data.period.finishedAt?t.data.period.finishedAt:"진행중"))]),t._m(0),e("div",[e("div",[t._v(t._s(t.data.goal.summary))]),e("div",[t._v(t._s(t.data.goal.description))])]),e("div",t._l(t.data.team.parts,(function(n){return e("div",{key:n.id},[e("div",[t._v(t._s(n.name))]),e("div",[t._v(t._s(n.role))]),e("div",[t._v(t._s(n.summary))])])})),0),e("div",[e("div",[t._v(t._s(t.data.mine.summary))]),t._l(t.data.mine.parts,(function(n){return e("ul",{key:n.id},[e("div",[t._v(t._s(n.description))]),t._l(n.difficulties,(function(r){return e("li",{key:r.id},[e("div",[t._v(t._s(n.difficulty))])])}))],2)}))],2),e("div",{staticClass:"text-right"},[e("span",[t._v("- ")]),e("span",[t._v("a ")]),e("span",[t._v(t._s(t.data.owner.type))]),e("span",[t._v(" project ")]),e("span",[t._v("by ")]),e("span",[t._v(t._s(t.data.owner.name))]),e("span",[t._v(", ")]),e("span",[t._v(t._s(t.data.team.name))])]),e("div",{staticClass:"mt-2"},[t._m(1),e("div",{staticClass:"flex flex-start space-x-2"},t._l(t.data.techStack.services,(function(n){return e("div",{key:n.id},[e("div",[e("strong",[t._v("\n            "+t._s(n.name)+"\n          ")])]),n.libraries.length?e("span",[t._l(n.libraries,(function(n){return e("span",{key:n.id},[t._v("\n            "+t._s(n.name)+"\n          ")])})),e("span",[t._v(", ")])],2):t._e(),n.sdks.length?e("span",[t._l(n.sdks,(function(n){return e("span",{key:n.id},[t._v("\n            "+t._s(n.name)+"\n          ")])})),e("span",[t._v(", ")])],2):t._e(),n.runtimes.length?e("span",[t._l(n.runtimes,(function(n){return e("span",{key:n.id},[t._v("\n            "+t._s(n.name)+"\n          ")])})),e("span",[t._v(", ")])],2):t._e(),n.languages.length?e("span",[t._l(n.languages,(function(n){return e("span",{key:n.id},[t._v("\n            "+t._s(n.name)+"\n          ")])})),e("span",[t._v(", ")])],2):t._e()])})),0),e("div",{staticClass:"mt-1"},[t._m(2),e("span",[t._v(": ")]),t._l(t.data.techStack.infrastructures,(function(n){return e("span",{key:n.id},[t._v("\n        "+t._s(n.name)+"\n      ")])}))],2),e("div",{staticClass:"mt-1"},[t._m(3),e("span",[t._v(": ")]),t._l(t.data.techStack.tools,(function(n){return e("span",{key:n.id},[t._v("\n        "+t._s(n.name)+"\n      ")])}))],2)]),t.data.references.length?e("div",[t._m(4),t._l(t.data.references,(function(n){return e("ul",{key:n.id},[e("li",[e("span",[t._v("- ")]),e("g-link",{staticClass:"underline",attrs:{href:n.link}},[t._v("\n          "+t._s(n.description)+"\n        ")])],1)])}))],2):t._e()])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"divide-y divide-gray-800"},[n("div"),n("div")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"text-xl"},[n("strong",[this._v("테크스택")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("strong",[this._v("인프라")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("span",[n("strong",[this._v("도구")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("strong",[this._v("참고")])])}],!1,null,null,null).exports},computed:{projects:function(){var t=this.$page.projects.edges.map((function(t){return t.node})).filter((function(t){return t.publishements&&t.publishements.length})).sort((function(t,n){return new Date(n.period.startedAt).getTime()-new Date(t.period.startedAt).getTime()}));return t}}},a=null,o=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",this._l(this.projects,(function(t){return n("div",{key:t.id},[n("ProjectHeader",{attrs:{data:t}})],1)})),0)}),[],!1,null,null,null);"function"==typeof a&&a(o);n.default=o.exports},rdv8:function(t,n){var e=Math.floor,r=function(t,n){var a=t.length,o=e(a/2);return a<8?s(t,n):i(r(t.slice(0,o),n),r(t.slice(o),n),n)},s=function(t,n){for(var e,r,s=t.length,i=1;i<s;){for(r=i,e=t[i];r&&n(t[r-1],e)>0;)t[r]=t[--r];r!==i++&&(t[r]=e)}return t},i=function(t,n,e){for(var r=t.length,s=n.length,i=0,a=0,o=[];i<r||a<s;)i<r&&a<s?o.push(e(t[i],n[a])<=0?t[i++]:n[a++]):o.push(i<r?t[i++]:n[a++]);return o};t.exports=r}}]);