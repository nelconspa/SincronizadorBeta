import{_ as T,c as w,w as t,a as l,b as h,e,f as o,d as B,g as k,F as V,h as s,t as C}from"./index-BwrWTNCp.js";const H={data(){return{toasts:[]}},methods:{createToast(){this.toasts.push({title:"new toast",content:"Lorem ipsum dolor cet emit"})}}},I=s("strong",null,"Vue Toast",-1),j=s("small",null,"Basic",-1),U=s("p",{class:"text-body-secondary small"}," Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button. ",-1),M=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),A=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),R=s("small",null,"7 min ago",-1),Y={class:"me-auto fw-bold"},z=s("small",null,"7 min ago",-1),D=s("strong",null,"Vue Toast",-1),E=s("small",null,"Translucent",-1),F=s("p",{class:"text-body-secondary small"}," Toasts are slightly translucent to blend in with what's below them. ",-1),N=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),S=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),q=s("small",null,"7 min ago",-1),L=s("strong",null,"Vue Toast",-1),$=s("small",null,"Stacking",-1),G=s("p",{class:"text-body-secondary small"}," You can stack toasts by wrapping them in a toast container, which will vertically add some spacing. ",-1),J=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),K=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),O=s("small",null,"7 min ago",-1),P=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),Q=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),W=s("small",null,"7 min ago",-1),X=s("strong",null,"Vue Toast",-1),Z=s("small",null,"Custom content",-1),tt=s("p",{class:"text-body-secondary small"},[o(" Customize your toasts by removing sub-components, tweaking them with "),s("a",{href:"https://coreui.io/docs/utilities/api"},"utilities"),o(", or by adding your own markup. Here we've created a simpler toast by removing the default "),s("code",null,"<CToastHeader>"),o(", adding a custom hide icon from "),s("a",{href:"https://coreui.io/icons/"},"CoreUI Icons"),o(", and using some "),s("a",{href:"https://coreui.io/docs/utilities/flex"},"flexbox utilities"),o(" to adjust the layout. ")],-1),et={class:"d-flex"},st=s("p",{class:"text-body-secondary small"}," Alternatively, you can also add additional controls and components to toasts. ",-1),ot={class:"mt-2 pt-2 border-top"},lt=s("strong",null,"Vue Toast",-1),at=s("small",null,"Custom content",-1),nt=s("p",{class:"text-body-secondary small"},[o(" Building on the above example, you can create different toast color schemes with our "),s("a",{href:"https://coreui.io/docs/utilities/colors"},"color"),o(" and "),s("a",{href:"https://coreui.io/docs/utilities/background"},"background"),o(" utilities. Here we've set "),s("code",null,'color="primary"'),o(" and added "),s("code",null,".text-white"),o(" class to the "),s("code",null,"<Ctoast>"),o(", and then set "),s("code",null,"white"),o(" property to our close button. For a crisp edge, we remove the default border with "),s("code",null,".border-0"),o(". ")],-1),it={class:"d-flex"};function dt(ct,ut,rt,_t,b,y){const d=l("CCardHeader"),c=l("CToastHeader"),a=l("CToastBody"),n=l("CToast"),i=l("DocsExample"),f=l("CButton"),p=l("CToaster"),u=l("CCardBody"),r=l("CCard"),_=l("CCol"),m=l("CToastClose"),x=l("CRow");return h(),w(x,null,{default:t(()=>[e(_,{xs:12},{default:t(()=>[e(r,{class:"mb-4"},{default:t(()=>[e(d,null,{default:t(()=>[I,o(),j]),_:1}),e(u,null,{default:t(()=>[U,e(i,{href:"components/toast.html"},{default:t(()=>[e(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:t(()=>[e(c,{closeButton:""},{default:t(()=>[M,A,R]),_:1}),e(a,null,{default:t(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1})]),_:1}),e(i,{href:"components/toast.html"},{default:t(()=>[e(f,{color:"primary",onClick:y.createToast},{default:t(()=>[o("Send a toast")]),_:1},8,["onClick"]),e(p,{placement:"top-end"},{default:t(()=>[(h(!0),B(V,null,k(b.toasts,(g,v)=>(h(),w(n,{visible:"",key:v},{default:t(()=>[e(c,{closeButton:""},{default:t(()=>[s("span",Y,C(g.title),1),z]),_:2},1024),e(a,null,{default:t(()=>[o(C(g.content),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{xs:12},{default:t(()=>[e(r,{class:"mb-4"},{default:t(()=>[e(d,null,{default:t(()=>[D,o(),E]),_:1}),e(u,null,{default:t(()=>[F,e(i,{href:"components/toast.html#translucent",tabContentClass:"bg-dark"},{default:t(()=>[e(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:t(()=>[e(c,{closeButton:""},{default:t(()=>[N,S,q]),_:1}),e(a,null,{default:t(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{xs:12},{default:t(()=>[e(r,{class:"mb-4"},{default:t(()=>[e(d,null,{default:t(()=>[L,o(),$]),_:1}),e(u,null,{default:t(()=>[G,e(i,{href:"components/toast.html#stacking"},{default:t(()=>[e(p,{class:"position-static"},{default:t(()=>[e(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:t(()=>[e(c,{closeButton:""},{default:t(()=>[J,K,O]),_:1}),e(a,null,{default:t(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1}),e(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:t(()=>[e(c,{closeButton:""},{default:t(()=>[P,Q,W]),_:1}),e(a,null,{default:t(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{xs:12},{default:t(()=>[e(r,{class:"mb-4"},{default:t(()=>[e(d,null,{default:t(()=>[X,o(),Z]),_:1}),e(u,null,{default:t(()=>[tt,e(i,{href:"components/toast.html#custom-content"},{default:t(()=>[e(n,{autohide:!1,class:"align-items-center",visible:!0},{default:t(()=>[s("div",et,[e(a,null,{default:t(()=>[o("Hello, world! This is a toast message.")]),_:1}),e(m,{class:"me-2 m-auto"})])]),_:1})]),_:1}),st,e(i,{href:"components/toast.html#custom-content"},{default:t(()=>[e(n,{autohide:!1,class:"align-items-center",visible:""},{default:t(()=>[e(a,null,{default:t(()=>[o(" Hello, world! This is a toast message. "),s("div",ot,[e(f,{type:"button",color:"primary",size:"sm"},{default:t(()=>[o(" Take action ")]),_:1}),e(m,{component:"CButton",color:"secondary",size:"sm",class:"ms-1"},{default:t(()=>[o("Close")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{xs:12},{default:t(()=>[e(r,{class:"mb-4"},{default:t(()=>[e(d,null,{default:t(()=>[lt,o(),at]),_:1}),e(u,null,{default:t(()=>[nt,e(i,{href:"components/toast.html#color-schemes"},{default:t(()=>[e(n,{autohide:!1,color:"primary",class:"text-white align-items-center",visible:!0},{default:t(()=>[s("div",it,[e(a,null,{default:t(()=>[o("Hello, world! This is a toast message.")]),_:1}),e(m,{class:"me-2 m-auto",white:""})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ht=T(H,[["render",dt]]);export{ht as default};
