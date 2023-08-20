"use strict";(self.webpackChunkspotify=self.webpackChunkspotify||[]).push([[257],{125:(t,e,n)=>{n.r(e);var o=n(294),i=n(745),a=n(655),r=n(250),s=n(152);const c={logo:n.p+"95b5553956d5ae3771a3.svg",segment:n.p+"bec2d0745a890ca5407c.svg",web:n.p+"73af8a55c2e83b744c09.svg",webResponsive:n.p+"242db4e2c4694e62b528.svg",dashboard:n.p+"ec67df2425a9aefade79.svg",assessment:n.p+"77c08952afe968dcd94b.svg",quiz:n.p+"464b014fc6eecc203c05.svg",stack:n.p+"ad2e4cb466c5eb0e9691.svg",users:n.p+"c4d842f3e0b40cd0eac7.svg",globe:n.p+"47c3e5dc73c1444472fd.svg",attachementWithBg:n.p+"47c25fdd9fe18ad26ff5.svg",add:n.p+"500187c519209eb7e788.svg",bag:n.p+"fd03a2872cd8b1924971.svg",bullets:n.p+"0b9d0d6db2c213993735.svg",link:n.p+"176cbd10ae32a8988f82.svg",cross:n.p+"f5bdd070434efbe94926.svg",search:n.p+"52d06a1e53d6ccf8464f.svg",chart:n.p+"32455e28ec81c48a5f8e.svg",filter:n.p+"f961ce6ee0c2e3e946c1.svg",singleAvatar:n.p+"aa630e826c1896ab9cdf.svg",multipleAvatar:n.p+"6c9ebe564bd2a800a73f.svg",calender:n.p+"85dd380996bc2f69a141.svg",schedule:n.p+"28f035b8f887bb7131d2.svg",admin:n.p+"299fbaf09f6a6b3e04dd.svg"};function l(t){var e=(0,o.useState)(),n=(0,s.Z)(e,2),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=window.matchMedia(t);a(e.matches);var n=function(t){return a(t.matches)};return null!=e&&e.addEventListener?e.addEventListener("change",n):e.addListener(n),function(){null!=e&&e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}}),[t]),i}function d(){var t=l("(max-width: 480px)"),e=l("(min-width: 481px) and (max-width: 576px)"),n=l("(min-width: 577px) and (max-width: 768px)"),o=l("(min-width: 769px) and (max-width: 991px)"),i=l("(min-width: 992px) and (max-width:1440px)"),a=l("(min-width: 1440px)");return{xxs:t,xs:e,sm:n,md:o,lg:i,xl:a,isMobile:t||e||n,isTablet:o,isWeb:i||a}}var u=n(572);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=150,g=n(298),b=function(t){var e=t.withBackdrop,n=t.customStyles,i=t.header,a=t.body,r=t.footer,c=t.anchor,l=t.showClose,d=t.open,u=t.width,p=t.iconSize,b=t.icon,h=t.height,v=t.onClose,x=t.defaultOpen,y=(0,o.useMemo)((function(){var t={transition:"350ms",boxShadow:"rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px",display:"flex",width:"50%",flexDirection:"column",height:"100%",position:"fixed",color:"black",top:0,backgroundColor:"#ffffff",zIndex:8},e={transition:"350ms",boxShadow:"rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px",position:"fixed",color:"#000000",width:"100%",zIndex:8,backgroundColor:"#ffffff"},n={transition:"all 350ms cubic-bezier(0.4, 0, 0.2, 1)",height:"100vh",width:"100%",top:0,left:0};return{varientPersistent:{position:"fixed",height:"100vh",top:0,left:0,backgroundColor:"#ffffff",zIndex:7,opacity:0},container:f(f({},n),{},{position:"fixed",backgroundColor:"#ffffff",opacity:0}),containerAnimate:f(f({},n),{},{position:"fixed",zIndex:7,backgroundColor:"rgba(0,0,0,.5)",opacity:1}),leftWrappper:f(f({},t),{},{transform:"translateX(-120%)",left:0}),rightWrapper:f(f({},t),{},{transform:"translateX(120%)",right:0}),topWrapper:f(f({},e),{},{top:0,left:0,transform:"translateY(-140%)"}),bottomWrapper:f(f({},e),{},{bottom:0,left:0,transform:"translateY(140%)"}),leftWrapperAnimation:f(f({},t),{},{transform:"translateX(0)",left:0}),rightWrapperAnimation:f(f({},t),{},{transform:"translateX(0)",right:0}),topWrapperAnimation:f(f({},e),{},{top:0,transform:"translateY(0)"}),bottomWrapperAnimation:f(f({},e),{},{bottom:0,transform:"translateY(0)"}),header:{height:"auto"},body:{flex:1,height:"auto",display:"flex",justifyContent:"center"},footer:{left:0,bottom:0,textAlign:"center",width:"100%"},closeBtn:{position:"absolute",right:0,top:0}}}),[]),Z=function(t,e,n){var i=(0,o.useState)(t),a=(0,s.Z)(i,2),r=a[0],c=a[1],l=(0,o.useState)(!1),d=(0,s.Z)(l,2),u=d[0],p=d[1],f=(0,o.useState)(e),g=(0,s.Z)(f,2),b=g[0],h=g[1],v=(0,o.useRef)(null);(0,o.useEffect)((function(){b&&void 0!==b||(t?(c(t),setTimeout((function(){p(!u)}),150)):setTimeout((function(){c(t)}),m),p(!1))}),[t,b]),(0,o.useEffect)((function(){e?(h(e),c(!0),setTimeout((function(){p(!u)}),150)):setTimeout((function(){h(!1)}),m)}),[e]);var x=function(t){var e;null!=v&&null!==(e=v.current)&&void 0!==e&&e.contains(null==t?void 0:t.target)||setTimeout((function(){h(!1),p(!1),n&&n()}),m)};return(0,o.useEffect)((function(){return v.current?document.addEventListener("click",x):document.removeEventListener("click",x),function(){document.removeEventListener("click",x)}}),[v,x]),(0,o.useEffect)((function(){b||u||setTimeout((function(){c(!1),p(!1),n&&n()}),m)}),[u,b]),(0,o.useEffect)((function(){e?(c(!0),setTimeout((function(){p(!0)}),150)):p(!1)}),[e]),{animate:u,isOpen:r,closeDrawer:function(){p(!1)},setisOpen:c,containerRef:v,handleOutsideClick:x}}(d,x,v),C=Z.containerRef,w=Z.animate,S=Z.closeDrawer,A=Z.isOpen,D=(0,o.useMemo)((function(){return(0,g.tZ)(o.Fragment,null,i&&(0,g.tZ)("div",{css:[y.header,y.body,null==n?void 0:n.header,"","","",""]},i),a&&(0,g.tZ)("div",{css:[y.body,null==n?void 0:n.body,"","","",""]},a),r&&(0,g.tZ)("div",{css:[y.footer,null==n?void 0:n.footer,"","","",""]},r))}),[i,a,r,l,b,p,S,n,y]),O=(0,o.useMemo)((function(){switch(c){case"bottom":return{defaultStyles:y.bottomWrapper,animationStyles:y.bottomWrapperAnimation};case"left":return{defaultStyles:y.leftWrappper,animationStyles:y.leftWrapperAnimation};case"right":return{defaultStyles:y.rightWrapper,animationStyles:y.rightWrapperAnimation};case"top":return{defaultStyles:y.topWrapper,animationStyles:y.topWrapperAnimation};default:return{}}}),[y,c]),k=(0,o.useMemo)((function(){return e?y.containerAnimate:y.varientPersistent}),[y,e]),E=O.animationStyles,M=void 0===E?{}:E,W=O.defaultStyles,B=void 0===W?{}:W;return(0,g.tZ)(o.Fragment,null,A&&(0,g.tZ)(o.Fragment,null,(0,g.tZ)("div",{css:[y.container,w&&y.containerAnimate,w&&k,"","","",""]}),(0,g.tZ)("div",{css:[B,w&&M,{width:u,height:h},"","","",""],ref:C},D)))};b.defaultProps={anchor:"right",withBackdrop:!0,width:"50%",iconSize:"m",icon:"closeFilled",open:!0};const h=b;var v=[{text:"Dashboard",icon:c.dashboard,isSelected:!1,alt:"dashboard"},{text:"Assessment",icon:c.assessment,isSelected:!0,alt:"assessment"},{text:"My Library",icon:c.quiz,isSelected:!1,alt:"library"}],x={name:"1x3sxtc",styles:"width:20px"},y={name:"1x3sxtc",styles:"width:20px"};const Z=function(){var t=function(){var t=d().isMobile;return(0,o.useMemo)((function(){return{lnContainer:{width:t?"100%":"",listStyle:"none",padding:t?"40px 20px":"16px 20px 20px 20px",height:"100vh",background:"#ffffff"},navItemText:{fontSize:t?14:12,marginTop:t?0:6,marginLeft:t?8:0,color:"#1C4980"},navItem:{display:"flex",alignItems:"center",flexDirection:t?"row":"column",marginBottom:10},navSelectedItem:{background:"#E5F1FC",padding:10,border:"1px solid #0073E6",borderRadius:8},navContainer:{padding:"10px 0"},adNav:{borderTop:"1px dashed #BACBD5",margin:"16px 0",display:"flex",flexDirection:t?"row":"column",alignItems:"center",justifyContent:t?"space-between":"center",padding:"10px 0"},adminBadge:{padding:"6px 8px",borderRadius:22,border:"1px solid #D63500",display:"inline-flex",justifyContent:"center",alignItems:"center",marginTop:16,marginBottom:16,background:"#FBEBEA"},adminText:{fontSize:10,fontWeight:500,color:"#D63500"}}}),[t])}(),e=d().isMobile,n=(0,g.tZ)("div",{css:t.adminBadge},(0,g.tZ)("p",{css:t.adminText},"Admin"));return(0,g.tZ)(o.Fragment,null,(0,g.tZ)("ul",{css:t.lnContainer},v.map((function(e,n){return(0,g.tZ)("li",{key:n,css:t.navContainer},(0,g.tZ)("div",{css:[t.navItem,(null==e?void 0:e.isSelected)&&t.navSelectedItem,"","","",""]},(0,g.tZ)("img",{src:e.icon,css:x,alt:e.alt}),(0,g.tZ)("p",{css:t.navItemText},e.text)))})),(0,g.tZ)("li",{css:t.adNav},!e&&n,(0,g.tZ)("div",{css:t.navItem},(0,g.tZ)("img",{src:c.admin,css:y,alt:"admin"}),(0,g.tZ)("p",{css:t.navItemText},"Round Status")),e&&n)))},C=function(){var t=(0,o.useState)(!1),e=(0,s.Z)(t,2),n=e[0],i=e[1],a={mhContainer:{padding:"0 15px",display:"flex",justifyContent:" space-between",height:50},mhWrapper:{display:"flex",alignItems:"center"},mhHeading:{fontSize:16,fontWeight:600,color:"#1C4980",marginLeft:10},mhBtn:{borderRadius:"50%",border:"none",background:"#F2F8FE",padding:2,display:"flex"},mhIcon:{width:30,height:30},drawerTitle:{fontSize:14,fontWeight:500,color:"#1C4980"},dtContainer:{marginTop:40,padding:"0 20px",width:"100%",justifyContent:"space-between",display:"flex",alignItems:"center"}},r=function(){i(!1)},l=(0,g.tZ)("div",{css:a.dtContainer},(0,g.tZ)("p",{css:a.drawerTitle},"Menu"),(0,g.tZ)("img",{onClick:r,src:c.cross,alt:"cross"}));return(0,g.tZ)(o.Fragment,null,(0,g.tZ)("header",{css:a.mhContainer},(0,g.tZ)("div",{css:a.mhWrapper},(0,g.tZ)("button",{css:a.mhBtn,onClick:function(){i(!0)}},(0,g.tZ)("img",{css:a.mhIcon,src:c.segment,alt:"hamburger menu"})),(0,g.tZ)("p",{css:a.mhHeading},"Assessment")),(0,g.tZ)("img",{src:c.web,alt:"desktop"})),(0,g.tZ)(h,{open:n,header:l,showClose:!0,body:(0,g.tZ)(Z,null),onClose:r,anchor:"left",width:"80%"}))},w=function(){var t=(0,o.useMemo)((function(){return{hContainer:{background:"white",height:70,padding:"4px 20px 4px 20px",display:"flex",alignItems:"center",borderBottom:"0.5px solid #DADCE0",justifyContent:"space-between",marginBottom:20},hHeading:{fontSize:20,fontWeight:600,color:"#1C4980"},hSubHeading:{fontSize:14,color:"#0073E6",fontWeight:600},hSubHeadingContainer:{},tabContainer:{display:"flex",alignItems:"center"},separator:{height:46,margin:"0 16px",border:"0.5px solid #DADCE0"}}}),[]);return d().isMobile?(0,g.tZ)(C,null):(0,g.tZ)("header",{css:t.hContainer},(0,g.tZ)("div",{css:t.tabContainer},(0,g.tZ)("p",{css:t.hHeading},"Assessment"),(0,g.tZ)("div",{css:t.separator}),(0,g.tZ)("div",{css:t.hSubHeadingContainer},(0,g.tZ)("p",{css:t.hSubHeading},"My Assessment"))),(0,g.tZ)("div",null,(0,g.tZ)("img",{src:c.webResponsive,alt:"mobile",onClick:function(){console.log("===================================="),console.log("here",document.getElementsByTagName("meta").viewport.content),console.log("===================================="),"width=1440px"===document.getElementsByTagName("meta").viewport.content?document.getElementsByTagName("meta").viewport.content="width=400px":document.getElementsByTagName("meta").viewport.content="width=1440px",console.log("check",document.getElementsByTagName("meta").viewport.content)}})))},S=function(t){var e=t.count,n=t.description,o={dCount:{fontSize:20,fontWeight:700,color:"#1C4980"},dDetails:{fontSize:10,fontWeight:500,color:"#1C4980"}};return(0,g.tZ)("div",null,(0,g.tZ)("p",{css:o.dCount},e),(0,g.tZ)("p",{css:o.dDetails},n))};var A={name:"1mps4wf",styles:"&:last-child{border:none;}display:flex"};const D=function(t){var e=t.heading,n=t.icon,i=t.data,a={ocContainer:{padding:"16px 20px"},ocHeading:{fontSize:14,fontWeight:600,marginBottom:16,color:"#1C4980"},ocData:{fontSize:20,fontWeight:700},ocWrapper:{display:"flex",alignItems:"center"},icon:{marginRight:20},separator:{border:"0.5px solid #DADCE0",margin:"0 20px","&:last-child":{border:"none"}}};return(0,g.tZ)("div",{css:a.ocContainer},(0,g.tZ)("p",{css:a.ocHeading},e),(0,g.tZ)("div",{css:a.ocWrapper},(0,g.tZ)("img",{css:a.icon,src:n,alt:"detail"}),(0,g.tZ)("div",{css:A},i.map((function(t){return(0,g.tZ)(o.Fragment,null,(0,g.tZ)(S,{count:t.count,description:t.description}),(0,g.tZ)("div",{css:a.separator}))})))))};var O=[{heading:"Total Assessment",icon:c.stack,data:[{count:"34",description:""}]},{heading:"Candidates",icon:c.users,data:[{count:"11,145",description:"Total Candidate"},{count:"1,14",description:"Who Attempted"}]},{heading:"Candidates Source",icon:c.globe,data:[{count:"11,000",description:"E-mail"},{count:"145",description:"Social Share"},{count:"145",description:"Unique Link"}]},{heading:"Total Purpose",icon:c.attachementWithBg,data:[{count:11,description:""}]}];function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const M=function(){var t,e=(t=d().isMobile,(0,o.useMemo)((function(){var e={fontSize:14,fontWeight:600},n={width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0"};return{otContainer:{display:"flex",height:50,justifyContent:"space-around",margin:t?"0 -20px":""},otSelected:E(E({},n),{},{borderBottom:"2px solid #0073E6"}),otDeafult:E(E({},n),{},{borderBottom:"2px solid #F6F8FA"}),otSelectedText:E(E({},e),{},{color:"#0073E6"}),otText:E(E({},e),{},{color:"#3E6493"})}}),[t]));return(0,g.tZ)("div",{css:e.otContainer},(0,g.tZ)("div",{css:e.otSelected},(0,g.tZ)("p",{css:e.otSelectedText},"My Assessment")),(0,g.tZ)("div",{css:e.otDeafult},(0,g.tZ)("p",{css:e.otText},"Unstop Assessment")))},W=function(){var t={aoHeading:{fontSize:18,fontWeight:500,marginBottom:16,color:"#1C4890"},aoDetails:{border:"1px solid #DADCE0",borderRadius:12,display:"flex",overflow:"auto","::-webkit-scrollbar":{display:"none"}},separator:{border:"0.5px solid #DADCE0","&:last-child":{border:"none"}}};return d().isMobile?(0,g.tZ)(M,null):(0,g.tZ)("div",null,(0,g.tZ)("p",{css:t.aoHeading},"Assessment Overview"),(0,g.tZ)("div",{css:t.aoDetails},O.map((function(e){return(0,g.tZ)(o.Fragment,null,(0,g.tZ)(D,{heading:e.heading,icon:e.icon,data:e.data}),(0,g.tZ)("div",{css:t.separator}))}))))};var B={name:"y3sllt",styles:"display:flex;margin-bottom:16px;align-items:center;margin-top:2px"},I={name:"zjik7",styles:"display:flex"};const T=function(t){var e=t.title,n=t.icon,i=t.description,a=t.date,r=t.duration,s=t.questions,l=t.avatar,u=function(){var t=d().isMobile;return(0,o.useMemo)((function(){return{acContainer:{padding:t?14:16,display:t?"flex":"inline-flex",border:"1px solid #DADCE0",borderRadius:12,flexDirection:"column",width:t?"":388,marginRight:t?0:30,marginBottom:t?15:0,"&:last-child":{marginRight:0}},acHeader:{display:"flex",justifyContent:"space-between",alignItems:"ceneter"},sectionOne:{borderBottom:"1px dashed #DADCE0"},sectionTwo:{marginTop:16,display:"flex",justifyContent:"space-between"},acDetailsMobile:{display:"flex"},acIcon:{marginRight:t?10:0},acTitle:{fontSize:t?16:18,fontWeight:t?600:500,color:"#1C4980",marginTop:10},acDescription:{fontSize:t?12:14,fontWeight:t?500:600,color:"#1C4980"},separator:{margin:"0 10px",border:"1px solid #DADCE0",height:16},acDate:{fontSize:12,fontWeight:500,color:"#8DA4BF",marginLeft:6},acCount:{fontSize:14,fontWeight:600,color:"#1C4980"},acQnDtitle:{fontSize:12,fontWeight:500,color:"#1C4980"},acDuration:{marginRight:14},acQnD:{display:"flex"},acButton:{border:"1px solid #1C4980",borderRadius:50,padding:"2px 8px 2px 6px",display:"flex",alignItems:"center",background:"#ffffff",marginRight:10},acButtonText:{fontSize:14,fontWeight:500,color:"#1C4890"}}}),[t])}(),p=d().isMobile,f=(0,g.tZ)("div",null,(0,g.tZ)("p",{css:u.acTitle},e),(0,g.tZ)("div",{css:B},(0,g.tZ)("p",{css:u.acDescription},i),(0,g.tZ)("div",{css:u.separator}),(0,g.tZ)("img",{src:p?c.calender:c.schedule,alt:"calender"}),(0,g.tZ)("p",{css:u.acDate},a))),m=(0,g.tZ)("div",{css:u.sectionOne},(0,g.tZ)("div",{css:u.acHeader},(0,g.tZ)("div",{css:u.acDetailsMobile},(0,g.tZ)("img",{css:u.acIcon,src:n,alt:"bag"}),p&&f),(0,g.tZ)("img",{src:c.bullets,alt:"show more"})),!p&&f),b=(0,g.tZ)("div",{css:u.sectionTwo},(0,g.tZ)("div",{css:u.acQnD},(0,g.tZ)("div",{css:u.acDuration},(0,g.tZ)("p",{css:u.acCount},r),(0,g.tZ)("p",{css:u.acQnDtitle},"Duration")),(0,g.tZ)("div",null,(0,g.tZ)("p",{css:u.acCount},s),(0,g.tZ)("p",{css:u.acQnDtitle},"Questions"))),(0,g.tZ)("div",{css:I},(0,g.tZ)("button",{css:u.acButton},(0,g.tZ)("img",{src:c.link,alt:"share"}),(0,g.tZ)("p",{css:u.acButtonText},"Share")),(0,g.tZ)("img",{src:l,alt:"user avatar"})));return(0,g.tZ)("div",{css:u.acContainer},m,b)};var j=[{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.singleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar}],z=[{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.singleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar},{icon:c.bag,title:"Math Assessment",description:"Job",date:"20 Apr 2023",duration:"00",questions:"00",avatar:c.multipleAvatar}],R=[{icon:c.search,alt:"search"},{icon:c.filter,alt:"filter"},{icon:c.chart,alt:"chart"}];const F=function(t){var e,n=t.setOpen,i=(e=d().isMobile,(0,o.useMemo)((function(){return{naContainer:{padding:30,backgroundColor:"#F6F8FA",border:"1px dashed #DADCE0",borderRadius:12,display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:e?0:30,marginBottom:e?15:0,cursor:"pointer"},naAdd:{backgroundColor:"#ffffff",borderRadius:"50%",height:70,width:70,display:"flex",justifyContent:"center",alignItems:"center"},addIcon:{width:40,height:40},naText:{marginTop:10,fontSize:e?14:18,color:"#1C4980",marginBottom:12,fontWeight:e?600:500},naDescription:{fontSize:12,color:"#1C4980",maxWidth:e?"100%":328}}}),[e])),a=function(){n(!0)};return(0,g.tZ)("div",{tabIndex:0,role:"button",onKeyDown:function(t){"Enter"===t.key&&a()},css:i.naContainer,onClick:a},(0,g.tZ)("div",{css:i.naAdd},(0,g.tZ)("img",{css:i.addIcon,src:c.add,alt:"plus"})),(0,g.tZ)("p",{css:i.naText},"New Assessment"),(0,g.tZ)("p",{css:i.naDescription},"From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!"))},P=function(t){var e=t.setOpen,n=function(){var t=d().isMobile;return(0,o.useMemo)((function(){return{maHeading:{fontSize:t?16:18,fontWeight:t?600:500,marginTop:t?20:40,marginBottom:16,color:"#1C4890"},maMobileContainer:{display:"flex",justifyContent:"space-between",marginBottom:10},maIconsContainer:{display:"flex",justifyContent:"space-around",alignItems:"center"},maCardContainer:{display:t?"block":"flex",alignItems:"cenetr"},icon:{width:24,height:24,padding:4,marginLeft:16}}}),[t])}(),i=d().isMobile,a=(0,g.tZ)("p",{css:n.maHeading},"My Assessment"),r=(0,o.useMemo)((function(){return i?(0,g.tZ)("div",{css:n.maMobileContainer},a,(0,g.tZ)("div",{css:n.maIconsContainer},R.map((function(t){return(0,g.tZ)("img",{css:n.icon,src:t.icon,alt:t.alt})})))):(0,g.tZ)(o.Fragment,null,a)}),[i,n]),s=(0,o.useMemo)((function(){return(i?z:j).map((function(t){return(0,g.tZ)(T,{icon:t.icon,title:t.title,description:t.description,date:t.date,duration:t.duration,questions:t.questions,avatar:t.avatar})}))}),[i,z,j]);return(0,g.tZ)("div",null,r,(0,g.tZ)("div",{css:n.maCardContainer},(0,g.tZ)(F,{setOpen:e}),s))};var H=n(935);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N=function(t){var e=t.open,n=t.onClose,i=t.title,a=t.body,r=t.showClose,l=(t.disableOutsideClick,t.testId),u=t.backdrop,p=t.zIndexBackdrop,f=t.zIndexOverlay,m=t.customStyles,b=t.isMobile,h=d().isMobile,v=null!=b?b:h,x=function(t){var e,n=t.title,i=t.isMobExternal,a=t.isMobileRes,r=null!=i?i:a;return e=void 0!==i?i?"100%":591:a?"100%":591,(0,o.useMemo)((function(){return{backdrop:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"rgba(0, 0, 0, 0.75)",zIndex:9,opacity:0,transition:"all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},modal:{display:"flex",flexDirection:"column",position:"fixed",minWidth:r?"100%":591,top:r?"":"50%",bottom:r?"-100%":"",left:r?0:"50%",transform:r?"":"translate(-50%, -50%)",zIndex:10,opacity:0,transition:"all 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},animation:{opacity:1,bottom:r?0:""},animationBackdrop:{opacity:1},modalContent:{borderRadius:r?16:8,borderBottomRightRadius:r?0:8,borderBottomLeftRadius:r?0:8,boxShadow:"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",background:"#ffffff",padding:r?16:32},modalWeb:{maxWidth:"80%"},closeBtn:{cursor:"pointer",display:"flex",justifyContent:"flex-end"},titleWrapper:{display:"flex",alignItems:"center",position:"relative",justifyContent:n?"space-between":"flex-end",padding:30,borderBottom:"1px solid #DADCE0"},headerWrapper:{display:"flex",flex:1,alignItems:"center"},title:{fontSize:20,fontWeight:600,color:"#1C4890"},crossIcon:{cursor:"pointer"},body:{fontSize:14,fontWeight:400,flex:1,maxHeight:800,overflowY:"auto","&::-webkit-scrollbar":{display:"none"}}}}),[r,n,e])}({title:i,isMobExternal:b,isMobileRes:h}),y=function(t,e){var n=(0,o.useState)(!1),i=(0,s.Z)(n,2),a=i[0],r=i[1],c=(0,o.useState)(!1),l=(0,s.Z)(c,2),d=l[0],u=l[1],p=(0,o.useState)({id1:0,id2:0}),f=(0,s.Z)(p,2),m=f[0],g=f[1],b=(0,o.useRef)(null),h=(0,o.useRef)();(0,o.useEffect)((function(){if(e){r(!0);var t=setTimeout((function(){u(!0)}),50);g(q(q({},m),{},{id1:Number(t)}))}return function(){null!=m&&m.id1&&clearTimeout(null==m?void 0:m.id1)}}),[e]),(0,o.useEffect)((function(){if(!d){var e=setTimeout((function(){a&&(r(!1),t())}),300);g(q(q({},m),{},{id2:Number(e)}))}return function(){null!=m&&m.id2&&clearTimeout(null==m?void 0:m.id2)}}),[d]);var v=(0,o.useCallback)((function(t){b.current&&!b.current.contains(t.target)&&u(!1)}),[b]);(0,o.useEffect)((function(){if(e)return document.addEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}}),[e,b,v]);var x=function(){document.body.style.overflowY="auto",document.body.style.position="static",document.body.style.right="auto",document.body.style.left="auto"};return(0,o.useEffect)((function(){var t,n;e?(null===(t=b.current)||void 0===t||t.focus(),document.body.scrollHeight>document.documentElement.clientHeight&&(document.body.style.position="fixed",document.body.style.overflowY="scroll",document.body.style.right="0",document.body.style.left="0")):(null===(n=b.current)||void 0===n||n.blur(),x())}),[e]),(0,o.useEffect)((function(){return function(){x()}}),[]),{modalRef:b,timer:h,setAnimate:u,animate:d}}(n,e),Z=y.modalRef,C=y.setAnimate,w=y.animate;return void 0===v?(0,g.tZ)(o.Fragment,null):(0,g.tZ)(o.Fragment,null,e&&(0,g.tZ)(o.Fragment,null,(0,g.tZ)("div",{css:[e&&u?x.backdrop:null,w&&x.animationBackdrop,p?{zIndex:p}:null,null==m?void 0:m.backdrop,"","","",""],"data-testid":"".concat(l,"-backdrop")}),(0,g.tZ)("div",{css:[x.modal,w&&x.animation,!v&&x.modalWeb,null==m?void 0:m.modal,f?{zIndex:f}:null,"","","",""],"data-testid":"".concat(l,"-fade-transition")},(0,g.tZ)("div",{ref:Z,css:[x.modalContent,null==m?void 0:m.modalContent,"","","",""],"data-testid":"".concat(l,"-modal"),tabIndex:0,role:"button"},(i||r)&&(0,g.tZ)("div",{css:x.titleWrapper},i&&(0,g.tZ)("div",{css:x.headerWrapper},(0,g.tZ)("h4",{css:[x.title,null==m?void 0:m.title,"","","",""],"data-testid":"".concat(l,"-title")},i)),r&&(0,g.tZ)("img",{css:x.crossIcon,onClick:function(){C(!1)},src:c.cross})),a&&(0,g.tZ)("div",{css:[x.body,null==m?void 0:m.body,"","","",""],"data-testid":"".concat(l,"-body")},a)))))};N.defaultProps={showClose:!0,disableOutsideClick:!1,testId:"modal",backdrop:!0,allowAutoClose:!1,autoCloseTime:1e3,textAlign:"left"};const J=function(t){var e=(0,o.useMemo)((function(){return document.getElementById("modal")}),[]);return(0,g.tZ)(o.Fragment,null,e&&H.createPortal((0,g.tZ)(N,t),document.getElementById("modal")),!e&&(0,g.tZ)(N,t))},Q=function(){var t={afContainer:{display:"flex",flexDirection:"column"},afhContainer:{padding:30,borderBottom:"1px solid #DADCE0",display:"flex",justifyContent:"space-between",alignItems:"center"},afHeading:{fontSize:20,fontWeight:600,color:"#1C4890"},afLabel:{fontSize:16,fontWeight:500,color:"#1C4980",marginBottom:10},afInputContainer:{display:"flex",flexDirection:"column",padding:"20px 30px"},input:{padding:15,marginBottom:20,borderRadius:8,border:"1px solid #DADCE0"},afbtnContainer:{boxShadow:"0px -4px 50px 0px rgba(0, 0, 0, 0.09)",padding:"20px 30px"},afButton:{marginTop:20,padding:"10px 30px",backgroundColor:"#0073E6",borderRadius:8,border:"none",width:"100%","&:hover":{cursor:"pointer"}},afButtonText:{fontSize:14,fontWeight:600,color:"#ffffff"}};return(0,g.tZ)("form",{css:t.afContainer},(0,g.tZ)("div",{css:t.afInputContainer},(0,g.tZ)("label",{css:t.afLabel},"Name of assessment"),(0,g.tZ)("input",{css:t.input,placeholder:"Type Here"}),(0,g.tZ)("label",{css:t.afLabel},"Purpose of the test is"),(0,g.tZ)("input",{css:t.input,placeholder:"Select"}),(0,g.tZ)("label",{css:t.afLabel},"Description"),(0,g.tZ)("input",{css:t.input,placeholder:"Select"}),(0,g.tZ)("label",{css:t.afLabel},"Skills"),(0,g.tZ)("div",null),(0,g.tZ)("input",{css:t.input,placeholder:"Type Here"}),(0,g.tZ)("label",{css:t.afLabel},"Duration of assessment"),(0,g.tZ)("input",{css:t.input,placeholder:"HH:MM:SS"})),(0,g.tZ)("div",{css:t.afbtnContainer},(0,g.tZ)("button",{css:t.afButton},(0,g.tZ)("p",{css:t.afButtonText},"Save"))))};var Y=[{path:"/",element:(0,g.tZ)((function(){var t=(0,o.useState)(!1),e=(0,s.Z)(t,2),n=e[0],i=e[1],a=d().isMobile,r=function(){var t=d().isMobile;return(0,o.useMemo)((function(){return{container:{width:t?"100%":"87%",background:"#ffffff",height:"100%",borderRadius:12},wrapper:{padding:"0 20px 20px"}}}),[t])}();return(0,g.tZ)(o.Fragment,null,(0,g.tZ)("div",{css:r.container},(0,g.tZ)(w,null),(0,g.tZ)("div",{css:r.wrapper},(0,g.tZ)(W,null),(0,g.tZ)(P,{setOpen:i}))),(0,g.tZ)(J,{isMobile:!0,open:n,onClose:function(){i(!1)},showClose:!0,body:(0,g.tZ)(Q,null),title:"Create new assessment",customStyles:{modal:{minWidth:a?"100%":591,left:"50%",transform:"translateX(-50%)"},modalContent:{borderRadius:8,padding:0},body:{maxHeight:800}}}))}),null)}];const X=function(){return(0,r.V$)(Y)},K=function(){var t=d().isMobile;return(0,g.tZ)("main",{css:{display:"flex",gap:10,background:"#F6F8FA",border:"1px solid black"}},!t&&(0,g.tZ)(Z,null),(0,g.tZ)(X,null))};i.createRoot(document.getElementById("root")).render((0,g.tZ)(o.StrictMode,null,(0,g.tZ)((function(){return(0,g.tZ)(a.VK,null,(0,g.tZ)(g.xB,{styles:" * { margin: 0 }"}),(0,g.tZ)(K,null))}),null)))}}]);