"use strict";(self.webpackChunkclinica=self.webpackChunkclinica||[]).push([[998],{6544:function(e,n,t){var o=t(1413),r=t(9439),i=t(5987),a=t(2791),l=t(4135),d=t(6201),c=t(5403),s=t(8550),u=t(4518),p=t(5130),h=t(184),v=["data","columns","loading"];n.Z=function(e){var n=e.data,t=e.columns,Z=e.loading,f=(0,i.Z)(e,v),x=(0,a.useState)(""),g=(0,r.Z)(x,2),m=g[0],b=g[1],j=(0,a.useState)(""),R=(0,r.Z)(j,2),C=R[0],y=R[1],E=(0,a.useState)([]),S=(0,r.Z)(E,2),A=S[0],w=S[1],B=function(e,n,t){n(),b(e[0]),y(t)},k=function(e,n,t){e(),b(""),t([""]),y("")};return(0,a.useEffect)((function(){t.length>0&&(t.map((function(e){var n;return e.filter&&Object.assign(e,(0,o.Z)({},(n=e.dataIndex,{filterDropdown:function(e){var t=e.setSelectedKeys,o=e.selectedKeys,r=e.confirm,i=e.clearFilters;return(0,h.jsxs)("div",{style:{padding:8},children:[(0,h.jsx)(s.Z,{variant:"outlined",placeholder:"Buscar...",size:"small",value:o[0],onChange:function(e){t(e.target.value?[e.target.value]:[])},onKeyDown:function(e){"Enter"===e.key&&B(o,r,n)},style:{width:188,marginBottom:8,display:"block"}}),(0,h.jsxs)(u.Z,{color:"primary",variant:"outlined",size:"small",onClick:function(){return k(i,o,t)},style:{width:90},children:["Limpiar ",(0,h.jsx)(p.Z,{})]})," ",(0,h.jsxs)(u.Z,{color:"primary",size:"small",variant:"contained",onClick:function(){return B(o,r,n)},children:["Buscar ",(0,h.jsx)(c.Z,{})]})]})},filterIcon:function(e){return(0,h.jsx)(d.Z,{style:{color:e?"#fff":"#aaa"}})},onFilter:function(e,t){return t[n].toString().toLowerCase().includes(e.toLowerCase())},onFilterDropdownVisibleChange:function(e){},render:function(e){return C===n?m:e}}))),e.sorter&&(e.sorter=function(n,t){return n[e.dataIndex]>t[e.dataIndex]?1:-1}),e})),w(t))}),[t]),(0,h.jsx)(l.Z,(0,o.Z)({bordered:!0,columns:A,dataSource:n,scroll:{x:"auto"},loading:Z,rowKey:"_id"},f))}},7818:function(e,n,t){var o=t(1413),r=t(5987),i=(t(2791),t(8870)),a=t(703),l=t(1889),d=t(890),c=t(7071),s=t(4721),u=t(184),p=["title","helper","itemComponent","children"];n.Z=function(e){var n=e.title,t=e.helper,h=e.itemComponent,v=e.children,Z=(0,r.Z)(e,p);return(0,u.jsx)(i.Z,{p:1,children:(0,u.jsx)(a.Z,(0,o.Z)((0,o.Z)({},Z),{},{children:(0,u.jsxs)(i.Z,{p:2,children:[(0,u.jsxs)(l.ZP,{container:!0,justifyContent:"space-between",children:[(0,u.jsxs)(l.ZP,{item:!0,children:[(0,u.jsx)(d.Z,{gutterBottom:!0,component:"p",children:(0,u.jsx)(c.Z,{component:"span",children:t&&t.toUpperCase()})}),(0,u.jsx)(d.Z,{variant:"h5",children:(0,u.jsx)("b",{children:n})})]}),(0,u.jsx)(l.ZP,{item:!0,children:h})]}),(0,u.jsx)(s.Z,{}),v]})}))})}},2998:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var o=t(5861),r=t(9439),i=t(7757),a=t.n(i),l=t(2791),d=t(4518),c=t(6544),s=t(3044),u=t(2199),p=t(5289),h=t(9157),v=t(1889),Z=t(890),f=t(7071),x=t(7123),g=t(6139),m=t(685),b=t(184),j=function(e){var n=e.open,t=e.setOpen,o=e.data;return(0,b.jsxs)(p.Z,{open:n,fullWidth:!0,maxWidth:"xs",children:[(0,b.jsx)(h.Z,{children:(0,b.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(v.ZP,{item:!0,xs:12,children:(0,b.jsx)(Z.Z,{align:"center",variant:"h5",children:(0,b.jsx)("b",{children:"CAMBIAR DE EMPRESA"})})}),(0,b.jsx)(v.ZP,{item:!0,xs:12,children:(0,b.jsx)(f.Z,{children:"\xbfSEGURO QUE DESEA CAMBIAR DE EMPRESA?"})})]})}),(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(d.Z,{variant:"outlined",color:"secondary",onClick:function(){return t({open:!1})},children:"CANCELAR"}),(0,b.jsx)(d.Z,{variant:"contained",color:"primary",onClick:function(){try{var e=g.Z.get(m.Z);e.data.company=o,g.Z.set(m.Z,e),window.location.href="/"}catch(n){}},children:"CONFIRMAR"})]})]})},R=function(e){var n=e.data,t=e.loading,o=e.setModal,i=(0,l.useState)({open:!1,data:null}),a=(0,r.Z)(i,2),p=a[0],h=a[1],v=[{title:"Nombre",dataIndex:"name",key:"name",align:"center",sorter:!0,filter:!0},{title:"Logo",dataIndex:"logo",key:"logo",align:"center",sorter:!1,filter:!1,render:function(e){return(0,b.jsx)(s.Z,{src:e,alt:"Logo image"})}},{title:"Acciones",dataIndex:"_id",key:"_id",align:"center",render:function(e,n){return(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(d.Z,{color:"primary",onClick:function(){return o({open:!0,data:n})},children:"EDITAR"}),(0,b.jsx)(d.Z,{color:"secondary",onClick:function(){return h({open:!0,data:n})},children:"CAMBIAR"})]})}}];return(0,b.jsxs)("div",{children:[(0,b.jsx)(c.Z,{columns:v,data:n,loading:t}),p.open&&(0,b.jsx)(j,{open:p.open,setOpen:h,data:p.data})]})},C=t(7818),y=t(1413),E=t(5661),S=t(8550),A=t(5290),w=t(2569),B=t(7083),k=t(1975),z=function(e){var n,t,r=e.open,i=e.setOpen,l=e.setLoading,c=e.loading,s=e.data,u=e.reloadFunction,f=(0,A.cI)(),g=f.register,m=f.handleSubmit,j=f.formState.errors,R=function(){var e=(0,o.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),e.prev=1,!s){e.next=7;break}return e.next=5,(0,k.Wr)(n,s._id);case 5:e.next=9;break;case 7:return e.next=9,(0,k.Dr)(n);case 9:u(),i(!1),w.Z.success({message:"\xc9xito!",description:"La empresa se ".concat(Boolean(s)?"actualiz\xf3":"registr\xf3"," correctamente.")}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w.Z.error({message:"Ocurri\xf3 un error al realizar la operaci\xf3n."});case 17:return e.prev=17,l(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)(p.Z,{open:r,fullWidth:!0,maxWidth:"md",children:[(0,b.jsx)(E.Z,{children:(0,b.jsx)(Z.Z,{variant:"subtitle1",align:"center",children:(0,b.jsxs)("b",{children:[Boolean(s)?"EDITAR":"AGREGAR"," EMPRESA"]})})}),(0,b.jsx)(B.Z,{spinning:c,children:(0,b.jsxs)("form",{onSubmit:m(R),autoComplete:"off",children:[(0,b.jsx)(h.Z,{children:(0,b.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(v.ZP,{item:!0,xs:12,children:(0,b.jsx)(S.Z,(0,y.Z)({label:"NOMBRE DE LA EMPRESA",autoFocus:!0,fullWidth:!0,defaultValue:Boolean(s)?s.name:"",error:Boolean(null!==(n=null===j||void 0===j?void 0:j.name)&&void 0!==n&&n)},g("name",{required:!0,maxLength:80})))}),(0,b.jsx)(v.ZP,{item:!0,xs:12,children:(0,b.jsx)(S.Z,(0,y.Z)({label:"IMAGEN URL",fullWidth:!0,defaultValue:Boolean(s)?s.logo:"",error:Boolean(null!==(t=null===j||void 0===j?void 0:j.logo)&&void 0!==t&&t)},g("logo",{required:!0})))})]})}),(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(d.Z,{variant:"outlined",color:"secondary",onClick:function(){return i(!1)},children:"CANCELAR"}),(0,b.jsx)(d.Z,{variant:"contained",color:"primary",type:"submit",children:"GUARDAR"})]})]})})]})},P=function(){var e=(0,l.useState)({open:!1,data:null}),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,l.useState)(!1),s=(0,r.Z)(c,2),u=s[0],p=s[1],h=(0,l.useState)([]),v=(0,r.Z)(h,2),Z=v[0],f=v[1];(0,l.useEffect)((function(){x()}),[]);var x=function(){var e=(0,o.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,(0,k.ap)();case 4:n=e.sent,f(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w.Z.error({message:"Oops!",description:"Ocurri\xf3 un error al obtener la informaci\xf3n."});case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,b.jsxs)(C.Z,{helper:"CONFIGURACI\xd3N",title:"EMPRESAS",itemComponent:(0,b.jsx)(d.Z,{variant:"contained",size:"large",onClick:function(){return i({open:!0,data:null})},children:"AGREGAR"}),children:[(0,b.jsx)("br",{}),(0,b.jsx)(R,{loading:u,data:Z,setModal:i}),t.open&&(0,b.jsx)(z,{open:t.open,setOpen:i,data:t.data,loading:u,setLoading:p,reloadFunction:x})]})}},2199:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(4942),r=t(3366),i=t(7462),a=t(2791),l=t(8182),d=t(767),c=t(2065),s=t(4036),u=t(7630),p=t(3736),h=t(5159);function v(e){return(0,h.Z)("MuiButtonGroup",e)}var Z=(0,t(208).Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),f=t(1793),x=t(184),g=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],m=(0,u.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,o.Z)({},"& .".concat(Z.grouped),n.grouped),(0,o.Z)({},"& .".concat(Z.grouped),n["grouped".concat((0,s.Z)(t.orientation))]),(0,o.Z)({},"& .".concat(Z.grouped),n["grouped".concat((0,s.Z)(t.variant))]),(0,o.Z)({},"& .".concat(Z.grouped),n["grouped".concat((0,s.Z)(t.variant)).concat((0,s.Z)(t.orientation))]),(0,o.Z)({},"& .".concat(Z.grouped),n["grouped".concat((0,s.Z)(t.variant)).concat((0,s.Z)(t.color))]),n.root,n[t.variant],!0===t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth,"vertical"===t.orientation&&n.vertical]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({display:"inline-flex",borderRadius:n.shape.borderRadius},"contained"===t.variant&&{boxShadow:n.shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},"vertical"===t.orientation&&{flexDirection:"column"},(0,o.Z)({},"& .".concat(Z.grouped),(0,i.Z)({minWidth:40,"&:not(:first-of-type)":(0,i.Z)({},"horizontal"===t.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===t.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===t.variant&&"horizontal"===t.orientation&&{marginLeft:-1},"outlined"===t.variant&&"vertical"===t.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,i.Z)({},"horizontal"===t.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===t.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===t.variant&&"horizontal"===t.orientation&&{borderRight:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"vertical"===t.orientation&&{borderBottom:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"inherit"!==t.color&&{borderColor:(0,c.Fq)(n.palette[t.color].main,.5)},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"transparent"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"transparent"},"contained"===t.variant&&"horizontal"===t.orientation&&(0,o.Z)({borderRight:"1px solid ".concat(n.palette.grey[400])},"&.".concat(Z.disabled),{borderRight:"1px solid ".concat(n.palette.action.disabled)}),"contained"===t.variant&&"vertical"===t.orientation&&(0,o.Z)({borderBottom:"1px solid ".concat(n.palette.grey[400])},"&.".concat(Z.disabled),{borderBottom:"1px solid ".concat(n.palette.action.disabled)}),"contained"===t.variant&&"inherit"!==t.color&&{borderColor:n.palette[t.color].dark},{"&:hover":(0,i.Z)({},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"currentColor"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,i.Z)({},"contained"===t.variant&&{boxShadow:"none"})},"contained"===t.variant&&{boxShadow:"none"})))})),b=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonGroup"}),o=t.children,c=t.className,u=t.color,h=void 0===u?"primary":u,Z=t.component,b=void 0===Z?"div":Z,j=t.disabled,R=void 0!==j&&j,C=t.disableElevation,y=void 0!==C&&C,E=t.disableFocusRipple,S=void 0!==E&&E,A=t.disableRipple,w=void 0!==A&&A,B=t.fullWidth,k=void 0!==B&&B,z=t.orientation,P=void 0===z?"horizontal":z,L=t.size,M=void 0===L?"medium":L,W=t.variant,I=void 0===W?"outlined":W,O=(0,r.Z)(t,g),F=(0,i.Z)({},t,{color:h,component:b,disabled:R,disableElevation:y,disableFocusRipple:S,disableRipple:w,fullWidth:k,orientation:P,size:M,variant:I}),D=function(e){var n=e.classes,t=e.color,o=e.disabled,r=e.disableElevation,i=e.fullWidth,a=e.orientation,l=e.variant,c={root:["root",l,"vertical"===a&&"vertical",i&&"fullWidth",r&&"disableElevation"],grouped:["grouped","grouped".concat((0,s.Z)(a)),"grouped".concat((0,s.Z)(l)),"grouped".concat((0,s.Z)(l)).concat((0,s.Z)(a)),"grouped".concat((0,s.Z)(l)).concat((0,s.Z)(t)),o&&"disabled"]};return(0,d.Z)(c,v,n)}(F),G=a.useMemo((function(){return{className:D.grouped,color:h,disabled:R,disableElevation:y,disableFocusRipple:S,disableRipple:w,fullWidth:k,size:M,variant:I}}),[h,R,y,S,w,k,M,I,D.grouped]);return(0,x.jsx)(m,(0,i.Z)({as:b,role:"group",className:(0,l.Z)(D.root,c),ref:n,ownerState:F},O,{children:(0,x.jsx)(f.Z.Provider,{value:G,children:o})}))}))}}]);
//# sourceMappingURL=998.a1d4638e.chunk.js.map