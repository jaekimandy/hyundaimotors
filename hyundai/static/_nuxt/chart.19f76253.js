import{C as v,p as b,a as x,b as h,B as C,L as y,c as F,d as B,P as L,T as k}from"./chart.742e63cc.js";import{p as z,L as E}from"./chartjs-plugin-zoom.esm.7502f253.js";import{a as P,b as n,o as p,i as S,j as m,k as w,u as a,m as _,c as N,P as O,F as T,B as V,S as I,R}from"./entry.ed5cb544.js";const j=P({__name:"chart",setup(A){v.register(b,x,h,C,y,F,B,L,z,k);const i=n(null),c=n(!1),s=n({labels:["1","2"],datasets:[{data:[10,20]}]}),g=n({responsive:!0,plugins:{zoom:{pan:{enabled:!0,mode:"x",modifierKey:"ctrl"},zoom:{mode:"x",drag:{enabled:!0,borderColor:"rgb(54, 162, 235)",borderWidth:1,backgroundColor:"rgba(54, 162, 235, 0.3)"}}},title:{display:!0,position:"bottom",text:r=>{}}},transitions:{zoom:{animation:{duration:100}}}}),f=r=>{i.value=r.target.files[0],(t=>new Promise((d,o)=>{const e=new FileReader;e.onload=()=>d(e.result),e.onerror=o,e.readAsText(t)}))(i.value).then(t=>{const o=t.split(`\r
`).slice(8).map(e=>{const u=e.split(",");return{x:u[0],y:u[2]}});console.log("-----4",o),s.value.labels=o.map(e=>e.x),s.value.datasets[0].data=o.map(e=>e.y),c.value=!0,console.log(s.value)})};return(r,l)=>(p(),S(T,null,[m(a(I),null,{default:w(()=>[_("div",null,[m(a(V),{type:"file",label:"파일명",onChange:l[0]||(l[0]=t=>f(t))})])]),_:1}),_("div",null,[a(c)?(p(),N(a(E),{key:0,ref:"chart",options:a(g),data:a(s)},null,8,["options","data"])):O("",!0)])],64))}});const q=R(j,[["__scopeId","data-v-64827d4a"]]);export{q as default};
