"use strict";(self.webpackChunkclinica=self.webpackChunkclinica||[]).push([[890],{183:function(r,n,o){o.d(n,{Z:function(){return i}});var a=o(7462),t=o(6897);function i(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;return(0,t.Z)(r)?n:(0,a.Z)({},n,{ownerState:(0,a.Z)({},n.ownerState,o)})}},5890:function(r,n,o){o.d(n,{Z:function(){return P}});var a=o(4942),t=o(3366),i=o(7462),e=o(2791),c=o(8182),l=function(r){var n=e.useRef({});return e.useEffect((function(){n.current=r})),n.current},s=o(208),g=o(6897),v=o(5159);function d(r){return(0,v.Z)("MuiBadge",r)}var h=(0,s.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular","invisible"]),u=o(7312),f=o(767),m=o(183),p=o(184),b=["anchorOrigin","classes","badgeContent","component","children","className","components","componentsProps","invisible","max","overlap","showZero","variant","theme"],Z=e.forwardRef((function(r,n){var o=r.anchorOrigin,a=void 0===o?{vertical:"top",horizontal:"right"}:o,e=r.classes,s=r.badgeContent,g=r.component,v=r.children,h=r.className,Z=r.components,O=void 0===Z?{}:Z,R=r.componentsProps,w=void 0===R?{}:R,x=r.invisible,C=r.max,S=void 0===C?99:C,z=r.overlap,B=void 0===z?"rectangular":z,y=r.showZero,P=void 0!==y&&y,M=r.variant,k=void 0===M?"standard":M,N=(0,t.Z)(r,b),T=l({anchorOrigin:a,badgeContent:s,max:S,overlap:B,variant:k}),W=x;null==x&&(0===s&&!P||null==s&&"dot"!==k)&&(W=!0);var I=W?T:r,j=I.anchorOrigin,L=void 0===j?a:j,E=I.badgeContent,F=I.max,A=void 0===F?S:F,D=I.overlap,H=void 0===D?B:D,q=I.variant,G=void 0===q?k:q,J=(0,i.Z)({},r,{anchorOrigin:L,badgeContent:E,classes:e,invisible:W,max:A,overlap:H,variant:G}),K="";"dot"!==G&&(K=E>A?"".concat(A,"+"):E);var Q=function(r){var n=r.variant,o=r.anchorOrigin,a=r.overlap,t=r.invisible,i=r.classes,e={root:["root"],badge:["badge",n,"anchorOrigin".concat((0,u.Z)(o.vertical)).concat((0,u.Z)(o.horizontal)).concat((0,u.Z)(a)),t&&"invisible"]};return(0,f.Z)(e,d,i)}(J),U=g||O.Root||"span",V=(0,m.Z)(U,(0,i.Z)({},N,w.root),J),X=O.Badge||"span",Y=(0,m.Z)(X,w.badge,J);return(0,p.jsxs)(U,(0,i.Z)({},V,{ref:n},N,{className:(0,c.Z)(Q.root,V.className,h),children:[v,(0,p.jsx)(X,(0,i.Z)({},Y,{className:(0,c.Z)(Q.badge,Y.className),children:K}))]}))})),O=Z,R=o(7630),w=o(3736),x=o(4036),C=["component","components","componentsProps","color","invisible","badgeContent","showZero","variant"],S=(0,i.Z)({},h,(0,s.Z)("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning"])),z=(0,R.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(r,n){return n.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),B=(0,R.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(r,n){var o=r.ownerState;return[n.badge,n[o.variant],n["anchorOrigin".concat((0,x.Z)(o.anchorOrigin.vertical)).concat((0,x.Z)(o.anchorOrigin.horizontal)).concat((0,x.Z)(o.overlap))],"default"!==o.color&&n["color".concat((0,x.Z)(o.color))],o.invisible&&n.invisible]}})((function(r){var n=r.theme,o=r.ownerState;return(0,i.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:n.typography.fontFamily,fontWeight:n.typography.fontWeightMedium,fontSize:n.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.enteringScreen})},"default"!==o.color&&{backgroundColor:n.palette[o.color].main,color:n.palette[o.color].contrastText},"dot"===o.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,a.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(S.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,a.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(S.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,a.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(S.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,a.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(S.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,a.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(S.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,a.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(S.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,a.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(S.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,a.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(S.invisible),{transform:"scale(0) translate(-50%, 50%)"}),o.invisible&&{transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.leavingScreen})})})),y=function(r){return!r||!(0,g.Z)(r)},P=e.forwardRef((function(r,n){var o,a,e=(0,w.Z)({props:r,name:"MuiBadge"}),s=e.component,g=void 0===s?"span":s,v=e.components,h=void 0===v?{}:v,u=e.componentsProps,f=void 0===u?{}:u,m=e.color,b=void 0===m?"default":m,Z=e.invisible,R=e.badgeContent,S=e.showZero,P=void 0!==S&&S,M=e.variant,k=void 0===M?"standard":M,N=(0,t.Z)(e,C),T=l({color:b}),W=Z;null==Z&&(0===R&&!P||null==R&&"dot"!==k)&&(W=!0);var I=(W?T:e).color,j=void 0===I?b:I,L=function(r){var n=r.color,o=r.classes,a=void 0===o?{}:o;return(0,i.Z)({},a,{badge:(0,c.Z)(a.badge,"default"!==n&&[d("color".concat((0,x.Z)(n))),a["color".concat((0,x.Z)(n))]])})}((0,i.Z)({},e,{invisible:W,color:j}));return(0,p.jsx)(O,(0,i.Z)({invisible:Z,badgeContent:R,showZero:P,variant:k},N,{components:(0,i.Z)({Root:z,Badge:B},h),componentsProps:{root:(0,i.Z)({},f.root,y(h.Root)&&{as:g,ownerState:(0,i.Z)({},null==(o=f.root)?void 0:o.ownerState,{color:j})}),badge:(0,i.Z)({},f.badge,y(h.Badge)&&{ownerState:(0,i.Z)({},null==(a=f.badge)?void 0:a.ownerState,{color:j})})},classes:L,ref:n}))}))}}]);
//# sourceMappingURL=890.4b04bc2d.chunk.js.map