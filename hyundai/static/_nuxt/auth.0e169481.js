import{ai as i,aj as a}from"./entry.561ade7d.js";import{u as r}from"./auth.3c30ebf4.js";import"./setting.63a5edc7.js";const f=i((t,e)=>{if(t.path==="/sign-in")return;if(r().isExpired)return a("/sign-in")});export{f as default};