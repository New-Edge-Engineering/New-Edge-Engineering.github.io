webpackJsonp([1],{BhJg:function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,".row.contact{display:block}.contact .fa-cog{margin-top:40%;margin-bottom:30%}.contact textarea{color:#036;padding:10px;width:100%}",""])},NJUR:function(e,a,t){var i=t("BhJg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("rjj0").default)("04b3efac",i,!1,{sourceMap:!1})},"Px+x":function(e,a,t){"use strict";var i=t("mvHQ"),n=t.n(i),s=t("mtWM"),r=t.n(s),o=t("OAwv"),l=t.n(o);a.a={data:function(){return{capturing:!0,error:!1,sending:!1,thankyou:!1,enquiry:{name:"",email:"",message:""},disabled:!0}},methods:{validate:function(){this.enquiry.name.length>0&&this.enquiry.email.length>0&&this.enquiry.message.length>0?this.disabled=!1:this.disabled=!0},failed:function(e){console.debug("failure "+n()(e)),this.sending=!1,this.error=!0,this.capturing=!0},send:function(){this.capturing=!1,this.sending=!0,this.enquiry.formDataNameOrder=["name","email","message"],this.enquiry.formGoogleSheetName="responses";var e=this;return r.a.post("https://script.google.com/macros/s/AKfycbwlgWtpZWVdq0HgfKPEYlfAK2TeVApv9LIwgOUaLGpycB6GBnw/exec",l.a.stringify(this.enquiry),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){"error"==a.data.result?e.failed(a):(e.enquiry.name="",e.enquiry.email="",e.enquiry.message="",e.sending=!1,e.thankyou=!0,setTimeout(function(){e.error=!1,e.thankyou=!1,e.capturing=!0},15e3))}).catch(function(a){e.failed(a)}),!1}}}},Vzjs:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-container",[t("b-row",[e.sending?e._e():t("h1",{staticClass:"page-header"},[e._v("How To Enquire")])]),t("b-row",{staticClass:"contact"},[e.capturing?t("div",{staticClass:"invert"},[t("p",[e._v("If you have an enquiry, please don't hesitate to email us at "),t("a",{attrs:{href:"mailto:enquiries+link@newedgeengineering.com"}},[e._v("enquiries@newedgeengineering.com")]),e._v(" or fill in the form.")]),t("b-alert",{attrs:{variant:"danger",dismissable:"",show:e.error}},[t("span",[t("strong",[e._v("A problem occurred,")]),e._v(" please try again later.")])]),t("form",[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Name"),t("span",{staticClass:"aui-icon icon-required"})]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.enquiry.name,expression:"enquiry.name"}],staticClass:"form-control",attrs:{id:"name",name:"name",placeholder:"Name",required:""},domProps:{value:e.enquiry.name},on:{keyup:e.validate,input:function(a){a.target.composing||e.$set(e.enquiry,"name",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email Address"),t("span",{staticClass:"aui-icon icon-required"})]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.enquiry.email,expression:"enquiry.email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"j.doe@example.com",required:""},domProps:{value:e.enquiry.email},on:{keyup:e.validate,input:function(a){a.target.composing||e.$set(e.enquiry,"email",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Message"),t("span",{staticClass:"aui-icon icon-required"})]),t("br"),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.enquiry.message,expression:"enquiry.message"}],attrs:{id:"message",name:"message",rows:"10",placeholder:"How can we help?",required:""},domProps:{value:e.enquiry.message},on:{keyup:e.validate,input:function(a){a.target.composing||e.$set(e.enquiry,"message",a.target.value)}}})]),t("div",{staticClass:"text-right"},[t("button",{staticClass:"btn btn-danger btn-lg",attrs:{type:"submit",disabled:e.disabled},on:{click:function(a){a.preventDefault(),e.send()}}},[t("i",{staticClass:"fa fa-paper-plane"}),e._v(" Send")])])])],1):e._e(),e.sending?t("div",{staticClass:"text-center"},[t("i",{staticClass:"fa fa-cog fa-spin fa-5x",attrs:{"aria-hidden":"true"}})]):e._e(),t("b-alert",{attrs:{variant:"success",dismissable:"",show:e.thankyou}},[t("p",[t("em",[t("strong",[e._v("Thank you")]),e._v(" for contacting us.")]),e._v(" Our team will be in touch soon.")])])],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},fBFx:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Px+x"),n=t("Vzjs"),s=!1;var r=function(e){s||t("NJUR")},o=t("VU/8")(i.a,n.a,!1,r,null,null);o.options.__file="pages/contact.vue",a.default=o.exports}});