import{_ as B,j as c,d as p,e as t,w as s,aQ as V,aR as w,h as _,F as C,a as o,b as d,g as E,f as x,c as S}from"./index-BwrWTNCp.js";import{D as A,C as b,a as P}from"./DeviceFilter-BoVnOdd7.js";const T={name:"CreateTask",components:{DatePicker:A,ClientFilter:b,DeviceFilter:P},data(){return{clientSelected:"",date:"",clientsFilter:[],devicesFilter:[],hours:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],selectedHours:{},isSelected:!1}},mounted(){},methods:{handleClients(e){this.clientsFilter=e,this.getDevicesByClients()},handleDevices(e){this.devicesFilter=e,console.log("HANDLE DEVICES: ",this.devicesFilter),this.isSelected=!0,this.getDevicesByClients()},async getClients(){try{const e=await c.get(this.$store.state.backendUrl+"/clients",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.clients=e.data,console.log("Clientes: ",this.clients)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async getDevicesByClients(){try{let e=[];for(const n of this.clientsFilter){const u=await c.get(this.$store.state.backendUrl+"/devices",{params:{client_id:n,clientConfig:!0},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});e=e.concat(u.data)}this.devicesFilter=e}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}},async getDevices(){try{const e=await c.get(this.$store.state.backendUrl+"/devices",{params:{client_id:1,client:1},headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token}});this.devices=e.data,console.log(this.devices)}catch(e){console.error("Error en la solicitud a la API:",e),this.ShowError=!0}}}},U={class:"d-grid gap-2 col-6 mx-auto mt-3"};function j(e,n,u,H,l,h){const m=o("ClientFilter"),r=o("CCol"),v=o("DeviceFilter"),i=o("CRow"),f=o("VDatePicker"),F=o("CFormCheck"),g=o("CButton"),k=o("CCardBody"),y=o("CCard");return d(),p(C,null,[t(i,null,{default:s(()=>[t(r,null,{default:s(()=>[t(m,{onFilter:h.handleClients},null,8,["onFilter"])]),_:1}),t(r,null,{default:s(()=>[t(v,{devices:l.devicesFilter,onFilter:h.handleDevices},null,8,["devices","onFilter"])]),_:1})]),_:1}),V(_("div",null,[t(y,{class:"mt-5"},{default:s(()=>[t(k,{class:"mt-4"},{default:s(()=>[t(i,null,{default:s(()=>[t(r,{class:"col-6"},{default:s(()=>[t(f,{modelValue:l.date,"onUpdate:modelValue":n[0]||(n[0]=a=>l.date=a),expanded:""},null,8,["modelValue"])]),_:1}),t(r,{class:"col-6"},{default:s(()=>[t(i,{class:"px-5"},{default:s(()=>[(d(!0),p(C,null,E(l.hours,a=>(d(),S(r,{class:"col-4",key:a},{default:s(()=>[t(F,{label:a,modelValue:l.selectedHours[a],"onUpdate:modelValue":D=>l.selectedHours[a]=D},null,8,["label","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),_("div",U,[t(g,{color:"primary",shape:"rounded-pill",disbled:""},{default:s(()=>[x("Agregar tareas a la cola")]),_:1})])]),_:1})]),_:1})],512),[[w,l.isSelected]])],64)}const z=B(T,[["render",j]]);export{z as default};
