(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["raffle"],{"2ac8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center align-center",attrs:{id:"raffle"}},[a("div",{staticClass:"game d-flex justify-center align-center"},[a("div",{staticClass:"gameSetFrame"},[a("v-icon",{staticClass:"gameSet",on:{click:function(e){e.stopPropagation(),t.dialogSet=!0}}},[t._v("mdi-cog-outline")]),a("v-icon",{staticClass:"gameSet mt-2"},[t._v("mdi-history")])],1),a("v-dialog",{attrs:{"max-width":"400",persistent:"",scrollable:""},model:{value:t.dialogSet,callback:function(e){t.dialogSet=e},expression:"dialogSet"}},[a("v-card",[a("v-card-title",{staticClass:"d-flex justify-center font-weight-bold orange--text"},[t._v(" 抽獎設定 ")]),a("vue-scroll",[a("v-card-text",{staticClass:"d-flex justify-center align-center flex-column pa-0"},[a("v-radio-group",{model:{value:t.radioSet,callback:function(e){t.radioSet=e},expression:"radioSet"}},[a("v-radio",{attrs:{label:"可重複抽中同一紙條",value:"w1",color:"dhblue"}}),a("v-radio",{attrs:{label:"不重複",value:"w2",color:"dhblue"}})],1),t._l(t.inputs,(function(e,n){return a("v-text-field",{key:n,staticStyle:{width:"60%"},attrs:{label:e.num,color:"success"},scopedSlots:t._u([t.inputs.length>=3?{key:"append-outer",fn:function(){return[a("v-icon",{staticClass:"inputDel",on:{click:function(e){return t.deletInput(n)}}},[t._v(" mdi-delete-forever ")])]},proxy:!0}:null],null,!0),model:{value:e.item,callback:function(a){t.$set(e,"item",a)},expression:"input.item"}})})),a("v-icon",{staticClass:"inputAdd",on:{click:t.addInput}},[t._v(" mdi-plus-circle-outline ")])],2)],1),a("v-card-actions",{staticClass:"d-flex justify-center pb-4"},[a("v-btn",{staticStyle:{height:"30px","font-size":"0.95rem"},attrs:{color:"green darken-1",text:""},on:{click:t.submitInput}},[t._v(" 確定 ")])],1)],1)],1),a("div",{ref:"box",staticClass:"d-flex justify-center",attrs:{id:"box"}},[a("div",{attrs:{id:"border"}},t._l(t.inputs,(function(e,n){return a("div",{key:n,staticClass:"paper",style:e.position,on:{click:t.keep}},[a("span",{staticClass:"text"},[t._v(t._s(e.item))])])})),0)]),a("div",{ref:"startBig",staticClass:"startBig d-flex justify-center align-center",on:{click:function(e){return t.start(e)}}},[t._v(" GO ")]),a("span",{ref:"hand",staticClass:"maskHand",on:{click:t.open}},[t._v("🤚")]),t.openText?a("span",{staticClass:"openText"},[t._v("點手揭曉")]):t._e(),t.keepText?a("span",{staticClass:"openText"},[t._v("點紙繼續")]):t._e()],1)])},s=[],o=(a("99af"),a("4de4"),a("a434"),a("ac1f"),a("5319"),a("b85c")),i=function(t){return t.replace(/\D/g,"")},l=function(t,e){return Math.round(Math.random()*(e-t)+t)},c={name:"Raffle",data:function(){return{dialogSet:!1,dialogResult:!1,openText:!1,keepText:!1,result:"",radioSet:"w2",inputs:[{num:"紙條1",item:"😊",position:{transform:"skew(-20deg,-10deg) rotate(-270deg)",left:"15%",bottom:"2%",background:"#E12E4B"}},{num:"紙條2",item:"請點選",position:{transform:"skew(-10deg,-10deg) rotate(-60deg)",left:"42%",bottom:"2%",background:"#F9e54E"}},{num:"紙條3",item:"右上角",position:{transform:"skew(-5deg,-5deg) rotate(-280deg)",left:"65%",bottom:"2%",background:"#5BBDC8"}}]}},methods:{addInput:function(){var t=this.$data.inputs.length;this.$data.inputs.push({num:"紙條".concat(t+1),item:""})},deletInput:function(t){var e=this.$data.inputs,a="各個 input 的索引直";for(var n in console.log("純紙條數字：".concat(i(e[t].num))),console.log("刪除 [".concat(e[t].num,"]")),e)n>t&&(a=n,e[n].num="紙條".concat(a));e.splice(t,1)},submitInput:function(){this.$data.dialogSet=!1;var t,e=this.$data.inputs,a=0,n=a,s=n,i="",c=Object(o["a"])(e);try{for(c.s();!(t=c.n()).done;){var r=t.value;n=a,s=n%=3,i=0===s?"#E12E4B":1===s?"#F9e54E":"#5BBDC8",r.position={transform:"skew(-".concat(l(5,15),"deg,-").concat(l(0,15),"deg) rotate(-").concat(l(45,270),"deg)"),left:"".concat(l(3,77),"%"),bottom:"".concat(l(0,20),"%"),background:"".concat(i)},a++}}catch(d){c.e(d)}finally{c.f()}},start:function(t){var e=this,a=document.getElementsByClassName("paper");t.target.style.pointerEvents="none",t.target.style.opacity="0",setTimeout((function(){e.$refs.box.classList.add("shake-constant","shake-hard");var t,n=Object(o["a"])(a);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.style.transform="skew(-".concat(l(5,15),"deg,-").concat(l(0,15),"deg) rotate(-").concat(l(45,270),"deg)"),s.style.left="".concat(l(3,77),"%"),s.style.bottom="".concat(l(0,20))}}catch(i){n.e(i)}finally{n.f()}}),180),setTimeout((function(){var t=l(1,a.length)-1;console.log("抽到第 ".concat(t," 張")),e.$refs.box.classList.remove("shake-constant","shake-hard"),a[t].style.color="white",a[t].style.left="50%",a[t].style.transform="translateX(-50%)",a[t].firstChild.style.filter="blur(3px)",a[t].classList.add("one"),window.innerWidth>=1025?a[t].style.bottom="70%":(window.innerWidth<1025&&window.innerWidth)>600?a[t].style.bottom="90%":a[t].style.bottom="125%",e.$data.openText=!0,e.$refs.hand.classList.add("changeY")}),2e3)},open:function(){var t=document.getElementsByClassName("one");this.$data.openText=!1,this.$data.keepText=!0,this.$refs.hand.classList.remove("changeY"),t[0].style.transform="translateX(-50%) scale(2)",t[0].style.color="black",t[0].style.pointerEvents="auto",t[0].firstChild.style.filter="blur(0px)",console.log(t)},keep:function(){var t=document.getElementsByClassName("one");this.$data.keepText=!1,t[0].style.pointerEvents="none",t[0].style.transition="0.3s",t[0].style.opacity="0",setTimeout((function(){t[0].remove()}),300),this.$refs.startBig.style.opacity="1",this.$refs.startBig.style.pointerEvents="auto"}}},r=c,d=a("2877"),u=a("6544"),f=a.n(u),p=a("8336"),m=a("b0af"),g=a("99d9"),v=a("169a"),h=a("132d"),y=a("67b6"),b=a("43a6"),x=a("8654"),k=Object(d["a"])(r,n,s,!1,null,null,null);e["default"]=k.exports;f()(k,{VBtn:p["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:v["a"],VIcon:h["a"],VRadio:y["a"],VRadioGroup:b["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=raffle.3a42c3cf.js.map