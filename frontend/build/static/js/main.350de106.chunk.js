(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{359:function(e,t,n){},360:function(e,t,n){},361:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){},461:function(e,t){},463:function(e,t){},472:function(e,t){},474:function(e,t){},499:function(e,t){},500:function(e,t){},505:function(e,t){},507:function(e,t){},514:function(e,t){},533:function(e,t){},572:function(e,t){},702:function(e,t,n){},703:function(e,t,n){},704:function(e,t,n){},705:function(e,t,n){},706:function(e,t,n){},707:function(e,t,n){},708:function(e,t,n){},709:function(e,t,n){},710:function(e,t,n){},711:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(35),i=n.n(r),s=(n(359),n(72)),o=n(97),l=n(44),d=n(31),j=(n(360),{user:{},islogged:!1}),u=c.a.createContext(j),b=n(56),m=n(57),h=n(60),O=n(59),x=n.p+"static/media/Brandlogo.c04da8a8.png",p=(n(361),n(5));function g(e){return Object(p.jsx)(l.b,{to:"/",children:Object(p.jsx)("div",{className:"BrandLogo",children:Object(p.jsx)("img",{className:"BrandLogoAsset",src:e.src?e.src:x,draggable:!1})})})}n(367),n(368);var f=n(74),v=n(188),y=n(135),N=Object(p.jsxs)(f.a,{children:[Object(p.jsx)(f.a.Item,{children:"Friends"},1),Object(p.jsx)(f.a.Item,{children:"Groups"},2),Object(p.jsx)(f.a.Item,{children:"Settings"},3),Object(p.jsx)(f.a.Item,{danger:!0,children:" Logout "})]});function k(){var e=Object(a.useContext)(u);return Object(p.jsxs)("div",{className:"navbar-actions-container",children:[Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"action-item",children:"Home"})}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"action-item",children:"Features"})}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"action-item",children:"About"})}),Object(p.jsx)("div",{children:0==e.appState.islogged?Object(p.jsx)(l.b,{to:"/login",children:Object(p.jsx)("div",{className:"dark-action-item",children:"Login / Sign Up"})}):Object(p.jsx)("div",{children:Object(p.jsx)(l.b,{to:"/home",children:Object(p.jsx)(v.a,{overlay:N,children:Object(p.jsxs)("div",{className:"dark-action-item",children:["pushpendrahpx ",Object(p.jsx)(y.a,{})]})})})})})]})}function S(){return Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)("div",{className:"navbar-brand",children:Object(p.jsx)(g,{})}),Object(p.jsx)("div",{className:"navbar-actions",children:Object(p.jsx)(k,{})})]})}var w=n(721),C=n(722),I=n(723),T=n(724),A=n(725),L=n(61),P=n.n(L),z=n(94),F=n(715),J=n(350),_=n(138),D=n(65),U=n(714),E=n(717),V=n(107),B=n(720),W=(n(436),n(90)),q=n(91),R=F.a.Title,G=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).payRazorpay=Object(z.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={key:"rzp_test_DWTr1gwISZP31l",currency:"INR",amount:9.3*100,name:"Learning To Code Online",description:"Test Wallet Transaction",image:"https://avatars.githubusercontent.com/u/48829314?v=4",order_id:"de.id",handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature),J.a.success({message:"Payment Successfull"})},prefill:{name:"Anirudh Jwala",email:"anirudh@gmail.com",contact:"9999999999"}},new window.Razorpay(t).open();case 3:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{style:{padding:"10px",textAlign:"center"},children:[Object(p.jsx)(R,{level:2,children:"Dashboard"}),Object(p.jsx)("div",{className:"site-statistic-demo-card",children:Object(p.jsxs)(_.a,{gutter:16,children:[Object(p.jsx)(D.a,{span:12,children:Object(p.jsxs)(U.a,{children:[Object(p.jsx)(E.a,{title:"Owe You",value:11.28,precision:2,valueStyle:{color:"#3f8600"},suffix:"\u20b9"}),Object(p.jsx)(V.a,{type:"primary",icon:Object(p.jsx)(B.a,{}),loading:!1,onClick:function(){},ghost:!0,children:"Send Notification to \u20b9 Pay"})]})}),Object(p.jsx)(D.a,{span:12,children:Object(p.jsxs)(U.a,{children:[Object(p.jsx)(E.a,{title:"You Owe",value:9.3,precision:2,valueStyle:{color:"#cf1322"},suffix:"\u20b9"}),Object(p.jsx)(V.a,{type:"primary",icon:Object(p.jsx)(B.a,{}),loading:!1,onClick:function(){return e.payRazorpay()},children:"\u20b9 Pay Now"})]})})]})})]})}}]),n}(a.Component),M=n(718),H=n(719),Y=n(716),K=n(713),Z=n(134),Q=(F.a.Title,[{breadcrumbName:"Home"},{breadcrumbName:"Groups"}]),X=Object(p.jsxs)(f.a,{children:[Object(p.jsx)(f.a.Item,{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/",children:"1st menu item"})}),Object(p.jsx)(f.a.Item,{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/",children:"2nd menu item"})}),Object(p.jsx)(f.a.Item,{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/",children:"3rd menu item"})})]}),$=function(){return Object(p.jsx)(v.a,{overlay:X,placement:"topLeft",arrow:!0,children:Object(p.jsx)(V.a,{style:{border:"none",padding:0},children:Object(p.jsx)(Z.a,{style:{fontSize:20,verticalAlign:"top"}})})},"more")},ee=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(p.jsx)("a",{children:e})}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return Object(p.jsx)(p.Fragment,{children:e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),Object(p.jsx)(M.a,{color:t,children:e.toUpperCase()},e)}))})}},{title:"Action",key:"action",render:function(e,t){return Object(p.jsxs)(H.b,{size:"middle",children:[Object(p.jsxs)("a",{children:["Invite ",t.name]}),Object(p.jsx)("a",{children:"Delete"})]})}}],te=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],ne=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{style:{margin:"0 auto",maxWidth:"1386px"},children:[Object(p.jsx)(Y.a,{className:"site-page-header",title:"Friends",breadcrumb:{routes:Q},extra:[Object(p.jsx)(V.a,{type:"primary",children:"Primary"},"1"),Object(p.jsx)($,{},"more")]}),Object(p.jsx)("div",{children:Object(p.jsx)(K.a,{columns:ee,dataSource:te})})]})}}]),n}(a.Component),ae=n(346),ce=n(104);var re={setCookie:function(e,t,n){var a="";if(n){var c=new Date;c.setTime(c.getTime()+24*n*60*60*1e3),a="; expires="+c.toUTCString()}document.cookie=e+"="+(t||"")+a+"; path=/"},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(t))return c.substring(t.length,c.length)}return null},eraseCookie:function(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},ie=[{breadcrumbName:"Home"},{breadcrumbName:"Friends"}],se=Object(p.jsxs)(f.a,{children:[Object(p.jsx)(f.a.Item,{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/",children:"1st menu item"})}),Object(p.jsx)(f.a.Item,{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/",children:"2nd menu item"})}),Object(p.jsx)(f.a.Item,{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/",children:"3rd menu item"})})]}),oe=function(){return Object(p.jsx)(v.a,{overlay:se,placement:"topLeft",arrow:!0,children:Object(p.jsx)(V.a,{style:{border:"none",padding:0},children:Object(p.jsx)(Z.a,{style:{fontSize:20,verticalAlign:"top"}})})},"more")},le=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return Object(p.jsx)("span",{children:e})}},{title:"Username",dataIndex:"username",key:"username"},{title:"Email",dataIndex:"email",key:"email"},{title:"Joined At",key:"joinedat",dataIndex:"joinedat"}],de=Object(p.jsx)(ce.a,{style:{fontSize:24},spin:!0}),je=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).getAllFriends=Object(z.a)(P.a.mark((function e(){var t,n,c,r,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(W.default+q.getAllFriends,{method:"GET",headers:{Authorization:"Bearer "+re.getCookie("accessToken")}});case 2:return t=e.sent,e.next=5,t.json();case 5:for(n=e.sent,console.log(n),c=[],r=0;r<n.length;r++)(i={}).key=n[r].id,i.username=n[r].username,i.name=n[r].firstname+" "+n[r].lastname,i.email=n[r].email,i.joinedat=new Date(Number(n[r].joinedat)).toString(),c.push(i);console.log(c),a.setState({data:c,isLoading:!1});case 11:case"end":return e.stop()}}),e)}))),a.state={data:[],isLoading:!0},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getAllFriends()}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{style:{margin:"0 auto",maxWidth:"1386px"},children:[Object(p.jsx)(Y.a,{className:"site-page-header",title:"Friends",breadcrumb:{routes:ie},extra:[Object(p.jsx)(V.a,{type:"primary",children:"Add a Friend"},"1"),Object(p.jsx)(oe,{},"more")]}),Object(p.jsxs)("div",{children:[this.state.isLoading?Object(p.jsx)(ae.a,{indicator:de,size:"large"}):"",Object(p.jsx)(K.a,{columns:le,dataSource:this.state.data})]})]})})}}]),n}(a.Component),ue=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Activity"})}}]),n}(a.Component),be=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Accounts"})}}]),n}(a.Component),me=(f.a.SubMenu,function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.setState({current:e.key})},a.state={current:e.match.params.action?e.match.params.action:"dashboard"},console.log(e),a}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{}),Object(p.jsxs)(f.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",children:[Object(p.jsx)(f.a.Item,{icon:Object(p.jsx)(w.a,{}),children:Object(p.jsx)(l.b,{to:"/home/dashboard",children:"Dashboard"})},"dashboard"),Object(p.jsx)(f.a.Item,{icon:Object(p.jsx)(C.a,{}),children:Object(p.jsx)(l.b,{to:"/home/groups",children:"Groups"})},"groups"),Object(p.jsx)(f.a.Item,{icon:Object(p.jsx)(I.a,{}),children:Object(p.jsx)(l.b,{to:"/home/friends",children:"Friends"})},"friends"),Object(p.jsx)(f.a.Item,{icon:Object(p.jsx)(T.a,{}),children:Object(p.jsx)(l.b,{to:"/home/activity",children:"Activity"})},"activity"),Object(p.jsx)(f.a.Item,{icon:Object(p.jsx)(A.a,{}),children:Object(p.jsx)(l.b,{to:"/home/accounts",children:"Account"})},"accounts")]}),"dashboard"==this.state.current?Object(p.jsx)(G,{}):"","groups"==this.state.current?Object(p.jsx)(ne,{}):"","friends"==this.state.current?Object(p.jsx)(je,{}):"","activity"==this.state.current?Object(p.jsx)(ue,{}):"","accounts"==this.state.current?Object(p.jsx)(be,{}):""]})}}]),n}(a.Component)),he=n.p+"static/media/Brandlogo2.ef37c2fd.png";n(702);function Oe(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)(g,{src:he}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"madewithlove",children:"made with love"})]})}n(703),n(704);var xe=n.p+"static/media/section1.8fdd331b.png";function pe(){return Object(p.jsxs)("div",{className:"section1-container",children:[Object(p.jsxs)("div",{className:"Section1-left-container",children:[Object(p.jsxs)("div",{className:"left-top",children:[Object(p.jsx)("div",{children:"Splitting expenses"}),Object(p.jsx)("div",{children:"never like before"})]}),Object(p.jsxs)("div",{className:"left-between",children:[Object(p.jsx)("div",{children:"Let we handle all your"}),Object(p.jsx)("div",{children:"expenses"})]}),Object(p.jsx)("div",{className:"left-bottom",children:Object(p.jsx)("div",{children:"Start using splits"})})]}),Object(p.jsx)("div",{className:"Section1-right-container",style:{userSelect:"none"},children:Object(p.jsx)("img",{draggable:!0,src:xe,style:{userSelect:"none"}})})]})}n(705);var ge=n.p+"static/media/Section2.3421796a.png";function fe(){return Object(p.jsxs)("div",{className:"Section2-container",children:[Object(p.jsx)("div",{className:"Section2-left-container",children:Object(p.jsx)("img",{draggable:!1,src:ge})}),Object(p.jsxs)("div",{className:"Section2-right-container",children:[Object(p.jsx)("div",{className:"right-top",children:Object(p.jsx)("div",{children:" Why Splits ? "})}),Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Managing expenses"}),Object(p.jsx)("li",{children:"Timely reminders"}),Object(p.jsx)("li",{children:"Simplifying Debts"}),Object(p.jsx)("li",{children:"Simplifying payments"})]})})]})]})}n(706);var ve=n.p+"static/media/Section3.9df0a9ee.png",ye=n.p+"static/media/Section3bg.66124bb1.jpg";function Ne(){return Object(p.jsxs)("div",{className:"Section3-container",style:{background:"url("+ye+")"},children:[Object(p.jsx)("div",{className:"Section3-title",children:"Doing all this, just for you."}),Object(p.jsx)("div",{className:"Section3-Image",children:Object(p.jsx)("img",{draggable:!1,src:ve})})]})}function ke(){return Object(p.jsxs)("div",{className:"landingpage",children:[Object(p.jsx)(S,{}),Object(p.jsx)(pe,{}),Object(p.jsx)(fe,{}),Object(p.jsx)(Ne,{}),Object(p.jsx)(Oe,{})]})}n(707);var Se=n.p+"static/media/loginbg.6d206b25.png",we=n(123);n(708),ce.a;function Ce(){var e,t=Object(a.useContext)(u);console.log(t);var n=Object(a.useState)({email:"",password:""}),c=Object(o.a)(n,2),r=c[0],i=c[1],j=Object(a.useState)(null===t||void 0===t||null===(e=t.appState)||void 0===e?void 0:e.islogged),b=Object(o.a)(j,2),m=b[0],h=b[1],O=function(e){i((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(we.a)({},e.target.name,e.target.value))}))},x=function(){var e=Object(z.a)(P.a.mark((function e(n){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch(W.default+q.login,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,a.ok&&c?(t.setUser(c),re.setCookie("accessToken",c.accessToken),localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("contextValues",JSON.stringify(c)),J.a.success({message:"User Created"}),h(!0)):J.a.error({message:"Login Error"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 1==m?Object(p.jsx)(d.a,{to:"/home"}):Object(p.jsxs)("div",{className:"login-form-container",children:[Object(p.jsx)("div",{className:"login-form-title",children:"Login"}),Object(p.jsx)("div",{style:{padding:"10px",textAlign:"center"},children:"We do everything in single step, whether its splitting expenses or Authentication"}),Object(p.jsxs)("div",{className:"Login-form",children:[Object(p.jsx)("div",{className:"login-form-welcome",children:"Welcome to Splits"}),Object(p.jsxs)("form",{className:"login-form-main",onSubmit:x,children:[Object(p.jsx)("div",{className:"login-form-input-group",children:Object(p.jsx)("input",{placeholder:"Email",type:"email",id:"email",name:"email",defaultValue:r.email,required:!0,onChange:O})}),Object(p.jsx)("div",{className:"login-form-input-group",children:Object(p.jsx)("input",{placeholder:"Password",type:"password",id:"password",name:"password",defaultValue:r.password,required:!0,onChange:O})}),Object(p.jsx)("div",{className:"login-form-input-group",children:Object(p.jsx)("button",{className:"login-form-submit login-btn-active",children:"Login"})}),Object(p.jsx)("div",{style:{padding:"10px"},children:Object(p.jsx)(l.b,{to:"/register",children:"Don't have an account ? Register Here"})})]})]})]})}function Ie(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{}),Object(p.jsxs)("div",{className:"col2-container",children:[Object(p.jsx)("div",{className:"col2-left",style:{background:"url("+Se+") no-repeat center ",height:"calc(100vh - 75px)"}}),Object(p.jsx)("div",{className:"col2-right",children:Object(p.jsx)(Ce,{})})]})]})}n(709),n(710),ce.a;function Te(){var e,t=Object(a.useContext)(u);console.log(t);var n=Object(a.useState)({fullname:"",username:"",email:"",phonenumber:"",password:""}),c=Object(o.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(null===t||void 0===t||null===(e=t.appState)||void 0===e?void 0:e.islogged),j=Object(o.a)(l,2),b=j[0],m=j[1],h=function(e){i((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(we.a)({},e.target.name,e.target.value))}))},O=function(){var e=Object(z.a)(P.a.mark((function e(n){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch(W.default+q.register,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,a.ok&&c?(t.setUser(c),re.setCookie("accessToken",c.accessToken),localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("contextValues",JSON.stringify(c)),J.a.success({message:"User Created"}),m(!0)):J.a.error({message:"Registration Error"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 1==b?Object(p.jsx)(d.a,{to:"/home"}):Object(p.jsxs)("div",{className:"register-form-container",children:[Object(p.jsx)("div",{className:"register-form-title",children:"Register"}),Object(p.jsx)("div",{style:{padding:"10px",textAlign:"center"},children:"We do everything in single step, whether its splitting expenses or Authentication"}),Object(p.jsxs)("div",{className:"register-form",children:[Object(p.jsx)("div",{className:"register-form-welcome",children:"Welcome to Splits"}),Object(p.jsxs)("form",{className:"register-form-main",onSubmit:O,children:[Object(p.jsx)("div",{className:"register-form-input-group",children:Object(p.jsx)("input",{placeholder:"Full Name",type:"text",id:"fullname",name:"fullname",defaultValue:r.fullname,required:!0,onChange:h})}),Object(p.jsx)("div",{className:"register-form-input-group",children:Object(p.jsx)("input",{placeholder:"Username",type:"text",id:"username",name:"username",defaultValue:r.username,required:!0,onChange:h})}),Object(p.jsx)("div",{className:"register-form-input-group",children:Object(p.jsx)("input",{placeholder:"Email",type:"email",id:"email",name:"email",defaultValue:r.email,required:!0,onChange:h})}),Object(p.jsx)("div",{className:"register-form-input-group",children:Object(p.jsx)("input",{placeholder:"Phone Number",type:"number",id:"phonenumber",name:"phonenumber",defaultValue:r.phonenumber,required:!0,onChange:h})}),Object(p.jsx)("div",{className:"register-form-input-group",children:Object(p.jsx)("input",{placeholder:"Password",type:"password",id:"password",name:"password",defaultValue:r.password,required:!0,onChange:h})}),Object(p.jsx)("div",{className:"register-form-input-group",children:Object(p.jsx)("button",{className:"register-form-submit register-btn-active",children:"Create an account"})})]})]})]})}function Ae(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{}),Object(p.jsxs)("div",{className:"rcol2-container",children:[Object(p.jsx)("div",{className:"rcol2-right",children:Object(p.jsx)(Te,{})}),Object(p.jsx)("div",{className:"rcol2-left",style:{background:"url("+Se+") no-repeat center ",height:"calc(100vh - 75px)"}})]})]})}var Le=function(){var e=JSON.parse(localStorage.getItem("contextValues")),t=Object(a.useState)(Object(s.a)(Object(s.a)({},e),{},{islogged:!!(null===e||void 0===e?void 0:e.email)})),n=Object(o.a)(t,2),c=n[0],r=n[1],i={appState:c,setAppState:r,setUser:function(e){r((function(t){var n=Object(s.a)({},t);return n.user=e,n.islogged=!0,n}))},logoutUser:function(){}};return Object(a.useEffect)((function(){!function(e){new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t(!0)},n.onerror=function(){t(!1)},document.body.appendChild(n)}))}("https://checkout.razorpay.com/v1/checkout.js")}),[]),Object(p.jsx)(u.Provider,{value:i,children:Object(p.jsx)(l.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/",exact:!0,component:ke}),Object(p.jsx)(d.b,{path:"/login",component:Ie}),Object(p.jsx)(d.b,{path:"/register",component:Ae}),Object(p.jsx)(d.b,{path:"/home",exact:!0,component:me}),Object(p.jsx)(d.b,{path:"/home/:action",component:me})]})})})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,726)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Le,{})}),document.getElementById("root")),Pe()},90:function(e){e.exports=JSON.parse('{"default":""}')},91:function(e){e.exports=JSON.parse('{"register":"/api/user/register","login":"/api/user/login","getAllFriends":"/api/user/all","razorpay":"/api/razorpay"}')}},[[711,1,2]]]);
//# sourceMappingURL=main.350de106.chunk.js.map