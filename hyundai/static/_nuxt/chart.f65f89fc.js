import{C as v,p as b,a as h,b as x,B as C,L as y,c as F,d as L,P as B,T as k}from"./chart.742e63cc.js";import{p as z,L as E}from"./chartjs-plugin-zoom.esm.fef39696.js";import{a as w,r as n,o as u,D as N,j as m,h as O,u as a,p as _,c as P,Y as S,F as T,t as V,m as D,a1 as I}from"./entry.396a3fb3.js";const j=w({__name:"chart",setup(A){v.register(b,h,x,C,y,F,L,B,z,k);const i=n(null),c=n(!1),s=n({labels:["1","2"],datasets:[{data:[10,20]}]}),g=n({responsive:!0,plugins:{zoom:{pan:{enabled:!0,mode:"x",modifierKey:"ctrl"},zoom:{mode:"x",drag:{enabled:!0,borderColor:"rgb(54, 162, 235)",borderWidth:1,backgroundColor:"rgba(54, 162, 235, 0.3)"}}},title:{display:!0,position:"bottom",text:r=>{}}},transitions:{zoom:{animation:{duration:100}}}}),f=r=>{i.value=r.target.files[0],(t=>new Promise((d,o)=>{const e=new FileReader;e.onload=()=>d(e.result),e.onerror=o,e.readAsText(t)}))(i.value).then(t=>{const o=t.split(`\r
`).slice(8).map(e=>{const p=e.split(",");return{x:p[0],y:p[2]}});console.log("-----4",o),s.value.labels=o.map(e=>e.x),s.value.datasets[0].data=o.map(e=>e.y),c.value=!0,console.log(s.value)})};return(r,l)=>(u(),N(T,null,[m(a(D),null,{default:O(()=>[_("div",null,[m(a(V),{type:"file",label:"파일명",onChange:l[0]||(l[0]=t=>f(t))})])]),_:1}),_("div",null,[a(c)?(u(),P(a(E),{key:0,ref:"chart",options:a(g),data:a(s)},null,8,["options","data"])):S("",!0)])],64))}});const Y=I(j,[["__scopeId","data-v-64827d4a"]]);export{Y as default};
