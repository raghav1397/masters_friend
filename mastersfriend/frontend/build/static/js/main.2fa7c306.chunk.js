(this["webpackJsonpreact-firebase-authentication"]=this["webpackJsonpreact-firebase-authentication"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"db",(function(){return E})),a.d(n,"auth",(function(){return v})),a.d(n,"facebookProvider",(function(){return b}));var r={};a.r(r),a.d(r,"doCreateUserWithEmailAndPassword",(function(){return y})),a.d(r,"doSignInWithEmailAndPassword",(function(){return w})),a.d(r,"doSignOut",(function(){return S})),a.d(r,"doPasswordReset",(function(){return O})),a.d(r,"doPasswordChange",(function(){return C})),a.d(r,"GoogleAuthProvide",(function(){return j})),a.d(r,"storage",(function(){return N})),a.d(r,"default",(function(){return g.a}));var o={};a.r(o),a.d(o,"doCreateUser",(function(){return A})),a.d(o,"doCreateFrom",(function(){return P})),a.d(o,"onceGetUsers",(function(){return k})),a.d(o,"doGetAnUnser",(function(){return x}));a(99);var l=a(1),s=a.n(l),i=a(14),c=a.n(i),u=(a(104),a(199)),m=a(198),d=a(4),h=(a(105),"/home"),f=a(197),p=a(23),g=a.n(p);a(124),a(126);g.a.apps.length||g.a.initializeApp({apiKey:"AIzaSyBQokv7SWh03xXOKW4mHhdaI8rEyHzkAis",authDomain:"masters-273323.firebaseapp.com",databaseURL:"https://masters-273323.firebaseio.com",projectId:"masters-273323",storageBucket:"masters-273323.appspot.com",messagingSenderId:"136049144384",appId:"1:136049144384:web:02ac0c31787dedbbc365a5",measurementId:"G-0RL05VW1X5"});var E=g.a.database(),v=g.a.auth(),b=new g.a.auth.GoogleAuthProvider,y=(a(161),function(e,t){return v.createUserWithEmailAndPassword(e,t)}),w=function(e,t){return v.signInWithEmailAndPassword(e,t)},S=function(){return v.signOut()},O=function(e){return v.sendPasswordResetEmail(e)},C=function(e){return v.currentUser.updatePassword(e)},j=function(){return v.signInWithPopup(b)},N=g.a.storage(),A=function(e,t,a){return E.ref("users/".concat(e)).set({username:t,email:a})},P=function(e,t,a,n,r,o,l,s,i,c,u,m,d){return E.ref("forms/".concat(i)).set({username:e,email:t,first_name:a,last_name:n,grade:r,gre:o,work_ex:l,toefl:s,uid:i,lor1:c,lor2:u,lor3:m,lor4:d})},k=function(){return E.ref("users").once("value")},x=function(e){return E.ref("users/".concat(e)).once("value")},U=function(){return s.a.createElement(d.b,{color:"info",onClick:r.doSignOut},"Sign Out")},F=s.a.createContext(null),I=function(){return s.a.createElement(d.k,{color:"light",light:!0,expand:"md"},s.a.createElement(d.l,null,s.a.createElement(f.a,{to:"/"}," Home ")),s.a.createElement(d.h,{className:"ml-auto",navbar:!0},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(f.a,{to:h},"University Suggestor"))),s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(f.a,{to:"/signin"},"Sign In")))))},T=function(){return s.a.createElement(F.Consumer,null,(function(e){return e?s.a.createElement(L,{userInfo:e}):s.a.createElement(I,null)}))},L=function(e){e.userInfo;return s.a.createElement(d.k,{color:"light",light:!0,expand:"md"},s.a.createElement(d.l,null,s.a.createElement(f.a,{to:"/"}," Home ")),s.a.createElement(d.h,{className:"ml-auto",navbar:!0},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(f.a,{to:h},"University Suggestor"))),s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(f.a,{to:"/account"},"Account"))),s.a.createElement(d.i,null,s.a.createElement(U,null))))},D=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Friend for your Master's"),s.a.createElement("p",null,"This page is public, accessible by everyone"))},R=a(18),_=a(7),M=a(8),W=a(10),G=a(9),B=a(17),V=a(200),H={username:"",email:"",passwordOne:"",passwordTwo:"",error:null,showingAlert:!1},z=function(e,t){return function(){return Object(B.a)({},e,t)}},J=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state=Object(R.a)({},H),e.onSubmit=function(t){var a=e.state,n=a.username,l=a.email,s=a.passwordOne,i=e.props.history;console.log("raghav12345"),r.doCreateUserWithEmailAndPassword(l,s).then((function(t){console.log(t.uid),o.doCreateUser(t.uid,n,l).then((function(){console.log(t.uid),e.setState(Object(R.a)({},H)),i.push(h)})).catch((function(t){console.log(t),e.setState(z("error",t)),e.timer()}))})).catch((function(t){e.setState(z("error",t)),console.log(t),e.timer()})),t.preventDefault()},e.timer=function(){e.setState({showingAlert:!0}),setTimeout((function(){e.setState({showingAlert:!1})}),4e3)},e}return Object(M.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,r=t.passwordOne,o=t.passwordTwo,l=t.error,i=t.showingAlert,c=r!==o||""===r||""===n||""===a;return s.a.createElement("div",null,i&&s.a.createElement(d.a,{color:"danger",onLoad:this.timer},l.message),s.a.createElement(d.d,{onSubmit:this.onSubmit},s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"userName"},"Full Name"),s.a.createElement(d.f,{type:"username",name:"username",id:"userName",placeholder:"John Doe",value:a,onChange:function(t){return e.setState(z("username",t.target.value))}})),s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"exampleEmail"},"Email"),s.a.createElement(d.f,{type:"email",name:"email",id:"exampleEmail",placeholder:"user@gmail.com",value:n,onChange:function(t){return e.setState(z("email",t.target.value))}})),s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"examplePassword1"},"Password"),s.a.createElement(d.f,{type:"password",name:"password",id:"examplePassword1",placeholder:"Password",value:r,onChange:function(t){return e.setState(z("passwordOne",t.target.value))}})),s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"examplePassword2"},"Confirm Password"),s.a.createElement(d.f,{type:"password",name:"password",id:"examplePassword2",placeholder:"Confirm Password",value:o,onChange:function(t){return e.setState(z("passwordTwo",t.target.value))}})),s.a.createElement("div",{className:"text-center"},s.a.createElement(d.b,{disabled:c,type:"submit"},"Sign Up"))))}}]),a}(l.Component),K=function(){return s.a.createElement("p",null,"Don't have an account? ",s.a.createElement(f.a,{to:"/signup"},"Sign Up"))},X=Object(V.a)((function(e){var t=e.history;return s.a.createElement("div",null,s.a.createElement("div",{className:"div-flex"},s.a.createElement("div",null,s.a.createElement("h1",{className:"centered"},"Sign Up"),s.a.createElement(J,{history:t}))))})),Q=a(95),$=function(e,t){return function(){return Object(B.a)({},e,t)}},q={email:"",error:null,showingAlert:!1},Y=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state=Object(R.a)({},q),e.onSubmit=function(t){var a=e.state.email;r.doPasswordReset(a).then((function(){e.setState(Object(R.a)({},q))})).catch((function(t){e.setState($("error",t)),e.timer()})),t.preventDefault()},e.timer=function(){e.setState({showingAlert:!0}),setTimeout((function(){e.setState({showingAlert:!1})}),4e3)},e}return Object(M.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.error,r=t.showingAlert,o=""===a;return s.a.createElement("div",null,r&&s.a.createElement(d.a,{color:"danger",onLoad:this.timer},n.message),s.a.createElement(d.d,{onSubmit:this.onSubmit},s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"exampleEmail"},"Email"),s.a.createElement(d.f,{type:"email",name:"email",id:"exampleEmail",placeholder:"user@gmail.com",value:a,onChange:function(t){return e.setState($("email",t.target.value))}})),s.a.createElement("div",{className:"text-center"},s.a.createElement(d.b,{disabled:o,type:"submit"},"Reset My Password"))))}}]),a}(l.Component),Z=function(){return s.a.createElement("p",null,s.a.createElement(f.a,{to:"/pw-forget"},"Forgot Password?"))},ee=function(){return s.a.createElement("div",{className:"div-flex"},s.a.createElement("div",null,s.a.createElement("h1",{className:"centered"},"Forget Password"),s.a.createElement(Y,null)))},te=function(e,t){return function(){return Object(B.a)({},e,t)}},ae={email:"",password:"",error:null,showingAlert:!1},ne=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state=Object(R.a)({},ae),e.onSubmit=function(t){var a=e.state,n=a.email,o=a.password,l=e.props.history;r.doSignInWithEmailAndPassword(n,o).then((function(){e.setState(Object(R.a)({},ae)),l.push(h)})).catch((function(t){e.setState(te("error",t)),e.timer()})),t.preventDefault()},e.facebookLogin=function(){var t=e.props.history;r.GoogleAuthProvide().then((function(a){console.log("authUser",a),o.doCreateUser(a.user.uid,a.user.displayName,a.user.email).then((function(){t.push(h)})).catch((function(t){e.setState(te("error",t))}))})).catch((function(t){e.setState(te("error",t))}))},e.timer=function(){e.setState({showingAlert:!0}),setTimeout((function(){e.setState({showingAlert:!1})}),4e3)},e}return Object(M.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,r=t.error,o=t.showingAlert,l=""===n||""===a;return s.a.createElement("div",null,o&&s.a.createElement(d.a,{color:"danger",onLoad:this.timer},r.message),s.a.createElement(d.d,{onSubmit:this.onSubmit},s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"exampleEmail"},"Email"),s.a.createElement(d.f,{type:"email",name:"email",id:"exampleEmail",placeholder:"user@gmail.com",value:a,onChange:function(t){return e.setState(te("email",t.target.value))}})),s.a.createElement(d.e,null,s.a.createElement(d.g,{for:"examplePassword"},"Password"),s.a.createElement(d.f,{type:"password",name:"password",id:"examplePassword",placeholder:"pass-test",value:n,onChange:function(t){return e.setState(te("password",t.target.value))}})),s.a.createElement("div",{className:"text-center"},s.a.createElement(d.b,{disabled:l,type:"submit"},"Sign In"))),s.a.createElement("hr",null),s.a.createElement(Q.GoogleLoginButton,{onClick:this.facebookLogin}),s.a.createElement("br",null),s.a.createElement("p",null,"NOTE: University Suggestor is only accessible by signed in users."))}}]),a}(l.Component),re=Object(V.a)((function(e){var t=e.history;return s.a.createElement("div",{className:"div-flex"},s.a.createElement("div",null,s.a.createElement("h1",{className:"centered"},"Sign In"),s.a.createElement(ne,{history:t}),s.a.createElement(K,null),s.a.createElement(Z,null)))})),oe=function(e){return function(t){var a=function(a){Object(W.a)(o,a);var r=Object(G.a)(o);function o(){return Object(_.a)(this,o),r.apply(this,arguments)}return Object(M.a)(o,[{key:"componentDidMount",value:function(){var t=this;n.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(F.Consumer,null,(function(a){return a?s.a.createElement(t,Object.assign({},e.props,{loggedUser:a})):null}))}}]),o}(s.a.Component);return Object(V.a)(a)}},le=a(32),se=a(96),ie=a.n(se),ce=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:null,username:"",loading:!0,first_name:"",last_name:"",email:"",grade:"",update:0,gre:"",we:"",toefl:"",resume:"",sop:"",entry:"",uid:"",redirect:null,lor1:"",lor2:"",lor3:"",lor4:""},e.onChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),console.log(e.state);var a=document.getElementById("file-id").files[0],n=e.state.uid+"_resume.pdf",r=document.getElementById("file-id2").files[0],l=e.state.uid+"_sop.pdf";a&&(a=new File([a],n,{type:a.type}),console.log(a),N.ref("resume/".concat(e.state.uid,"/").concat(a.name)).put(a).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);console.log(t)}),(function(e){console.log(e)})));r&&(r=new File([r],l,{type:r.type}),N.ref("sop/".concat(e.state.uid,"/").concat(r.name)).put(r).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);console.log(t)}),(function(e){console.log(e)})));o.doCreateFrom(e.state.username,e.state.email,e.state.first_name,e.state.last_name,e.state.grade,e.state.gre,e.state.we,e.state.toefl,e.state.uid,e.state.lor1,e.state.lor2,e.state.lor3,e.state.lor4).then((function(){e.props.history.push("/Predict")})).catch((function(e){})),ie.a.post("https://masters-backend-1.wl.r.appspot.com/",{email:e.state.email.toString(),grade:e.state.grade,gre:e.state.gre,work_ex:e.state.we,toefl:e.state.toefl,uid:e.state.uid.toString(),lor1:e.state.lor1,lor2:e.state.lor2,lor3:e.state.lor3,lor4:e.state.lor4}).then((function(e){console.log(e)}),(function(e){console.log(e)}))},e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.loggedUser;t?o.doGetAnUnser(t.uid).then((function(a){e.setState({username:a.val().username,email:a.val().email,loading:!1,uid:t.uid}),console.log(a.val())})):this.props.history.push("/SignIn")}},{key:"updateStatelor1",value:function(e){this.setState({lor1:e}),console.log(this.state.lor1.value)}},{key:"updateStatelor2",value:function(e){this.setState({lor2:e}),console.log(this.state.lor2.value)}},{key:"updateStatelor3",value:function(e){this.setState({lor3:e}),console.log(this.state.lor3.value)}},{key:"updateStatelor4",value:function(e){this.setState({lor4:e}),console.log(this.state)}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.loading,n=[{value:"6",label:"Professor (or) Manager"},{value:"4",label:"Associate Professor (or) Team Leader"},{value:"2",label:"Assistant Professor (or) Co-Worker"}];return s.a.createElement("div",null,s.a.createElement("h1",null,"University Suggestor"),!a&&s.a.createElement("p",{className:"centered"},"Hello ",t,"!"),s.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Fill this Form"),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"name"},"First name"),s.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter your first name",value:this.state.first_name,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"name"},"Last name"),s.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter your last name",value:this.state.last_name,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"grade"},"College CGPA"),s.a.createElement("input",{type:"number",className:"form-control",pattern:"[0-9]*",name:"grade",placeholder:"Enter Score",value:this.state.grade,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"gre"},"GRE"),s.a.createElement("input",{type:"number",className:"form-control",pattern:"[0-9]*",name:"gre",placeholder:"Enter Score",value:this.state.gre,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"we"},"Work Experience (Months)"),s.a.createElement("input",{type:"number",className:"form-control",pattern:"[0-9]*",name:"we",placeholder:"Enter Months",value:this.state.we,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"toefl"},"TOEFL/IELTS Score"),s.a.createElement("input",{type:"number",className:"form-control",pattern:"[0-9]*",name:"toefl",placeholder:"Enter Score",value:this.state.toefl,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"lor1"},"Designation of your LOR Provider 1"),s.a.createElement("div",null,s.a.createElement(le.a,{name:"lor1",defaultValue:{label:"None",value:"-1"},value:this.state.lor1,options:n,onChange:this.updateStatelor1.bind(this)}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"lor2"},"Designation of your LOR Provider 2"),s.a.createElement("div",null,s.a.createElement(le.a,{name:"lor2",defaultValue:{label:"None",value:"-1"},value:this.state.lor2,options:n,onChange:this.updateStatelor2.bind(this)}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"lor3"},"Designation of your LOR Provider 3"),s.a.createElement("div",null,s.a.createElement(le.a,{name:"lor3",defaultValue:{label:"None",value:"-1"},value:this.state.lor3,options:n,onChange:this.updateStatelor3.bind(this)}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"lor4"},"Designation of your LOR Provider 4"),s.a.createElement("div",null,s.a.createElement(le.a,{name:"lor4",defaultValue:{label:"None",value:"-1"},value:this.state.lor4,options:n,onChange:this.updateStatelor4.bind(this)}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"resume"},"Upload Resume"),s.a.createElement("input",{type:"file",id:"file-id",name:"resume",className:"form-control",onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"sop"},"Upload SOP"),s.a.createElement("input",{type:"file",id:"file-id2",name:"sop",className:"form-control"})),s.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Submit!")),s.a.createElement("br",null),s.a.createElement("p",null,"IMPORTANT : Make sure to fill all the fields or else confidence score of your univesity suggestion may reduce !!!!"),s.a.createElement("p",null,"NOTE : This page is only accessible by signed in users."))}}]),a}(l.Component),ue=oe((function(e){return!!e}))(ce),me=function(e,t){return function(){return Object(B.a)({},e,t)}},de={email:"",error:null,showingAlert:!1},he=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state=Object(R.a)({},de),e.onSubmit=function(t){var a=e.state.email;r.doPasswordReset(a).then((function(){e.setState(Object(R.a)({},de))})).catch((function(t){e.setState(me("error",t)),e.timer()})),t.preventDefault(),setTimeout((function(){window.location.reload(1)}),3e3)},e.timer=function(){e.setState({showingAlert:!0}),setTimeout((function(){e.setState({showingAlert:!1})}),4e3)},e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.loggedUser;console.log(t.uid),t&&o.doGetAnUnser(t.uid).then((function(t){e.setState({email:t.val().email}),console.log(t.val())}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.showingAlert;return s.a.createElement("div",null,a&&s.a.createElement(d.a,{color:"danger",onLoad:this.timer},t.message),s.a.createElement("br",null),s.a.createElement("h5",null,"Reset Link will be sent to your Email"),s.a.createElement("br",null),s.a.createElement(d.d,{onSubmit:this.onSubmit},s.a.createElement("div",{className:"text-center"},s.a.createElement(d.b,{type:"submit"},"Reset My Password"))))}}]),a}(l.Component),fe=oe((function(e){return!!e&&"facebook.com"!==e.providerData[0].providerId}))(he),pe=function(e){Object(W.a)(a,e);var t=Object(G.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Under Construction"),s.a.createElement("div",null,s.a.createElement("h4",null,"Thank you for your patience!!!!")))}}]),a}(l.Component),ge=function(e){return function(t){Object(W.a)(r,t);var a=Object(G.a)(r);function r(){var e;Object(_.a)(this,r);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={authUser:null},e}return Object(M.a)(r,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"render",value:function(){var t=this.state.authUser;return console.log("withAuthentication file authUser",t),s.a.createElement(F.Provider,{value:t},s.a.createElement(e,this.props))}}]),r}(s.a.Component)}((function(){return s.a.createElement(u.a,null,s.a.createElement(d.c,null,s.a.createElement(T,null),s.a.createElement(m.a,{exact:!0,path:"/",component:D}),s.a.createElement(m.a,{exact:!0,path:"/signup",component:X}),s.a.createElement(m.a,{exact:!0,path:"/signin",component:re}),s.a.createElement(m.a,{exact:!0,path:"/predict",component:pe}),s.a.createElement(m.a,{exact:!0,path:"/pw-forget",component:ee}),s.a.createElement(m.a,{exact:!0,path:h,component:ue}),s.a.createElement(m.a,{exact:!0,path:"/account",component:fe})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a(195)}},[[98,1,2]]]);
//# sourceMappingURL=main.2fa7c306.chunk.js.map