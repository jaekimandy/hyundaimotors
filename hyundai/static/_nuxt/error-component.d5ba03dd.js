import{o as m,c as E,n as f,g,u as s,d as n,_ as a}from"./entry.eba0565c.js";const k={__name:"nuxt-error-page",props:{error:Object},setup(c){const u=c,{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),o=r===404,i=t.statusMessage??(o?"Page Not Found":"Internal Server Error"),p=t.message||t.toString(),_=void 0,d=o?n(()=>a(()=>import("./error-404.29d3d7a1.js"),["./error-404.29d3d7a1.js","./entry.eba0565c.js","./entry.8b81f0c0.css","./error-404.23f2309d.css"],import.meta.url).then(e=>e.default||e)):n(()=>a(()=>import("./error-500.d263fd4e.js"),["./error-500.d263fd4e.js","./entry.eba0565c.js","./entry.8b81f0c0.css","./error-500.aa16ed4d.css"],import.meta.url).then(e=>e.default||e));return(e,l)=>(m(),E(s(d),f(g({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=k;export{h as default};
