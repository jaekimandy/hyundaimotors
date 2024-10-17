import{a as Z,r as g,b as m,w as X,e as Y,f as ee,h as w,o as _,i as T,j as a,k as l,u as e,F as I,C as $,l as t,t as d,m as h,p as C,q as z,s as G,v as O,x as k,y as F,z as L,A as S,B as A,D as ae,c as D,E as le,G as se,H as te,I as oe,J as ne,K as ie,L as j,M as E,N as re,O as H,P as ue,Q as de,R as fe}from"./entry.3ec0039f.js";import{C as ce,p as me,a as Ce,b as pe,B as _e,L as ve,c as ye,d as ge,P as be,T as we}from"./chart.742e63cc.js";import{p as he,L as ke}from"./chartjs-plugin-zoom.esm.50c0fb4d.js";const Fe={class:"mb-3"},Le={class:"mb-3"},Se=["src"],xe=Z({__name:"[id]",async setup(Pe){let M,N;ce.register(me,Ce,pe,_e,ve,ye,ge,be,he,we);const i=g({show:!1,message:"",title:""}),n=g({step:0,startPos:0,endPos:0}),v=g({show:!1}),r=g({show:!1,loading:!1,title:""}),p=g({show:!1,levelCrossingImage:""}),x=m([]);m(void 0);const q=de(),J=u=>{p.levelCrossingImage=`${q.public.IMAGE_URL}${u}`,p.show=!0},K=async()=>{n.step=0,r.loading=!0;const u=B.value.slice(n.startPos,r.endPos),{data:s}=await w({operation:"createAnalysisLevelCrossing",variables:{analysisFileId:b.params.id,chartData:U.value.concat(u).join(`\r
`),title:r.title}});s.value?await w({operation:"analysisLevelCrossings",variables:{analysisFileId:b.params.id}}).then(o=>(x.value=o.data.value.analysisLevelCrossings,o)).finally(()=>{r.loading=!1,r.show=!1}):(r.loading=!1,r.show=!1)},P=m({labels:["1","2"],datasets:[{data:[10,20]}]});X(()=>n.step,u=>{switch(u){case 1:i.title="구간선택",i.message="시작위치 구간을 선택하세요",i.show=!0;break;case 2:i.title="구간선택",i.message="완료위치 구간을 선택하세요",i.show=!0;break;case 3:i.title="구간선택",i.message=`구간 선택이 완료되었습니다
선택하신 구간은 ${n.startPos} ~ ${n.endPos} 입니다`,i.show=!0;break;case 4:v.show=!0;break}});const Q=()=>{switch(n.step){case 0:n.step=1;break}},W=m({responsive:!0,onClick:(u,s)=>{if(!(s.length<=0))switch(n.step){case 1:n.startPos=s[0].index,n.step=2;break;case 2:n.endPos=s[0].index,n.step=3;break}}}),b=Y(),f=m(void 0),B=m(),U=m();return[M,N]=ee(()=>w({operation:"analysisFile",variables:{id:b.params.id}}).then(u=>{const{data:s}=u;if(s.value){f.value={carType:s.value.analysisFile.carType,year:s.value.analysisFile.year,area:s.value.analysisFile.area,roadSurface:s.value.analysisFile.roadSurface,weight:s.value.analysisFile.weight,testCount:s.value.analysisFile.testCount,chartData:s.value.analysisFile.chartData};const o=s.value.analysisFile.chartData.split(`\r
`),y=o[2].split(",").findIndex(c=>c==="Front Left Wheel Center Force (Z)");U.value=o.slice(0,8),B.value=o.slice(8);const V=B.value.map(c=>{const R=c.split(",");return{x:R[0],y:R[y]}});P.value.labels=V.map(c=>c.x),P.value.datasets[0].data=V.map(c=>c.y)}}).finally(()=>{})),await M,N(),w({operation:"analysisLevelCrossings",variables:{analysisFileId:b.params.id}}).then(u=>(x.value=u.data.value.analysisLevelCrossings,u)).finally(()=>{}),(u,s)=>(_(),T(I,null,[a(e(G),{class:"mb-4"},{default:l(()=>[a(e($),null,{default:l(()=>[t(d(e(f).carType)+"-"+d(e(f).year)+"-"+d(e(f).area)+" / "+d(e(f).weight)+"-"+d(e(f).roadSurface)+"-"+d(e(f).testCount)+" ",1),h("div",null,[a(e(C),{color:"primary",size:"sm",onClick:Q},{default:l(()=>[t("구간선택")]),_:1})])]),_:1}),a(e(z),null,{default:l(()=>[a(e(ke),{ref:"chart",options:e(W),data:e(P)},null,8,["options","data"])]),_:1})]),_:1}),a(e(G),{class:"mb-4"},{default:l(()=>[a(e($),null,{default:l(()=>[t(" 구간목록 ")]),_:1}),a(e(z),null,{default:l(()=>[(_(!0),T(I,null,O(e(x),o=>(_(),D(e(le),{key:o.id},{default:l(()=>[a(e(se),null,{default:l(()=>[a(e(te),{disabled:o.status!=="SUCCESS"},{default:l(()=>[t(d(o.title)+"("+d(o.status)+")",1)]),_:2},1032,["disabled"]),o.status==="SUCCESS"?(_(),D(e(oe),{key:0},{default:l(()=>[a(e(ne),null,{default:l(()=>[a(e(ie),null,{default:l(()=>[a(e(j),null,{default:l(()=>[a(e(E),null,{default:l(()=>[t("컬럼명")]),_:1}),a(e(E),null,{default:l(()=>[t("상태")]),_:1}),a(e(E),null,{default:l(()=>[t("이미지")]),_:1})]),_:1})]),_:1}),a(e(re),null,{default:l(()=>[(_(!0),T(I,null,O(JSON.parse(o.images),y=>(_(),D(e(j),null,{default:l(()=>[a(e(H),null,{default:l(()=>[t(d(y.column_name),1)]),_:2},1024),a(e(H),null,{default:l(()=>[t(d(y.status),1)]),_:2},1024),a(e(H),null,{default:l(()=>[a(e(C),{size:"small",onClick:V=>J(y.filename)},{default:l(()=>[t("이미지보기")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]),_:2},1024)):ue("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),a(e(S),{visible:e(i).show,onClose:s[1]||(s[1]=()=>{e(i).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t(d(e(i).title),1)]),_:1}),a(e(F),null,{default:l(()=>[t(d(e(i).message),1)]),_:1}),a(e(L),null,{default:l(()=>[a(e(C),{color:"secondary",onClick:s[0]||(s[0]=()=>{e(i).show=!1,e(n).step===3&&(e(n).step=4)})},{default:l(()=>[t(" 확인 ")]),_:1})]),_:1})]),_:1},8,["visible"]),a(e(S),{visible:e(v).show,onClose:s[6]||(s[6]=()=>{e(v).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t("선택하신 구간으로 저장하시겠습니까?")]),_:1}),a(e(F),null,{default:l(()=>[h("div",Fe,[a(e(A),{modelValue:e(n).startPos,"onUpdate:modelValue":s[2]||(s[2]=o=>e(n).startPos=o),type:"text",label:"시작위치"},null,8,["modelValue"])]),h("div",Le,[a(e(A),{modelValue:e(n).endPos,"onUpdate:modelValue":s[3]||(s[3]=o=>e(n).endPos=o),type:"text",label:"완료위치"},null,8,["modelValue"])])]),_:1}),a(e(L),null,{default:l(()=>[a(e(C),{color:"secondary",onClick:s[4]||(s[4]=()=>{e(v).show=!1})},{default:l(()=>[t(" 취소 ")]),_:1}),a(e(C),{color:"primary",onClick:s[5]||(s[5]=()=>{e(v).show=!1,e(r).show=!0})},{default:l(()=>[t(" 잔행 ")]),_:1})]),_:1})]),_:1},8,["visible"]),a(e(S),{visible:e(r).show,onClose:s[9]||(s[9]=()=>{e(r).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t("채널명을 입력하세요")]),_:1}),a(e(F),null,{default:l(()=>[a(e(A),{modelValue:e(r).title,"onUpdate:modelValue":s[7]||(s[7]=o=>e(r).title=o),type:"text",label:"채널명"},null,8,["modelValue"])]),_:1}),a(e(L),null,{default:l(()=>[a(e(C),{color:"secondary",disabled:e(r).loading,onClick:s[8]||(s[8]=()=>{e(i).show=!1})},{default:l(()=>[t(" 닫기 ")]),_:1},8,["disabled"]),a(e(ae),{loading:e(r).loading,color:"primary",onClick:K},{default:l(()=>[t(" 저장 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["visible"]),a(e(S),{visible:e(p).show,size:"lg",onClose:s[11]||(s[11]=()=>{e(p).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t("Level Crossing")]),_:1}),a(e(F),null,{default:l(()=>[h("img",{src:e(p).levelCrossingImage,alt:""},null,8,Se)]),_:1}),a(e(L),null,{default:l(()=>[a(e(C),{color:"secondary",onClick:s[10]||(s[10]=()=>{e(p).show=!1})},{default:l(()=>[t(" 닫기 ")]),_:1})]),_:1})]),_:1},8,["visible"])],64))}});const Ie=fe(xe,[["__scopeId","data-v-9ad010b4"]]);export{Ie as default};
