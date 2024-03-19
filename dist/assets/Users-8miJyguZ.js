import{_ as V,j as U,a as l,b as g,c as D,w as s,e as o,f as i,t as v,i as A,C as S,d as F,F as E,g as P,h as z}from"./index-BbNI8ARv.js";import{_ as H}from"./SearchFilter-CaQaq75L.js";import{i as j}from"./index-BlG5paJz.js";import{u as I,r as p}from"./index-Cr0WeISo.js";import"./index-BivFdvbN.js";import"./index-8v7uM-YG.js";import"./index-DZlMe-le.js";const N={name:"AddUser",props:{showModal:Boolean},setup(){return{v$:I()}},data(){return{form:{profile_id:"",name:"",email:"",password:"",password_confirmation:""},profiles:[],success:!1,fail:!1,failMsg:"",successMsg:""}},validations(){return{form:{profile_id:{required:p},name:{required:p},email:{required:p},password:{required:p},password_confirmation:{required:p}}}},mounted(){this.getProfiles()},methods:{setTouched(e){(e=="profile_id"||e=="all")&&this.v$.form.profile_id.$touch(),(e=="name"||e=="all")&&this.v$.form.name.$touch(),(e=="email"||e=="all")&&this.v$.form.email.$touch(),(e=="passowrd"||e=="all")&&this.v$.form.password.$touch(),(e=="password_confirmation"||e=="all")&&this.v$.form.password_confirmation.$touch()},restoreInitialData(){this.fail=!1,this.success=!1,this.failMsg="",this.successMsg=""},closeModal(){this.restoreInitialData(),this.$emit("cerrar")},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},async getProfiles(){try{const e=await U.get(this.$store.state.backendUrl+"/profile",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.profiles=e.data}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async saveUser(){if(this.setTouched("all"),!this.v$.$invalid)try{const e=await U.post(this.$store.state.backendUrl+"/users",this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});console.log(e),this.successMsg="Usuario creado exitósamente.",this.success=!0,setTimeout(()=>{this.closeModal()},2e3)}catch(e){if(e.response){const t=e.response.data.errors;for(const m in t)if(t.hasOwnProperty(m)){const u=t[m];this.failMsg=this.failMsg.concat(u,`
`),this.fail=!0,setTimeout(()=>{this.restoreInitialData()},2e3)}}}}}};function O(e,t,m,u,r,n){const b=l("CModalTitle"),_=l("CModalHeader"),f=l("CAlert"),h=l("v-select"),d=l("CCol"),c=l("CFormInput"),C=l("CRow"),k=l("CForm"),M=l("CModalBody"),w=l("CButton"),T=l("CModalFooter"),B=l("CModal");return g(),D(B,{visible:m.showModal,onClick:n.closeModalOutside},{default:s(()=>[o(_,null,{default:s(()=>[o(b,null,{default:s(()=>[i("Nuevo Usuario")]),_:1})]),_:1}),o(M,null,{default:s(()=>[o(f,{color:"success",visible:r.success},{default:s(()=>[i(v(r.successMsg),1)]),_:1},8,["visible"]),o(f,{color:"danger",visible:r.fail},{default:s(()=>[i(v(r.failMsg),1)]),_:1},8,["visible"]),o(k,null,{default:s(()=>[o(C,null,{default:s(()=>[o(d,{class:"col-12"},{default:s(()=>[o(h,{modelValue:r.form.profile_id,"onUpdate:modelValue":t[0]||(t[0]=a=>r.form.profile_id=a),options:r.profiles,reduce:a=>a.id,label:"name",placeholder:"Seleccione un perfil...",onInput:t[1]||(t[1]=a=>n.setTouched("profile_id")),feedback:"Rellene este campo por favor.",invalid:u.v$.form.profile_id.$error},null,8,["modelValue","options","reduce","invalid"])]),_:1}),o(d,{class:"col-12 mt-4"},{default:s(()=>[o(c,{type:"text",placeholder:"Nombre","aria-describedby":"Nombre Usuario",modelValue:r.form.name,"onUpdate:modelValue":t[2]||(t[2]=a=>r.form.name=a),onInput:t[3]||(t[3]=a=>n.setTouched("name")),feedback:"Rellene este campo por favor.",invalid:u.v$.form.name.$error},null,8,["modelValue","invalid"])]),_:1}),o(d,{class:"col-12 mt-4"},{default:s(()=>[o(c,{type:"email",placeholder:"Correo electronico","aria-describedby":"Correo electrónico",modelValue:r.form.email,"onUpdate:modelValue":t[4]||(t[4]=a=>r.form.email=a),onInput:t[5]||(t[5]=a=>n.setTouched("email")),feedback:"Rellene este campo por favor.",invalid:u.v$.form.email.$error},null,8,["modelValue","invalid"])]),_:1}),o(d,{class:"col-6 mt-4"},{default:s(()=>[o(c,{type:"password",placeholder:"Contraseña","aria-describedby":"Contraseña",modelValue:r.form.password,"onUpdate:modelValue":t[6]||(t[6]=a=>r.form.password=a),onInput:t[7]||(t[7]=a=>n.setTouched("password")),feedback:"Rellene este campo por favor.",invalid:u.v$.form.password.$error},null,8,["modelValue","invalid"])]),_:1}),o(d,{class:"col-6 mt-4"},{default:s(()=>[o(c,{type:"password",placeholder:"Repetir Contraseña","aria-describedby":"Repetir Contraseña",modelValue:r.form.password_confirmation,"onUpdate:modelValue":t[8]||(t[8]=a=>r.form.password_confirmation=a),onInput:t[9]||(t[9]=a=>n.setTouched("password_confirmation")),feedback:"Rellene este campo por favor.",invalid:u.v$.form.password_confirmation.$error},null,8,["modelValue","invalid"])]),_:1})]),_:1})]),_:1})]),_:1}),o(T,null,{default:s(()=>[o(w,{color:"secondary",onClick:n.closeModal},{default:s(()=>[i(" Cerrar ")]),_:1},8,["onClick"]),o(w,{color:"primary",onClick:n.saveUser},{default:s(()=>[i("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const L=V(N,[["render",O]]),q={name:"EditUser",props:{showModal:Boolean,user:Object},setup(){return{v$:I()}},data(){return{form:{id:"",name:"",profile_id:"",email:"",password:"",password_confirmation:""},success:!1,successMsg:"",fail:!1,failMsg:"",profiles:[]}},validations(){return{form:{profile_id:{required:p},name:{required:p},email:{required:p},password:{required:p},password_confirmation:{required:p}}}},watch:{user:{handler(e){this.setDataUser(e)},deep:!0,immediate:!0},showModal(e){e||this.$emit("update:showModal",!1)}},mounted(){this.getProfiles()},methods:{setTouched(e){(e=="profile_id"||e=="all")&&this.v$.form.profile_id.$touch(),(e=="name"||e=="all")&&this.v$.form.name.$touch(),(e=="email"||e=="all")&&this.v$.form.email.$touch(),(e=="passowrd"||e=="all")&&this.v$.form.password.$touch(),(e=="password_confirmation"||e=="all")&&this.v$.form.password_confirmation.$touch()},restoreInitialData(){this.fail=!1,this.success=!1,this.failMsg="",this.successMsg=""},closeModal(){this.restoreInitialData(),this.$emit("cerrar")},closeModalOutside(e){e.target===e.currentTarget&&this.closeModal()},setDataUser(e){e&&(console.log(e),this.form.id=e.id,this.form.profile_id=e.profile_id,this.form.name=e.name,this.form.email=e.email,this.form.password=e.password,this.form.password_confirmation=e.password_confirmation)},async getProfiles(){try{const e=await U.get(this.$store.state.backendUrl+"/profile",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.profiles=e.data,console.log("PROFILES: ",this.profiles)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async saveUser(){if(this.setTouched("all"),!this.v$.$invalid)try{const e=await U.put(this.$store.state.backendUrl+"/users/"+this.form.id,this.form,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});console.log(e),this.successMsg="Usuario actualizado exitósamente.",this.success=!0,setTimeout(()=>{this.closeModal()},2e3)}catch(e){if(e.response){const t=e.response.data.errors;for(const m in t)if(t.hasOwnProperty(m)){const u=t[m];this.failMsg=this.failMsg.concat(u,`
`),this.fail=!0,setTimeout(()=>{this.restoreInitialData()},2e3)}}}}}};function G(e,t,m,u,r,n){const b=l("CModalTitle"),_=l("CModalHeader"),f=l("CAlert"),h=l("v-select"),d=l("CCol"),c=l("CFormInput"),C=l("CRow"),k=l("CForm"),M=l("CModalBody"),w=l("CButton"),T=l("CModalFooter"),B=l("CModal");return g(),D(B,{visible:m.showModal,onClick:n.closeModalOutside},{default:s(()=>[o(_,null,{default:s(()=>[o(b,null,{default:s(()=>[i("Editar Usuario")]),_:1})]),_:1}),o(M,null,{default:s(()=>[o(f,{color:"success",visible:r.success},{default:s(()=>[i(v(r.successMsg),1)]),_:1},8,["visible"]),o(f,{color:"danger",visible:r.fail},{default:s(()=>[i(v(r.failMsg),1)]),_:1},8,["visible"]),o(k,null,{default:s(()=>[o(C,null,{default:s(()=>[o(d,{class:"col-12"},{default:s(()=>[o(h,{modelValue:r.form.profile_id,"onUpdate:modelValue":t[0]||(t[0]=a=>r.form.profile_id=a),options:r.profiles,reduce:a=>a.id,label:"name",placeholder:"Seleccione un perfil..."},null,8,["modelValue","options","reduce"])]),_:1}),o(d,{class:"col-12 mt-4"},{default:s(()=>[o(c,{type:"text",placeholder:"Nombre","aria-describedby":"Nombre Usuario",modelValue:r.form.name,"onUpdate:modelValue":t[1]||(t[1]=a=>r.form.name=a)},null,8,["modelValue"])]),_:1}),o(d,{class:"col-12 mt-4"},{default:s(()=>[o(c,{type:"email",placeholder:"Correo electronico","aria-describedby":"Correo electrónico",modelValue:r.form.email,"onUpdate:modelValue":t[2]||(t[2]=a=>r.form.email=a)},null,8,["modelValue"])]),_:1}),o(d,{class:"col-6 mt-4"},{default:s(()=>[o(c,{type:"password",placeholder:"Contraseña","aria-describedby":"Contraseña",modelValue:r.form.password,"onUpdate:modelValue":t[3]||(t[3]=a=>r.form.password=a)},null,8,["modelValue"])]),_:1}),o(d,{class:"col-6 mt-4"},{default:s(()=>[o(c,{type:"password",placeholder:"Repetir Contraseña","aria-describedby":"Repetir Contraseña",modelValue:r.form.password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=a=>r.form.password_confirmation=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),o(T,null,{default:s(()=>[o(w,{color:"secondary",onClick:n.closeModal},{default:s(()=>[i(" Cerrar ")]),_:1},8,["onClick"]),o(w,{color:"primary",onClick:n.saveUser},{default:s(()=>[i("Guardar")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["visible","onClick"])}const J=V(q,[["render",G]]),K={name:"DeleteModal",emits:["closeDeleteModal"],props:{showDeleteModal:Boolean,user:Object},data(){return{fail:!1,success:!1,profile:null}},mounted(){this.getDataAccount()},methods:{closeModal(){this.$emit("closeDeleteModal"),this.fail=!1,this.success=!1},async getDataAccount(){const e=await U.get(this.$store.state.backendUrl+"/account",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.profile=e.data,console.log(this.profile)},async deleteUser(){this.user.id===this.profile.id?this.fail=!0:U.delete(this.$store.state.backendUrl+"/users/"+this.user.id,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(e=>{console.log(e),this.success=!0}).catch(e=>{console.log("Error: ",e)})}}};function Q(e,t,m,u,r,n){const b=l("CModalTitle"),_=l("CModalHeader"),f=l("CModalBody"),h=l("CAlert"),d=l("CButton"),c=l("CModalFooter"),C=l("CModal");return g(),D(C,{visible:m.showDeleteModal,onClose:n.closeModal},{default:s(()=>[o(_,null,{default:s(()=>[o(b,null,{default:s(()=>[A(e.$slots,"modalTitle")]),_:3})]),_:3}),o(f,null,{default:s(()=>[A(e.$slots,"modalBody")]),_:3}),o(c,null,{default:s(()=>[o(h,{color:"danger",visible:r.fail},{default:s(()=>[i(" Para eliminar este cliente no debe tener estaciones agregadas. ")]),_:1},8,["visible"]),o(h,{color:"success",visible:r.success},{default:s(()=>[i(" Cliente eliminado exitósamente. ")]),_:1},8,["visible"]),o(d,{onClick:n.deleteUser,color:"danger",class:"text-white"},{default:s(()=>[i("Eliminar ")]),_:1},8,["onClick"]),o(d,{color:"primary",onClick:n.closeModal},{default:s(()=>[i("Cancelar")]),_:1},8,["onClick"])]),_:1})]),_:3},8,["visible","onClose"])}const W=V(K,[["render",Q]]),X={name:"Users",components:{SearchBarFilter:H,CIcon:S,AddUserModal:L,EditUserModal:J,DeleteUser:W},setup(){return{icon:j}},data(){return{users:[],searchFilter:"",showAddModal:!1,showEditModal:!1,showDeleteModal:!1,user_id:null}},computed:{filteredUsers(){let e=this.users;return this.searchFilter!==""&&(e=e.filter(t=>t.name.toLowerCase().includes(this.searchFilter))),e}},mounted(){this.getUsers()},methods:{editUser(e){this.showEditModal=!0,this.user_id=e},async deleteUser(e){this.showDeleteModal=!0,this.user_id=e},addUser(){this.showAddModal=!0},handleSearch(e){this.searchFilter=e},async getUsers(){try{const e=await U.get(this.$store.state.backendUrl+"/users",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.users=e.data,console.log("Usuarios: ",this.users)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},onCloseAdd(){this.showAddModal=!1,this.getUsers()},onCloseEdit(){this.showEditModal=!1,this.getUsers()},onCloseDeleteModal(){this.showDeleteModal=!1,this.getUsers()}}};function Y(e,t,m,u,r,n){const b=l("CIcon"),_=l("CButton"),f=l("CCol"),h=l("SearchBarFilter"),d=l("CRow"),c=l("CTableHeaderCell"),C=l("CTableRow"),k=l("CTableHead"),M=l("CTableDataCell"),w=l("font-awesome-icon"),T=l("CTableBody"),B=l("CTable"),a=l("AddUserModal"),R=l("EditUserModal"),x=l("DeleteUser");return g(),F(E,null,[o(d,{class:"mb-4"},{default:s(()=>[o(f,{class:"col-3 mt-4"},{default:s(()=>[o(_,{onClick:n.addUser,color:"success",shape:"rounded-pill",variant:"outline"},{default:s(()=>[o(b,{icon:u.icon.cilPlus,size:"xl"},null,8,["icon"])]),_:1},8,["onClick"])]),_:1}),o(f,{class:"col-9"},{default:s(()=>[o(h,{onSearch:n.handleSearch},null,8,["onSearch"])]),_:1})]),_:1}),o(B,{class:"mt-5"},{default:s(()=>[o(k,null,{default:s(()=>[o(C,{color:"dark"},{default:s(()=>[o(c,{scope:"col"},{default:s(()=>[i("Nombre")]),_:1}),o(c,{scope:"col"},{default:s(()=>[i("Perfil")]),_:1}),o(c,{scope:"col"},{default:s(()=>[i("Correo")]),_:1}),o(c,{scope:"col"},{default:s(()=>[i("Herramientas")]),_:1})]),_:1})]),_:1}),o(T,null,{default:s(()=>[(g(!0),F(E,null,P(n.filteredUsers,(y,Z)=>(g(),D(C,{key:y.id},{default:s(()=>[o(M,null,{default:s(()=>[i(v(y.name),1)]),_:2},1024),o(M,null,{default:s(()=>[i(v(y.profile.name),1)]),_:2},1024),o(M,null,{default:s(()=>[i(v(y.email),1)]),_:2},1024),o(M,null,{default:s(()=>[o(_,{onClick:$=>n.editUser(y)},{default:s(()=>[o(w,{icon:"pen-to-square",size:"xl"})]),_:2},1032,["onClick"]),o(_,{onClick:$=>n.deleteUser(y)},{default:s(()=>[o(w,{icon:"trash",size:"xl"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),o(a,{showModal:r.showAddModal,onCerrar:n.onCloseAdd},null,8,["showModal","onCerrar"]),o(R,{showModal:r.showEditModal,user:r.user_id,onCerrar:n.onCloseEdit},null,8,["showModal","user","onCerrar"]),o(x,{showDeleteModal:r.showDeleteModal,onCloseDeleteModal:n.onCloseDeleteModal,user:r.user_id},{modalTitle:s(()=>[i("Eliminar Cliente: "),z("b",null,v(r.user_id.name),1)]),modalBody:s(()=>[i(" ADVERTENCIA: Se eliminarán todos los datos de este cliente. ")]),modalFooter:s(()=>[]),_:1},8,["showDeleteModal","onCloseDeleteModal","user"])],64)}const ne=V(X,[["render",Y]]);export{ne as default};