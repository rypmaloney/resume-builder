(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(4),s=n.n(a),r=(n(14),n(5)),d=n(6),l=n(7),j=n(9),u=n(8),h=(n(15),n(0)),o=function(e){var t=e.thisEd,n=e.index,i=e.updateEd,c=e.changeEd;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){return i(e,n)},children:[Object(h.jsx)("label",{htmlFor:"nameInput",children:"Institution:"}),Object(h.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",id:"institution",value:t.institution}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"address",children:"Date:"}),Object(h.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",id:"year",value:t.year}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{placeholder:"Description",rows:"5",onChange:function(e){return c(e,n)},type:"text",id:"details",value:t.details}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})})},x=function(e){var t=e.thisXP,n=e.index,i=e.updateXP,c=e.changeXP;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){return i(e,n)},children:[Object(h.jsx)("label",{htmlFor:"nameInput",children:"Institution:"}),Object(h.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",id:"institution",value:t.institution}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"address",children:"Date:"}),Object(h.jsx)("input",{onChange:function(e){return c(e,n)},type:"text",id:"year",value:t.year}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{placeholder:"Description",rows:"5",onChange:function(e){return c(e,n)},type:"text",id:"details",value:t.details}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})})},b=function(e){var t=e.click,n=e.updateEd,i=e.change,c=e.education,a=e.changeEd,s=e.addEd,r=e.experience,d=e.changeXP,l=e.updateXP,j=e.addXP;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Contact information"}),Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{onChange:i,type:"text",id:"name"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"address",children:"City:"}),Object(h.jsx)("input",{onChange:i,type:"text",id:"address"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{onChange:i,type:"text",id:"email"})]}),Object(h.jsx)("h2",{children:"Education"}),c.map((function(e,t){return Object(h.jsx)(o,{changeEd:a,thisEd:c[t],index:t,updateEd:n},e.id)})),Object(h.jsx)("button",{onClick:s,children:"Add Another Institution"}),Object(h.jsx)("h2",{children:"Experience"}),r.map((function(e,t){return Object(h.jsx)(x,{changeXP:d,thisXP:r[t],index:t,updateXP:l},e.id)})),Object(h.jsx)("button",{onClick:j,children:"Add Another Institution"})]})},p=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"institution",children:[Object(h.jsxs)("div",{className:"edex-title",children:[Object(h.jsx)("h3",{children:e.school.institution}),Object(h.jsx)("p",{children:e.school.year})]}),Object(h.jsx)("p",{children:e.school.details})]})})},O=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"institution",children:[Object(h.jsxs)("div",{className:"edex-title",children:[Object(h.jsx)("h3",{children:e.experience.institution}),Object(h.jsx)("p",{children:e.experience.year})]}),Object(h.jsx)("p",{children:e.experience.details})]})})},v=(n(17),function(e){var t=e.state;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"contact-display",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:t.address}),Object(h.jsx)("p",{children:t.email})]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"edex-display",children:[Object(h.jsx)("h2",{children:"Education"}),t.education.map((function(e){return Object(h.jsx)(p,{school:e},e.id)}))]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"edex-display",children:[Object(h.jsx)("h2",{children:"Experience"}),t.experience.map((function(e){return Object(h.jsx)(O,{experience:e},e.id)}))]})]})}),m=n(2),g=n.n(m),f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this)).onSubmitContact=function(e){e.preventDefault(),i.setState({name:e.target.name.value,address:e.target.address.value,email:e.target.email.value})},i.updateEd=function(e,t){e.preventDefault();var n=i.state.education.slice();n[t]={institution:e.target.institution.value,year:e.target.year.value,details:e.target.desc.value,id:g()()},i.setState({education:n})},i.updateXP=function(e,t){e.preventDefault();var n=i.state.experience.slice();n[t]={institution:e.target.institution.value,year:e.target.year.value,details:e.target.desc.value,id:g()()},i.setState({experience:n})},i.handleEdChange=function(e,t){var n=e.target.id,c=i.state.education.slice();c[t][n]=e.target.value,i.setState({education:c})},i.handleXPChange=function(e,t){var n=e.target.id,c=i.state.experience.slice();c[t][n]=e.target.value,i.setState({experience:c})},i.handleChange=function(e){var t=e.target.id;i.setState(Object(r.a)({},t,e.target.value))},i.addEd=function(){var e=i.state.education.slice();e.push({institution:"",year:"",details:"",id:g()()}),i.setState({education:e})},i.addXP=function(){var e=i.state.experience.slice();e.push({institution:"",year:"",details:"",id:g()()}),i.setState({experience:e})},i.state={name:"",address:"",email:"",education:[],experience:[]},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("h1",{children:"Resume Builder"}),Object(h.jsx)(b,{change:this.handleChange,click:this.onSubmit,education:this.state.education,changeEd:this.handleEdChange,updateEd:this.updateEd,addEd:this.addEd,experience:this.state.experience,changeXP:this.handleXPChange,updateXP:this.updateXP,addXP:this.addXP})]}),Object(h.jsx)("div",{className:"display",children:Object(h.jsx)(v,{state:this.state})})]})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.c6f9737f.chunk.js.map