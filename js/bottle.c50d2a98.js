(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bottle"],{"586d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center align-center",attrs:{id:"bottle"}},[a("div",{staticClass:"game d-flex justify-center align-center"},[a("img",{attrs:{id:"wine",src:n("b936"),alt:"酒瓶"},on:{click:t.rotate}})])])},o=[],i=function(t,e){return Math.round(Math.random()*(e-t)+t)},s={name:"Bottle",data:function(){return{deg:3240,n:1}},methods:{rotate:function(){var t=this.$data.deg*this.$data.n+i(0,360);document.getElementById("wine").style.transform="rotate(".concat(t,"deg)"),console.log(t),console.log("轉 ".concat(t-=this.$data.deg*this.$data.n," 度")),this.$data.n++}}},c=s,r=n("2877"),d=Object(r["a"])(c,a,o,!1,null,null,null);e["default"]=d.exports},b936:function(t,e,n){t.exports=n.p+"img/wine.429b1e5d.svg"}}]);
//# sourceMappingURL=bottle.c50d2a98.js.map