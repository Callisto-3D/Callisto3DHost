(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,s,t){},38:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(14),i=t.n(a),n=(t(24),t(6)),r=t(8),l=t(9),j=t(7),d=t(15),o=t(17),h=t.n(o),b=t(18),O=t(4),x=t.n(O),m=t(1),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;var e=this.props.data.name,s=this.props.data.description,t=this.props.data.description1;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(b.a,{type:"lines",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"ANA SAYFA"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"HAKKIMIZDA"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"H\u0130ZMETLER\u0130M\u0130Z"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"\xd6RNEK \xc7EK\u0130MLER"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"\u0130LET\u0130\u015e\u0130M"})})]})]}),Object(m.jsx)("main",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(x.a,{bottom:!0,children:Object(m.jsx)("h1",{className:"responsive-headline",children:e})}),Object(m.jsx)(x.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h2",{children:[t,"."]})}),Object(m.jsx)("hr",{}),Object(m.jsx)(x.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h3",{children:[s,"."]})}),Object(m.jsx)("hr",{}),Object(m.jsx)(x.a,{bottom:!0,duration:2e3,children:Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{href:"#portfolio",className:"smoothscroll button btn project-btn",children:[Object(m.jsx)("i",{className:"fa fa-book"}),"Projelerimiz"]}),Object(m.jsxs)("a",{href:"#contact",className:"smoothscroll button btn github-btn",children:[Object(m.jsx)("i",{className:"fa fa-phone"}),"Teklif Al\u0131n"]})]})})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),u=p,v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(x.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsx)("ul",{className:"copyright",children:Object(m.jsx)("li",{children:"\xa9 Copyright 2022 Callisto 3D"})})]})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),f=v,N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e="images/"+this.props.data.image,s=this.props.data.hakkimizda1,t=this.props.data.hakkimizda2,c=this.props.data.address.street,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(x.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:e,alt:"Callisto 3D"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"Hakk\u0131m\u0131zda"}),Object(m.jsx)("p",{children:s}),Object(m.jsx)("p",{children:t}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"\u0130leti\u015fim"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsxs)("span",{children:[c,Object(m.jsx)("br",{}),a," ",i,", ",n]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:l})]})]})})]})]})})})}}]),t}(c.Component),g=N,k=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.matterport.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsx)("p",{children:e.description}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.dijitalkopya})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.erisilebilirlik})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.akillietiket})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.olcualma})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.vrdestek})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.webtrafik})})})]})]},e.school)})),c=this.props.data.digitalshowroom.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.gallery}),Object(m.jsx)("p",{children:e.description}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.urunlistesi})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.sanalmagaza})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.sanaldeneyim})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{children:e.eticaretsitesi})})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{children:Object(m.jsx)("span",{})})})]})]},e.gallery)})),a=this.props.data.gisservices.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.cbs}),Object(m.jsx)("p",{children:e.description})]},e.cbs)})),i=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(m.jsx)("em",{children:s.name})]},s.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Matterport"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Digital Showroom"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"CBS \xc7\xf6z\xfcmleri"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Yeteneklerimiz"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:i})})]})]})})]})}}]),t}(c.Component),w=k,y=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)(O.Fade,{bottom:!0,duration:1e3,children:Object(m.jsx)("div",{className:"row section-head",children:Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("h2",{className:"lead",children:n})})})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(O.Slide,{left:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{method:"get",action:"mailto:callisto3dservices@gmail.com",encType:"multipart/form-data",id:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["\u0130sim ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",name:"Name",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Konu"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",name:"subject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["Mesaj ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",name:"body"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",type:"submit",children:"G\xf6nder"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:" L\xfctfen yeniden deneyiniz."}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Mesaj\u0131n\u0131z g\xf6nderildi, te\u015fekk\xfcr ederiz!",Object(m.jsx)("br",{})]})]})}),Object(m.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(m.jsx)("aside",{className:"four columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Adres ve \u0130leti\u015fim"}),Object(m.jsxs)("p",{className:"address",children:[e,Object(m.jsx)("br",{}),s," ",Object(m.jsx)("br",{}),t,", ",c," ",a,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:i})]})]})})})]})]})}}]),t}(c.Component),C=y,D=t(19),z=t.n(D),A=0,M=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)(z.a,{alt:e.title,src:s})}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},A++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(x.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve rows collapsed",children:[Object(m.jsx)("h1",{children:"\xd6rnek Daire ve Villa \xc7ekimlerimiz"}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),t}(c.Component),E=M,S=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{data:this.state.resumeData.main}),Object(m.jsx)(g,{data:this.state.resumeData.main}),Object(m.jsx)(w,{data:this.state.resumeData.resume}),Object(m.jsx)(E,{data:this.state.resumeData.portfolio}),Object(m.jsx)(C,{data:this.state.resumeData.main}),Object(m.jsx)(f,{data:this.state.resumeData.main})]})}}]),t}(c.Component),F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(m.jsx)(S,{}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.fc61a44c.chunk.js.map