(this.webpackJsonpsabicd=this.webpackJsonpsabicd||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"title":"Software Engineer","techsUsed":["react-native","react","aws","k8s","nodejs","docker","terraform","redux-saga"],"company":"JayStack"}')},28:function(e){e.exports=JSON.parse('[{"name":"LinkedIn","link":"https://linkedin.com/in/sabicdaniel"},{"name":"GitHub","link":"https://github.com/sabicd"},{"name":"Facebook","link":"https://facebook.com/sabicdaniel"}]')},39:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=(n(39),n(89)),l=n(29),s=n(87),m=function(e){var t=e.name,n=e.link,a=l[t];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{href:n,title:t},r.a.createElement(a,null)))},u=n(28),d=function(){return r.a.createElement(r.a.Fragment,null,u.map((function(e){return r.a.createElement(m,{name:e.name,link:e.link,key:e.name})})))},g=n(20),f=n(2),b=n(90),p=n(23),h=n(88),k=n(17),E=p.techsUsed,y=Object(f.a)(p,["techsUsed"]),j=Object.keys(y).map((function(e){return"".concat(e,": ").concat(y[e])})),v={type:"spring",damping:10,stiffness:150},w=Object(h.a)((function(e){return{techChip:{margin:e.spacing(.5),justifyContent:"center"},jobChip:{color:"white",backgroundColor:"#bdbdbd",margin:e.spacing(.5)}}})),C=function(){var e=w(),t=Object(a.useState)(j),n=Object(g.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){setTimeout((function(){return c(i.map((function(e){return[Math.random(),e]})).sort((function(e,t){return e[0]-t[0]})).map((function(e){return e[1]})))}),3e3)}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{container:!0,direction:"column",alignItems:"center",alignContent:"center",key:"jobTitleGrid",justify:"center"},r.a.createElement(o.a,{item:!0,container:!0,justify:"center",key:"jobTitleContentHolder"},i.map((function(t){return r.a.createElement(k.motion.div,{layoutTransition:v,key:t},r.a.createElement(b.a,{key:t,label:t,className:e.jobChip}))}))),r.a.createElement(o.a,{item:!0,container:!0,alignContent:"center",alignItems:"center",key:"techs",justify:"center"},E.map((function(t){return r.a.createElement(k.motion.div,{height:35,dragConstraints:{left:0,right:0,top:0,bottom:0},drag:!0,width:t.length<5?35:45+t.length,whileHover:{scale:.95},background:null,dragTransition:{bounceStiffness:300,bounceDamping:10},key:t},r.a.createElement(b.a,{size:"small",key:t,label:t,clickable:!0,className:e.techChip}))})))))},O=n.p+"static/media/ProfilePicture.6f4ce8fd.jpeg";var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(o.a,{item:!0},r.a.createElement(k.Frame,{size:100,radius:100,position:"relative",drag:!0,dragPropagation:!0,dragConstraints:{top:0,bottom:0,left:-50,right:50},dragElastic:.6,dragTransition:{bounceStiffness:300,bounceDamping:10},background:null,image:O})),r.a.createElement(o.a,{item:!0},r.a.createElement(C,null)),r.a.createElement(o.a,{container:!0,justify:"center",alignContent:"center",alignItems:"center"},r.a.createElement(d,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.8980fc14.chunk.js.map