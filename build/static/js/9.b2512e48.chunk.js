(self.webpackChunkclinica=self.webpackChunkclinica||[]).push([[9],{183:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7462),o=r(6897);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return(0,o.Z)(e)?t:(0,n.Z)({},t,{ownerState:(0,n.Z)({},t.ownerState,r)})}},1286:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a},2094:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=a},6445:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(4942),o=r(3366),i=r(7462),a=r(2791),l=r(8182),c=r(767),s=r(3736),u=r(7630),p=r(5159);function d(e){return(0,p.Z)("MuiContainer",e)}(0,r(208).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=r(4036),m=r(184),h=["className","component","disableGutters","fixed","maxWidth"],v=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,f.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),b=a.forwardRef((function(e,t){var r=(0,s.Z)({props:e,name:"MuiContainer"}),n=r.className,a=r.component,u=void 0===a?"div":a,p=r.disableGutters,b=void 0!==p&&p,g=r.fixed,y=void 0!==g&&g,w=r.maxWidth,Z=void 0===w?"lg":w,x=(0,o.Z)(r,h),S=(0,i.Z)({},r,{component:u,disableGutters:b,fixed:y,maxWidth:Z}),P=function(e){var t=e.classes,r=e.fixed,n=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,f.Z)(String(o))),r&&"fixed",n&&"disableGutters"]};return(0,c.Z)(i,d,t)}(S);return(0,m.jsx)(v,(0,i.Z)({as:u,ownerState:S,className:(0,l.Z)(P.root,n),ref:t},x))}))},5523:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(4942),o=r(3366),i=r(7462),a=r(2791),l=r(8182),c=r(767),s=r(2930),u=r(890),p=r(4036),d=r(7630),f=r(3736),m=r(5159);function h(e){return(0,m.Z)("MuiFormControlLabel",e)}var v=(0,r(208).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),b=r(184),g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],y=(0,d.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,n.Z)({},"& .".concat(v.label),t.label),t.root,t["labelPlacement".concat((0,p.Z)(r.labelPlacement))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)((0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(v.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,n.Z)({},"& .".concat(v.label),(0,n.Z)({},"&.".concat(v.disabled),{color:t.palette.text.disabled})))})),w=a.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiFormControlLabel"}),n=r.className,d=r.componentsProps,m=void 0===d?{}:d,v=r.control,w=r.disabled,Z=r.disableTypography,x=r.label,S=r.labelPlacement,P=void 0===S?"end":S,k=(0,o.Z)(r,g),T=(0,s.Z)(),R=w;"undefined"===typeof R&&"undefined"!==typeof v.props.disabled&&(R=v.props.disabled),"undefined"===typeof R&&T&&(R=T.disabled);var C={disabled:R};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof v.props[e]&&"undefined"!==typeof r[e]&&(C[e]=r[e])}));var M=(0,i.Z)({},r,{disabled:R,label:x,labelPlacement:P}),_=function(e){var t=e.classes,r=e.disabled,n=e.labelPlacement,o={root:["root",r&&"disabled","labelPlacement".concat((0,p.Z)(n))],label:["label",r&&"disabled"]};return(0,c.Z)(o,h,t)}(M);return(0,b.jsxs)(y,(0,i.Z)({className:(0,l.Z)(_.root,n),ownerState:M,ref:t},k,{children:[a.cloneElement(v,C),x.type===u.Z||Z?x:(0,b.jsx)(u.Z,(0,i.Z)({component:"span",className:_.label},m.typography,{children:x}))]}))}))},9012:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(3366),o=r(7462),i=r(2791),a=r(8182),l=r(767),c=r(7630),s=r(3736),u=r(5159);function p(e){return(0,u.Z)("MuiFormGroup",e)}(0,r(208).Z)("MuiFormGroup",["root","row"]);var d=r(184),f=["className","row"],m=(0,c.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.row&&t.row]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),h=i.forwardRef((function(e,t){var r=(0,s.Z)({props:e,name:"MuiFormGroup"}),i=r.className,c=r.row,u=void 0!==c&&c,h=(0,n.Z)(r,f),v=(0,o.Z)({},r,{row:u}),b=function(e){var t=e.classes,r={root:["root",e.row&&"row"]};return(0,l.Z)(r,p,t)}(v);return(0,d.jsx)(m,(0,o.Z)({className:(0,a.Z)(b.root,i),ownerState:v,ref:t},h))}))},9834:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(3366),o=r(7462),i=r(2791),a=r(8182),l=r(767),c=r(7630),s=r(3736),u=r(4036),p=r(5159);function d(e){return(0,p.Z)("MuiListSubheader",e)}(0,r(208).Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var f=r(184),m=["className","color","component","disableGutters","disableSticky","inset"],h=(0,c.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"default"!==r.color&&t["color".concat((0,u.Z)(r.color))],!r.disableGutters&&t.gutters,r.inset&&t.inset,!r.disableSticky&&t.sticky]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:t.palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},"primary"===r.color&&{color:t.palette.primary.main},"inherit"===r.color&&{color:"inherit"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.inset&&{paddingLeft:72},!r.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:t.palette.background.paper})})),v=i.forwardRef((function(e,t){var r=(0,s.Z)({props:e,name:"MuiListSubheader"}),i=r.className,c=r.color,p=void 0===c?"default":c,v=r.component,b=void 0===v?"li":v,g=r.disableGutters,y=void 0!==g&&g,w=r.disableSticky,Z=void 0!==w&&w,x=r.inset,S=void 0!==x&&x,P=(0,n.Z)(r,m),k=(0,o.Z)({},r,{color:p,component:b,disableGutters:y,disableSticky:Z,inset:S}),T=function(e){var t=e.classes,r=e.color,n=e.disableGutters,o=e.inset,i=e.disableSticky,a={root:["root","default"!==r&&"color".concat((0,u.Z)(r)),!n&&"gutters",o&&"inset",!i&&"sticky"]};return(0,l.Z)(a,d,t)}(k);return(0,f.jsx)(h,(0,o.Z)({as:b,className:(0,a.Z)(T.root,i),ref:t,ownerState:k},P))}))},8970:function(e,t,r){"use strict";var n=r(9439),o=r(7462),i=r(3366),a=r(2791),l=r(9012),c=r(2071),s=r(8744),u=r(8672),p=r(7384),d=r(184),f=["actions","children","defaultValue","name","onChange","value"],m=a.forwardRef((function(e,t){var r=e.actions,m=e.children,h=e.defaultValue,v=e.name,b=e.onChange,g=e.value,y=(0,i.Z)(e,f),w=a.useRef(null),Z=(0,s.Z)({controlled:g,default:h,name:"RadioGroup"}),x=(0,n.Z)(Z,2),S=x[0],P=x[1];a.useImperativeHandle(r,(function(){return{focus:function(){var e=w.current.querySelector("input:not(:disabled):checked");e||(e=w.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var k=(0,c.Z)(t,w),T=(0,p.Z)(v);return(0,d.jsx)(u.Z.Provider,{value:{name:T,onChange:function(e){P(e.target.value),b&&b(e,e.target.value)},value:S},children:(0,d.jsx)(l.Z,(0,o.Z)({role:"radiogroup",ref:k},y,{children:m}))})}));t.Z=m},8672:function(e,t,r){"use strict";var n=r(2791).createContext(void 0);t.Z=n},1419:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(4942),o=r(3366),i=r(7462),a=r(2791),l=r(767),c=r(2065),s=r(7278),u=r(3736),p=r(9201),d=r(184),f=(0,p.Z)((0,d.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m=(0,p.Z)((0,d.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),h=r(7630),v=(0,h.ZP)("span")({position:"relative",display:"flex"}),b=(0,h.ZP)(f,{skipSx:!0})({transform:"scale(1)"}),g=(0,h.ZP)(m,{skipSx:!0})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var y=function(e){var t=e.checked,r=void 0!==t&&t,n=e.classes,o=void 0===n?{}:n,a=e.fontSize,l=(0,i.Z)({},e,{checked:r});return(0,d.jsxs)(v,{className:o.root,ownerState:l,children:[(0,d.jsx)(b,{fontSize:a,className:o.background,ownerState:l}),(0,d.jsx)(g,{fontSize:a,className:o.dot,ownerState:l})]})},w=r(4036),Z=r(1260),x=r(8672);var S=r(5159);function P(e){return(0,S.Z)("MuiRadio",e)}var k=(0,r(208).Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),T=["checked","checkedIcon","color","icon","name","onChange","size"],R=(0,h.ZP)(s.Z,{shouldForwardProp:function(e){return(0,h.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,w.Z)(r.color))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({color:t.palette.text.secondary,"&:hover":{backgroundColor:(0,c.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(0,n.Z)({},"&.".concat(k.checked),{color:t.palette[r.color].main}),(0,n.Z)({},"&.".concat(k.disabled),{color:t.palette.action.disabled}))}));var C=(0,d.jsx)(y,{checked:!0}),M=(0,d.jsx)(y,{}),_=a.forwardRef((function(e,t){var r,n,c,s,p=(0,u.Z)({props:e,name:"MuiRadio"}),f=p.checked,m=p.checkedIcon,h=void 0===m?C:m,v=p.color,b=void 0===v?"primary":v,g=p.icon,y=void 0===g?M:g,S=p.name,k=p.onChange,_=p.size,O=void 0===_?"medium":_,j=(0,o.Z)(p,T),E=(0,i.Z)({},p,{color:b,size:O}),L=function(e){var t=e.classes,r=e.color,n={root:["root","color".concat((0,w.Z)(r))]};return(0,i.Z)({},t,(0,l.Z)(n,P,t))}(E),A=a.useContext(x.Z),W=f,I=(0,Z.Z)(k,A&&A.onChange),N=S;return A&&("undefined"===typeof W&&(c=A.value,W="object"===typeof(s=p.value)&&null!==s?c===s:String(c)===String(s)),"undefined"===typeof N&&(N=A.name)),(0,d.jsx)(R,(0,i.Z)({type:"radio",icon:a.cloneElement(y,{fontSize:null!=(r=M.props.fontSize)?r:O}),checkedIcon:a.cloneElement(h,{fontSize:null!=(n=C.props.fontSize)?n:O}),ownerState:E,classes:L,name:N,checked:W,onChange:I,ref:t},j))}))},68:function(e,t,r){"use strict";r.d(t,{Z:function(){return L}});var n=r(9439),o=r(4942),i=r(3366),a=r(7462),l=r(2791),c=r(8182),s=r(767),u=r(183),p=r(2065),d=r(7630),f=r(3967),m=r(3736),h=r(4036),v=r(3208),b=r(5892),g=r(9683),y=r(2071),w=r(7384),Z=r(3031),x=r(8744),S=r(5159);function P(e){return(0,S.Z)("MuiTooltip",e)}var k=(0,r(208).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),T=r(184),R=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var C=(0,d.ZP)(b.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var r=e.ownerState;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})((function(e){var t,r=e.theme,n=e.ownerState,i=e.open;return(0,a.Z)({zIndex:r.zIndex.tooltip,pointerEvents:"none"},!n.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},n.arrow&&(t={},(0,o.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(k.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,o.Z)(t,'&[data-popper-placement*="top"] .'.concat(k.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,o.Z)(t,'&[data-popper-placement*="right"] .'.concat(k.arrow),(0,a.Z)({},n.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,o.Z)(t,'&[data-popper-placement*="left"] .'.concat(k.arrow),(0,a.Z)({},n.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),M=(0,d.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var r=e.ownerState;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.Z)(r.placement.split("-")[0]))]]}})((function(e){var t,r,n=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:(0,p.Fq)(n.palette.grey[700],.92),borderRadius:n.shape.borderRadius,color:n.palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:"".concat((r=16/14,Math.round(1e5*r)/1e5),"em"),fontWeight:n.typography.fontWeightRegular},(t={},(0,o.Z)(t,".".concat(k.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,o.Z)(t,".".concat(k.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,o.Z)(t,".".concat(k.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,o.Z)(t,".".concat(k.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),_=(0,d.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,p.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),O=!1,j=null;function E(e,t){return function(r){t&&t(r),e(r)}}var L=l.forwardRef((function(e,t){var r,o,p,d,S,k,L=(0,m.Z)({props:e,name:"MuiTooltip"}),A=L.arrow,W=void 0!==A&&A,I=L.children,N=L.components,F=void 0===N?{}:N,D=L.componentsProps,z=void 0===D?{}:D,G=L.describeChild,q=void 0!==G&&G,B=L.disableFocusListener,H=void 0!==B&&B,V=L.disableHoverListener,U=void 0!==V&&V,X=L.disableInteractive,Y=void 0!==X&&X,J=L.disableTouchListener,K=void 0!==J&&J,Q=L.enterDelay,$=void 0===Q?100:Q,ee=L.enterNextDelay,te=void 0===ee?0:ee,re=L.enterTouchDelay,ne=void 0===re?700:re,oe=L.followCursor,ie=void 0!==oe&&oe,ae=L.id,le=L.leaveDelay,ce=void 0===le?0:le,se=L.leaveTouchDelay,ue=void 0===se?1500:se,pe=L.onClose,de=L.onOpen,fe=L.open,me=L.placement,he=void 0===me?"bottom":me,ve=L.PopperComponent,be=L.PopperProps,ge=void 0===be?{}:be,ye=L.title,we=L.TransitionComponent,Ze=void 0===we?v.Z:we,xe=L.TransitionProps,Se=(0,i.Z)(L,R),Pe=(0,f.Z)(),ke="rtl"===Pe.direction,Te=l.useState(),Re=(0,n.Z)(Te,2),Ce=Re[0],Me=Re[1],_e=l.useState(null),Oe=(0,n.Z)(_e,2),je=Oe[0],Ee=Oe[1],Le=l.useRef(!1),Ae=Y||ie,We=l.useRef(),Ie=l.useRef(),Ne=l.useRef(),Fe=l.useRef(),De=(0,x.Z)({controlled:fe,default:!1,name:"Tooltip",state:"open"}),ze=(0,n.Z)(De,2),Ge=ze[0],qe=ze[1],Be=Ge,He=(0,w.Z)(ae),Ve=l.useRef(),Ue=l.useCallback((function(){void 0!==Ve.current&&(document.body.style.WebkitUserSelect=Ve.current,Ve.current=void 0),clearTimeout(Fe.current)}),[]);l.useEffect((function(){return function(){clearTimeout(We.current),clearTimeout(Ie.current),clearTimeout(Ne.current),Ue()}}),[Ue]);var Xe=function(e){clearTimeout(j),O=!0,qe(!0),de&&!Be&&de(e)},Ye=(0,g.Z)((function(e){clearTimeout(j),j=setTimeout((function(){O=!1}),800+ce),qe(!1),pe&&Be&&pe(e),clearTimeout(We.current),We.current=setTimeout((function(){Le.current=!1}),Pe.transitions.duration.shortest)})),Je=function(e){Le.current&&"touchstart"!==e.type||(Ce&&Ce.removeAttribute("title"),clearTimeout(Ie.current),clearTimeout(Ne.current),$||O&&te?Ie.current=setTimeout((function(){Xe(e)}),O?te:$):Xe(e))},Ke=function(e){clearTimeout(Ie.current),clearTimeout(Ne.current),Ne.current=setTimeout((function(){Ye(e)}),ce)},Qe=(0,Z.Z)(),$e=Qe.isFocusVisibleRef,et=Qe.onBlur,tt=Qe.onFocus,rt=Qe.ref,nt=l.useState(!1),ot=(0,n.Z)(nt,2)[1],it=function(e){et(e),!1===$e.current&&(ot(!1),Ke(e))},at=function(e){Ce||Me(e.currentTarget),tt(e),!0===$e.current&&(ot(!0),Je(e))},lt=function(e){Le.current=!0;var t=I.props;t.onTouchStart&&t.onTouchStart(e)},ct=Je,st=Ke;l.useEffect((function(){if(Be)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ye(e)}}),[Ye,Be]);var ut=(0,y.Z)(Me,t),pt=(0,y.Z)(rt,ut),dt=(0,y.Z)(I.ref,pt);""===ye&&(Be=!1);var ft=l.useRef({x:0,y:0}),mt=l.useRef(),ht={},vt="string"===typeof ye;q?(ht.title=Be||!vt||U?null:ye,ht["aria-describedby"]=Be?He:null):(ht["aria-label"]=vt?ye:null,ht["aria-labelledby"]=Be&&!vt?He:null);var bt=(0,a.Z)({},ht,Se,I.props,{className:(0,c.Z)(Se.className,I.props.className),onTouchStart:lt,ref:dt},ie?{onMouseMove:function(e){var t=I.props;t.onMouseMove&&t.onMouseMove(e),ft.current={x:e.clientX,y:e.clientY},mt.current&&mt.current.update()}}:{});var gt={};K||(bt.onTouchStart=function(e){lt(e),clearTimeout(Ne.current),clearTimeout(We.current),Ue(),Ve.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Fe.current=setTimeout((function(){document.body.style.WebkitUserSelect=Ve.current,Je(e)}),ne)},bt.onTouchEnd=function(e){I.props.onTouchEnd&&I.props.onTouchEnd(e),Ue(),clearTimeout(Ne.current),Ne.current=setTimeout((function(){Ye(e)}),ue)}),U||(bt.onMouseOver=E(ct,bt.onMouseOver),bt.onMouseLeave=E(st,bt.onMouseLeave),Ae||(gt.onMouseOver=ct,gt.onMouseLeave=st)),H||(bt.onFocus=E(at,bt.onFocus),bt.onBlur=E(it,bt.onBlur),Ae||(gt.onFocus=at,gt.onBlur=it));var yt=l.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(je),options:{element:je,padding:4}}];return null!=(e=ge.popperOptions)&&e.modifiers&&(t=t.concat(ge.popperOptions.modifiers)),(0,a.Z)({},ge.popperOptions,{modifiers:t})}),[je,ge]),wt=(0,a.Z)({},L,{isRtl:ke,arrow:W,disableInteractive:Ae,placement:he,PopperComponentProp:ve,touch:Le.current}),Zt=function(e){var t=e.classes,r=e.disableInteractive,n=e.arrow,o=e.touch,i=e.placement,a={popper:["popper",!r&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",o&&"touch","tooltipPlacement".concat((0,h.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,s.Z)(a,P,t)}(wt),xt=null!=(r=F.Popper)?r:C,St=null!=(o=null!=(p=F.Transition)?p:Ze)?o:v.Z,Pt=null!=(d=F.Tooltip)?d:M,kt=null!=(S=F.Arrow)?S:_,Tt=(0,u.Z)(xt,(0,a.Z)({},ge,z.popper),wt),Rt=(0,u.Z)(St,(0,a.Z)({},xe,z.transition),wt),Ct=(0,u.Z)(Pt,(0,a.Z)({},z.tooltip),wt),Mt=(0,u.Z)(kt,(0,a.Z)({},z.arrow),wt);return(0,T.jsxs)(l.Fragment,{children:[l.cloneElement(I,bt),(0,T.jsx)(xt,(0,a.Z)({as:null!=ve?ve:b.Z,placement:he,anchorEl:ie?{getBoundingClientRect:function(){return{top:ft.current.y,left:ft.current.x,right:ft.current.x,bottom:ft.current.y,width:0,height:0}}}:Ce,popperRef:mt,open:!!Ce&&Be,id:He,transition:!0},gt,Tt,{className:(0,c.Z)(Zt.popper,null==ge?void 0:ge.className,null==(k=z.popper)?void 0:k.className),popperOptions:yt,children:function(e){var t,r,n=e.TransitionProps;return(0,T.jsx)(St,(0,a.Z)({timeout:Pe.transitions.duration.shorter},n,Rt,{children:(0,T.jsxs)(Pt,(0,a.Z)({},Ct,{className:(0,c.Z)(Zt.tooltip,null==(t=z.tooltip)?void 0:t.className),children:[ye,W?(0,T.jsx)(kt,(0,a.Z)({},Mt,{className:(0,c.Z)(Zt.arrow,null==(r=z.arrow)?void 0:r.className),ref:Ee})):null]}))}))}}))]})}))},1146:function(e,t,r){var n,o;"undefined"!=typeof self&&self,e.exports=(n=r(2791),o=r(4164),function(){"use strict";var e={655:function(e,t,r){r.r(t),r.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return l},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return u},__generator:function(){return p},__createBinding:function(){return d},__exportStar:function(){return f},__values:function(){return m},__read:function(){return h},__spread:function(){return v},__spreadArrays:function(){return b},__spreadArray:function(){return g},__await:function(){return y},__asyncGenerator:function(){return w},__asyncDelegator:function(){return Z},__asyncValues:function(){return x},__makeTemplateObject:function(){return S},__importStar:function(){return k},__importDefault:function(){return T},__classPrivateFieldGet:function(){return R},__classPrivateFieldSet:function(){return C}});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function l(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}c((n=n.apply(e,t||[])).next())}))}function p(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function f(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)n[o]=i[a];return n}function g(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function w(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||l(e,t)}))})}function l(e,t){try{(r=o[e](t)).value instanceof y?Promise.resolve(r.value.v).then(c,s):u(i[0][2],r)}catch(e){u(i[0][3],e)}var r}function c(e){l("next",e)}function s(e){l("throw",e)}function u(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Z(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:y(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function x(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=m(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function k(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return P(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function R(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function C(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},156:function(e){e.exports=n},111:function(e){e.exports=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=r(655),n=r(156),o=r(111),a=Object.prototype.hasOwnProperty.call(n,"createContext"),l=Object.prototype.hasOwnProperty.call(n,"useMemo")&&Object.prototype.hasOwnProperty.call(n,"useCallback"),c=a?n.createContext({}):null;e.PrintContextConsumer=c?c.Consumer:function(){return null};var s={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.startPrint=function(e){var t=r.props,n=t.onAfterPrint,o=t.onPrintError,i=t.print,a=t.documentTitle;setTimeout((function(){var t,l;if(e.contentWindow){if(e.contentWindow.focus(),i)i(e).then(r.handleRemoveIframe).catch((function(e){o?o("print",e):r.logMessages(["An error was thrown by the specified `print` function"])}));else if(e.contentWindow.print){var c=null!==(l=null===(t=e.contentDocument)||void 0===t?void 0:t.title)&&void 0!==l?l:"",s=e.ownerDocument.title;a&&(e.ownerDocument.title=a,e.contentDocument&&(e.contentDocument.title=a)),e.contentWindow.print(),a&&(e.ownerDocument.title=s,e.contentDocument&&(e.contentDocument.title=c)),n&&n()}else r.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);r.handleRemoveIframe()}else r.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])}),500)},r.triggerPrint=function(e){var t=r.props,n=t.onBeforePrint,o=t.onPrintError;if(n){var i=n();i&&"function"==typeof i.then?i.then((function(){r.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):r.startPrint(e)}else r.startPrint(e)},r.handleClick=function(){var e=r.props,t=e.onBeforeGetContent,n=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(r.handlePrint).catch((function(e){n&&n("onBeforeGetContent",e)})):r.handlePrint()}else r.handlePrint()},r.handlePrint=function(){var e=r.props,n=e.bodyClass,i=e.content,a=e.copyStyles,l=e.fonts,c=e.pageStyle,s=e.nonce,u=i();if(void 0!==u)if(null!==u){var p=document.createElement("iframe");p.style.position="absolute",p.style.top="-1000px",p.style.left="-1000px",p.id="printWindow";var d=(0,o.findDOMNode)(u);if(d){var f=d instanceof Text,m=document.querySelectorAll("link[rel='stylesheet']"),h=f?[]:d.querySelectorAll("img");r.linkTotal=m.length+h.length,r.linksLoaded=[],r.linksErrored=[],r.fontsLoaded=[],r.fontsErrored=[];var v=function(e,t){t?r.linksLoaded.push(e):(r.logMessages(['"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e]),r.linksErrored.push(e)),r.linksLoaded.length+r.linksErrored.length+r.fontsLoaded.length+r.fontsErrored.length===r.linkTotal&&r.triggerPrint(p)};p.onload=function(){var e,o,i,u;p.onload=null;var m=p.contentDocument||(null===(o=p.contentWindow)||void 0===o?void 0:o.document);if(m){m.body.appendChild(d.cloneNode(!0)),l&&((null===(i=p.contentDocument)||void 0===i?void 0:i.fonts)&&(null===(u=p.contentWindow)||void 0===u?void 0:u.FontFace)?l.forEach((function(e){var t=new FontFace(e.family,e.source);p.contentDocument.fonts.add(t),t.loaded.then((function(e){r.fontsLoaded.push(e)})).catch((function(e){r.fontsErrored.push(t),r.logMessages(['"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e])}))})):r.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API']));var b="function"==typeof c?c():c;if("string"!=typeof b)r.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof b,'". Styles from `pageStyle` will not be applied.')]);else{var g=m.createElement("style");s&&(g.setAttribute("nonce",s),m.head.setAttribute("nonce",s)),g.appendChild(m.createTextNode(b)),m.head.appendChild(g)}if(n&&(e=m.body.classList).add.apply(e,(0,t.__spreadArray)([],(0,t.__read)(n.split(" ")),!1)),!f){for(var y=m.querySelectorAll("canvas"),w=d.querySelectorAll("canvas"),Z=0,x=y.length;Z<x;++Z){var S=(N=y[Z]).getContext("2d");S&&S.drawImage(w[Z],0,0)}for(Z=0;Z<h.length;Z++){var P=h[Z],k=P.getAttribute("src");if(k){var T=new Image;T.onload=v.bind(null,P,!0),T.onerror=v.bind(null,P,!1),T.src=k}else r.logMessages(['"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',P],"warning"),v(P,!1)}var R="input",C=d.querySelectorAll(R),M=m.querySelectorAll(R);for(Z=0;Z<C.length;Z++)M[Z].value=C[Z].value;var _="input[type=checkbox],input[type=radio]",O=d.querySelectorAll(_),j=m.querySelectorAll(_);for(Z=0;Z<O.length;Z++)j[Z].checked=O[Z].checked;var E="select",L=d.querySelectorAll(E),A=m.querySelectorAll(E);for(Z=0;Z<L.length;Z++)A[Z].value=L[Z].value}if(a)for(var W=document.querySelectorAll("style, link[rel='stylesheet']"),I=(Z=0,W.length);Z<I;++Z){var N;if("STYLE"===(N=W[Z]).tagName){var F=m.createElement(N.tagName),D=N.sheet;if(D){var z="";try{for(var G=D.cssRules.length,q=0;q<G;++q)"string"==typeof D.cssRules[q].cssText&&(z+="".concat(D.cssRules[q].cssText,"\r\n"))}catch(e){r.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",N],"warning")}F.setAttribute("id","react-to-print-".concat(Z)),s&&F.setAttribute("nonce",s),F.appendChild(m.createTextNode(z)),m.head.appendChild(F)}}else if(N.getAttribute("href")){F=m.createElement(N.tagName),q=0;for(var B=N.attributes.length;q<B;++q){var H=N.attributes[q];H&&F.setAttribute(H.nodeName,H.nodeValue||"")}F.onload=v.bind(null,F,!0),F.onerror=v.bind(null,F,!1),s&&F.setAttribute("nonce",s),m.head.appendChild(F)}else r.logMessages(['"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',N],"warning"),v(N,!0)}}0!==r.linkTotal&&a||r.triggerPrint(p)},r.handleRemoveIframe(!0),document.body.appendChild(p)}else r.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else r.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else r.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},r.handleRemoveIframe=function(e){var t=r.props.removeAfterPrint;if(e||t){var n=document.getElementById("printWindow");n&&document.body.removeChild(n)}},r.logMessages=function(e,t){void 0===t&&(t="error"),r.props.suppressErrors||("error"===t?console.error(e):"warning"===t&&console.warn(e))},r}return(0,t.__extends)(r,e),r.prototype.render=function(){var e=this.props,t=e.children,r=e.trigger;if(r)return n.cloneElement(r(),{onClick:this.handleClick});if(!c)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var o={handlePrint:this.handleClick};return n.createElement(c.Provider,{value:o},t)},r.defaultProps=s,r}(n.Component);e.default=u,e.useReactToPrint=function(e){if(!l)return e.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var r=n.useMemo((function(){return new u((0,t.__assign)((0,t.__assign)({},s),e))}),[e]);return n.useCallback((function(){return r.handleClick()}),[r])}}(),i}())}}]);
//# sourceMappingURL=9.b2512e48.chunk.js.map