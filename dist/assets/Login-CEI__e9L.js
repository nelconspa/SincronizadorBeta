import{j as S,_ as b,a as s,b as u,c as T,w as n,d as w,ba as N,f as m,t as x,h as p,e as o}from"./index-BbNI8ARv.js";import{u as A,r as v,e as G}from"./index-Cr0WeISo.js";const{Axios:W,AxiosError:M,CanceledError:X,isCancel:Y,CancelToken:Z,VERSION:ee,all:oe,Cancel:te,isAxiosError:se,spread:ne,toFormData:re,AxiosHeaders:ie,HttpStatusCode:ae,formToJSON:le,getAdapter:de,mergeConfig:ce}=S,H={name:"SubmitButton",props:["title","isSendingForm"]},L={key:0,class:"spinner-border spinner-border-sm",role:"status"},j=p("span",{class:"visually-hidden"},"Loading...",-1),D=[j];function O(t,e,i,d,r,l){const c=s("CButton");return u(),T(c,{color:"primary",type:"submit",class:""},{default:n(()=>[i.isSendingForm?(u(),w("div",L,D)):N("",!0),m(" "+x(i.title),1)]),_:1})}const R=b(H,[["render",O]]),U={name:"Login",setup(){return{v$:A()}},components:{SubmitButton:R},data(){return{form:{email:"",password:""},errorMsg:"",ShowError:!1,isSendingForm:!1}},validations(){return{form:{email:{required:v,email:G},password:{required:v}}}},methods:{setTouched(t){(t=="email"||t=="all")&&this.v$.form.email.$touch(),(t=="password"||t=="all")&&this.v$.form.password.$touch()},handleErrors(t){console.log("Error: ",t),this.ShowError=!0;const e=t.response.status;t instanceof M&&t.response?e==404?this.errorMsg="No se encontró el recurso solicitado.":e==401?this.errorMsg="Email y/o Contraseña inválida.":e==500&&(this.errorMsg="Error del servidor: Ha ocurrido un error interno en el servidor."):t.request?this.errorMsg="No se recibió respuesta del servidor.":this.errorMsg="Ha ocurrido un error: "+t,this.isSendingForm=!1},onSubmit(t){t.preventDefault(),this.setTouched("all"),console.log(this.v$.$invalid),this.v$.$invalid||(this.isSendingForm=!0,S.post(this.$store.state.backendUrl+"/login",this.form,{headers:{"Content-Type":"application/json"}}).then(e=>{let i=e.data;this.$store.commit("saveLogin",{token:i.data.token,name:i.data.name}),this.$router.push("/"),this.isSendingForm=!1}).catch(e=>{this.handleErrors(e)}))}}},q={class:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center"},z=p("h2",{class:"text-center"},"Sincronizador 2",-1),J=p("p",{class:"text-body-secondary text-center"},"Inicio de sesión panel de administración",-1);function K(t,e,i,d,r,l){const c=s("CAlert"),f=s("CIcon"),_=s("CInputGroupText"),C=s("CFormInput"),h=s("CInputGroup"),y=s("SubmitButton"),g=s("CContainer"),$=s("CButton"),E=s("CForm"),I=s("CCardBody"),B=s("CCard"),F=s("CCardGroup"),k=s("CCol"),V=s("CRow");return u(),w("div",q,[o(g,null,{default:n(()=>[o(V,{class:"justify-content-center"},{default:n(()=>[o(k,{class:"align-self-center col-6 h-100vh"},{default:n(()=>[o(F,null,{default:n(()=>[o(B,{class:"p-5"},{default:n(()=>[o(I,null,{default:n(()=>[o(c,{color:"danger",visible:r.ShowError,dismissible:"",onClose:e[0]||(e[0]=()=>{r.ShowError=!1})},{default:n(()=>[m(x(r.errorMsg),1)]),_:1},8,["visible"]),o(E,{onSubmit:l.onSubmit},{default:n(()=>[z,J,o(h,{class:"mb-3"},{default:n(()=>[o(_,null,{default:n(()=>[o(f,{icon:"cil-user"})]),_:1}),o(C,{modelValue:r.form.email,"onUpdate:modelValue":e[1]||(e[1]=a=>r.form.email=a),modelModifiers:{trim:!0},onInput:e[2]||(e[2]=a=>l.setTouched("email")),type:"email",placeholder:"Email",autocomplete:"email",feedback:"Ingresa un email válido.",invalid:d.v$.form.email.$error},null,8,["modelValue","invalid"])]),_:1}),o(h,{class:"mb-4"},{default:n(()=>[o(_,null,{default:n(()=>[o(f,{icon:"cil-lock-locked"})]),_:1}),o(C,{modelValue:r.form.password,"onUpdate:modelValue":e[3]||(e[3]=a=>r.form.password=a),modelModifiers:{trim:!0},onInput:e[4]||(e[4]=a=>l.setTouched("password")),type:"password",placeholder:"Contraseña",autocomplete:"current-password",feedback:"Ingrese su contraseña.",invalid:d.v$.form.password.$error},null,8,["modelValue","invalid"])]),_:1}),o(g,{class:"d-grid gap-2"},{default:n(()=>[o(y,{title:"Ingresar",isSendingForm:r.isSendingForm},null,8,["isSendingForm"])]),_:1}),o($,{color:"link",class:"text-center pt-3"},{default:n(()=>[m(" ¿Olvidaste la contraseña? ")]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ue=b(U,[["render",K]]);export{ue as default};