import{a as E,b as k,c as P,d as R,e as y,f as A}from"./index-C1LCSeZ2.js";import{_ as n,a as r,b as l,c as d,w as t,e as a,f as i}from"./index-BFEjp-2G.js";const v={name:"CChartLineExample",components:{CChartLine:E},computed:{defaultData(){return{labels:["months","a","b","c","d"],datasets:[{label:"Data One",backgroundColor:"rgb(228,102,81,0.9)",data:[30,39,10,50,30,70,35]},{label:"Data Two",backgroundColor:"rgb(0,216,255,0.9)",data:[39,80,40,35,40,20,45]}]}}}};function H(u,C,c,s,p,o){const e=r("CChartLine");return l(),d(e,{data:o.defaultData},null,8,["data"])}const J=n(v,[["render",H]]),L={name:"CChartBarExample",components:{CChartBar:k},computed:{defaultData(){return{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,12]}]}}}};function F(u,C,c,s,p,o){const e=r("CChartBar");return l(),d(e,{data:o.defaultData},null,8,["data"])}const S=n(L,[["render",F]]),V={name:"CChartDoughnutExample",components:{CChartDoughnut:P},computed:{defaultData(){return{labels:["VueJs","EmberJs","VueJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}}};function w(u,C,c,s,p,o){const e=r("CChartDoughnut");return l(),d(e,{data:o.defaultData},null,8,["data"])}const M=n(V,[["render",w]]),O={name:"CChartRadarExample",components:{CChartRadar:R},computed:{defaultData(){return{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"2020",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2021",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}],options:{aspectRatio:1.5}}}}};function N(u,C,c,s,p,o){const e=r("CChartRadar");return l(),d(e,{data:o.defaultData},null,8,["data"])}const T=n(O,[["render",N]]),j={name:"CChartPieExample",components:{CChartPie:y},computed:{defaultData(){return{labels:["VueJs","EmberJs","VueJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}}};function z(u,C,c,s,p,o){const e=r("CChartPie");return l(),d(e,{data:o.defaultData},null,8,["data"])}const G=n(j,[["render",z]]),q={name:"CChartPolarAreaExample",components:{CChartPolarArea:A},computed:{defaultData(){return{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.5)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(179,181,198,1)",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.5)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(255,99,132,1)",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}],options:{aspectRatio:1.5}}}}};function I(u,C,c,s,p,o){const e=r("CChartPolarArea");return l(),d(e,{data:o.defaultData},null,8,["data"])}const K=n(q,[["render",I]]),Q=Object.freeze(Object.defineProperty({__proto__:null,CChartBarExample:S,CChartDoughnutExample:M,CChartLineExample:J,CChartPieExample:G,CChartPolarAreaExample:K,CChartRadarExample:T},Symbol.toStringTag,{value:"Module"})),U={name:"Charts",components:{...Q}};function W(u,C,c,s,p,o){const e=r("CCardHeader"),h=r("CChartLineExample"),_=r("CCardBody"),m=r("CCard"),f=r("CCol"),b=r("CChartBarExample"),g=r("CChartDoughnutExample"),x=r("CChartRadarExample"),$=r("CChartPieExample"),D=r("CChartPolarAreaExample"),B=r("CRow");return l(),d(B,null,{default:t(()=>[a(f,{md:6,class:"mb-4"},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[i(" Line Chart ")]),_:1}),a(_,null,{default:t(()=>[a(h)]),_:1})]),_:1})]),_:1}),a(f,{md:6,class:"mb-4"},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[i("Bar Chart")]),_:1}),a(_,null,{default:t(()=>[a(b)]),_:1})]),_:1})]),_:1}),a(f,{md:6,class:"mb-4"},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[i("Doughnut Chart")]),_:1}),a(_,null,{default:t(()=>[a(g)]),_:1})]),_:1})]),_:1}),a(f,{md:6,class:"mb-4"},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[i("Radar Chart")]),_:1}),a(_,null,{default:t(()=>[a(x)]),_:1})]),_:1})]),_:1}),a(f,{md:6,class:"mb-4"},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[i("Pie Chart")]),_:1}),a(_,null,{default:t(()=>[a($)]),_:1})]),_:1})]),_:1}),a(f,{md:6,class:"mb-4"},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[i("Polar Area Chart")]),_:1}),a(_,null,{default:t(()=>[a(D)]),_:1})]),_:1})]),_:1})]),_:1})}const Z=n(U,[["render",W]]);export{Z as default};
