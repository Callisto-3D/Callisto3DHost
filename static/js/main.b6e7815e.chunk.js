(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(14),i=s.n(a),n=(s(24),s(6)),r=s(8),l=s(9),j=s(7),d=s(15),o=s(17),h=s.n(o),b=s(18),O=s(4),m=s.n(O),x=s(1),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;var e=this.props.data.name,t=this.props.data.description,s=this.props.data.description1;return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsx)(b.a,{type:"lines",bg:!0}),Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"ANA SAYFA"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:"HAKKIMIZDA"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:"H\u0130ZMETLER\u0130M\u0130Z"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"\xd6RNEK \xc7EK\u0130MLER"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#contact",children:"\u0130LET\u0130\u015e\u0130M"})})]})]}),Object(x.jsx)("main",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)(m.a,{bottom:!0,children:Object(x.jsx)("h1",{className:"responsive-headline",children:e})}),Object(x.jsx)(m.a,{bottom:!0,duration:1200,children:Object(x.jsxs)("h2",{children:[s,"."]})}),Object(x.jsx)("hr",{}),Object(x.jsx)(m.a,{bottom:!0,duration:1200,children:Object(x.jsxs)("h3",{children:[t,"."]})}),Object(x.jsx)("hr",{}),Object(x.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(x.jsxs)("ul",{className:"social",children:[Object(x.jsxs)("a",{href:"#portfolio",className:"smoothscroll button btn project-btn",children:[Object(x.jsx)("i",{className:"fa fa-book"}),"Projelerimiz"]}),Object(x.jsxs)("a",{href:"#contact",className:"smoothscroll button btn github-btn",children:[Object(x.jsx)("i",{className:"fa fa-phone"}),"Teklif Al\u0131n"]})]})})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),u=p,v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("i",{className:e.className})})},e.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(m.a,{bottom:!0,children:Object(x.jsxs)("div",{className:"twelve columns",children:[Object(x.jsx)("ul",{className:"social-links",children:e}),Object(x.jsx)("ul",{className:"copyright",children:Object(x.jsx)("li",{children:"\xa9 Copyright 2022 Callisto 3D"})})]})}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),f=v,N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.hakkimizda1,s=this.props.data.hakkimizda2,c=this.props.data.address.street,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email;return Object(x.jsx)("section",{id:"about",children:Object(x.jsx)(m.a,{duration:1e3,children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("img",{className:"profile-pic",src:e,alt:"Callisto 3D"})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:"Hakk\u0131m\u0131zda"}),Object(x.jsx)("p",{children:t}),Object(x.jsx)("p",{children:s}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"columns contact-details",children:[Object(x.jsx)("h2",{children:"\u0130leti\u015fim"}),Object(x.jsxs)("p",{className:"address",children:[Object(x.jsxs)("span",{children:[c,Object(x.jsx)("br",{}),a," ",i,", ",n]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:r}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:l})]})]})})]})]})})})}}]),s}(c.Component),g=N,k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=this.props.data.matterport.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsx)("p",{children:e.description}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.dijitalkopya})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.erisilebilirlik})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.akillietiket})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.olcualma})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.vrdestek})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.webtrafik})})})]})]},e.school)})),c=this.props.data.digitalshowroom.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.gallery}),Object(x.jsx)("p",{children:e.description}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.urunlistesi})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.sanalmagaza})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.sanaldeneyim})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:e.eticaretsitesi})})}),Object(x.jsx)("li",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{})})})]})]},e.gallery)})),a=this.props.data.gisservices.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.cbs}),Object(x.jsx)("p",{children:e.description})]},e.cbs)})),i=this.props.data.skills.map((function(t){var s=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),a=t.level;return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{width:a,backgroundColor:s},className:c}),Object(x.jsx)("em",{children:t.name})]},t.name)}));return Object(x.jsxs)("section",{id:"resume",children:[Object(x.jsx)(m.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Matterport"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(x.jsx)(m.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Digital Showroom"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(x.jsx)(m.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"CBS \xc7\xf6z\xfcmleri"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(x.jsx)(m.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row skill",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Yeteneklerimiz"})})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("div",{className:"bars",children:Object(x.jsx)("ul",{className:"skills",children:i})})]})]})})]})}}]),s}(c.Component),w=k,y=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(x.jsxs)("section",{id:"contact",children:[Object(x.jsx)(O.Fade,{bottom:!0,duration:1e3,children:Object(x.jsx)("div",{className:"row section-head",children:Object(x.jsx)("div",{className:"ten columns",children:Object(x.jsx)("h2",{className:"lead",children:n})})})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(O.Slide,{left:!0,duration:1e3,children:Object(x.jsxs)("div",{className:"eight columns",children:[Object(x.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(x.jsxs)("fieldset",{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"contactName",children:["\u0130sim ",Object(x.jsx)("span",{className:"required",children:"*"})]}),Object(x.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(x.jsx)("span",{className:"required",children:"*"})]}),Object(x.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"contactSubject",children:"Konu"}),Object(x.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"contactMessage",children:["Mesaj ",Object(x.jsx)("span",{className:"required",children:"*"})]}),Object(x.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"submit",children:"G\xf6nder"}),Object(x.jsx)("span",{id:"image-loader",children:Object(x.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(x.jsx)("div",{id:"message-warning",children:" L\xfctfen yeniden deneyiniz."}),Object(x.jsxs)("div",{id:"message-success",children:[Object(x.jsx)("i",{className:"fa fa-check"}),"Mesaj\u0131n\u0131z g\xf6nderildi, te\u015fekk\xfcr ederiz!",Object(x.jsx)("br",{})]})]})}),Object(x.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(x.jsx)("aside",{className:"four columns footer-widgets",children:Object(x.jsxs)("div",{className:"widget widget_contact",children:[Object(x.jsx)("h4",{children:"Adres ve \u0130leti\u015fim"}),Object(x.jsxs)("p",{className:"address",children:[e,Object(x.jsx)("br",{}),t," ",Object(x.jsx)("br",{}),s,", ",c," ",a,Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:i})]})]})})})]})]})}}]),s}(c.Component),C=y,D=s(19),z=s.n(D),M=0,F=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(x.jsx)("div",{className:"columns portfolio-item",children:Object(x.jsxs)("div",{className:"item-wrap",children:[Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)(z.a,{alt:e.title,src:t})}),Object(x.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},M++)}));return Object(x.jsx)("section",{id:"portfolio",children:Object(x.jsx)(m.a,{left:!0,duration:1e3,distance:"40px",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"twelve rows collapsed",children:[Object(x.jsx)("h1",{children:"\xd6rnek Daire ve Villa \xc7ekimlerimiz"}),Object(x.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),A=F,E=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(u,{data:this.state.resumeData.main}),Object(x.jsx)(g,{data:this.state.resumeData.main}),Object(x.jsx)(w,{data:this.state.resumeData.resume}),Object(x.jsx)(A,{data:this.state.resumeData.portfolio}),Object(x.jsx)(C,{data:this.state.resumeData.main}),Object(x.jsx)(f,{data:this.state.resumeData.main})]})}}]),s}(c.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(x.jsx)(E,{}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.b6e7815e.chunk.js.map