import{C as v,p as b,a as h,b as x,B as C,L as y,c as F,d as L,P as B,T as k}from"./chart.742e63cc.js";import{L as z}from"./index.806cdc45.js";import{a as w,r,o as u,b as E,e as m,w as N,u as t,f as _,c as O,h as P,F as S,C as T,i as V,j as I}from"./entry.c0ed886f.js";import{p as j}from"./chartjs-plugin-zoom.esm.0abc0af9.js";const A=w({__name:"chart",setup(D){v.register(b,h,x,C,y,F,L,B,j,k);const i=r(null),c=r(!1),s=r({labels:["1","2"],datasets:[{data:[10,20]}]}),f=r({responsive:!0,plugins:{zoom:{pan:{enabled:!0,mode:"x",modifierKey:"ctrl"},zoom:{mode:"x",drag:{enabled:!0,borderColor:"rgb(54, 162, 235)",borderWidth:1,backgroundColor:"rgba(54, 162, 235, 0.3)"}}},title:{display:!0,position:"bottom",text:n=>{}}},transitions:{zoom:{animation:{duration:100}}}}),g=n=>{i.value=n.target.files[0],(a=>new Promise((d,o)=>{const e=new FileReader;e.onload=()=>d(e.result),e.onerror=o,e.readAsText(a)}))(i.value).then(a=>{const o=a.split(`\r
`).slice(8).map(e=>{const p=e.split(",");return{x:p[0],y:p[2]}});console.log("-----4",o),s.value.labels=o.map(e=>e.x),s.value.datasets[0].data=o.map(e=>e.y),c.value=!0,console.log(s.value)})};return(n,l)=>(u(),E(S,null,[m(t(V),null,{default:N(()=>[_("div",null,[m(t(T),{type:"file",label:"파일명",onChange:l[0]||(l[0]=a=>g(a))})])]),_:1}),_("div",null,[t(c)?(u(),O(t(z),{key:0,ref:"chart",options:t(f),data:t(s)},null,8,["options","data"])):P("",!0)])],64))}});const G=I(A,[["__scopeId","data-v-64827d4a"]]);export{G as default};