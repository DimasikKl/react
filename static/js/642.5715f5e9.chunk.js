(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[642],{6642:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return y}});var i=n(9867),a=n(2276),t={dialogs:"Dialogs_dialogs__dr1Uu",dialogsItems:"Dialogs_dialogsItems__2bAzF",active:"Dialogs_active__azuKc",messages:"Dialogs_messages__u-Lgb",message:"Dialogs_message__5+HbG"},r=n(7663),o=n(2834),d=function(e){var s="dialogs/"+e.id;return(0,o.jsx)("div",{className:t.dialog+" "+t.active,children:(0,o.jsx)(r.OL,{to:s,children:e.name})})},u=function(e){return(0,o.jsx)("div",{className:t.message,children:e.message})},l=n(4669),c=n(6111),g=n(8488),m=n(9305),f=n(9243),h=(0,m.Z)({form:"dialogAddMessageForm"})((function(e){var s=(0,c.DT)(50);return(0,o.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(g.Z,{component:f.gx,validate:[n(47),s],name:"newMessageBody",placeholder:"Enter your message"})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"Send"})})]})})),v=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,o.jsx)(d,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return(0,o.jsx)(u,{message:e.message},e.id)}));s.newMessageBody;return e.isAuth?(0,o.jsxs)("div",{className:t.dialogs,children:[(0,o.jsx)("div",{className:t.dialogsItems,children:n}),(0,o.jsx)("div",{className:t.messages,children:(0,o.jsx)("div",{children:i})}),(0,o.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):(0,o.jsx)(l.l_,{to:"/login"})},_=n(7651),j=n(1413),x=n(5671),p=n(3144),b=n(136),D=n(5716),w=function(e){return{isAuth:e.auth.isAuth}},y=(0,n(2040).qC)((0,_.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,a.X)(s))}}})),(function(e){var s=function(s){(0,b.Z)(i,s);var n=(0,D.Z)(i);function i(){return(0,x.Z)(this,i),n.apply(this,arguments)}return(0,p.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,o.jsx)(e,(0,j.Z)({},this.props)):(0,o.jsx)(l.l_,{to:"/login"})}}]),i}(i.Component);return(0,_.$j)(w)(s)}))(v)},47:function(e){function s(e){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}s.keys=function(){return[]},s.resolve=s,s.id=47,e.exports=s}}]);
//# sourceMappingURL=642.5715f5e9.chunk.js.map