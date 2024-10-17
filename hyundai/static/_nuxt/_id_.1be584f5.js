import{a as Z,r as b,b as m,w as X,e as Y,f as ee,h as w,o as v,i as T,j as a,k as l,u as e,F as I,C as z,l as t,t as d,m as h,p,q as U,s as G,v as O,x as k,y as F,z as L,A as x,B as A,D as ae,c as D,E as le,G as se,H as te,I as oe,J as ne,K as ie,L as j,M as H,N as ue,O as E,P as re,Q as de,R as fe}from"./entry.53813aec.js";import{C as ce,p as me,a as pe,b as Ce,B as _e,L as ve,c as ye,d as be,P as ge,T as we}from"./chart.742e63cc.js";import{p as he,L as ke}from"./chartjs-plugin-zoom.esm.1f418b08.js";const Fe={class:"mb-3"},Le={class:"mb-3"},xe=["src"],Pe=Z({__name:"[id]",async setup(Se){let M,N;ce.register(me,pe,Ce,_e,ve,ye,be,ge,he,we);const i=b({show:!1,message:"",title:""}),n=b({step:0,startPos:0,endPos:0}),y=b({show:!1}),u=b({show:!1,loading:!1,title:""}),C=b({show:!1,levelCrossingImage:""}),P=m([]);m(void 0);const q=de(),J=r=>{C.levelCrossingImage=`${q.public.IMAGE_URL}${r}`,C.show=!0},K=async()=>{n.step=0,u.loading=!0;const r=B.value.slice(n.startPos,u.endPos),{data:s}=await w({operation:"createAnalysisLevelCrossing",variables:{analysisFileId:g.params.id,chartData:R.value.concat(r).join(`\r
`),title:u.title}});s.value?await w({operation:"analysisLevelCrossings",variables:{analysisFileId:g.params.id}}).then(o=>(P.value=o.data.value.analysisLevelCrossings,o)).finally(()=>{u.loading=!1,u.show=!1}):(u.loading=!1,u.show=!1)},S=m({labels:["1","2"],datasets:[{data:[10,20]}]});X(()=>n.step,r=>{switch(r){case 1:i.title="구간선택",i.message="시작위치 구간을 선택하세요",i.show=!0;break;case 2:i.title="구간선택",i.message="완료위치 구간을 선택하세요",i.show=!0;break;case 3:i.title="구간선택",i.message=`구간 선택이 완료되었습니다
선택하신 구간은 ${n.startPos} ~ ${n.endPos} 입니다`,i.show=!0;break;case 4:y.show=!0;break}});const Q=()=>{switch(n.step){case 0:n.step=1;break}},W=m({responsive:!0,onClick:(r,s)=>{if(!(s.length<=0))switch(n.step){case 1:n.startPos=s[0].index,n.step=2;break;case 2:n.endPos=s[0].index,n.step=3;break}}}),g=Y(),f=m(void 0),B=m(),R=m();return[M,N]=ee(()=>w({operation:"analysisFile",variables:{id:g.params.id}}).then(r=>{const{data:s}=r;if(s.value){f.value={carType:s.value.analysisFile.carType,year:s.value.analysisFile.year,area:s.value.analysisFile.area,roadSurface:s.value.analysisFile.roadSurface,weight:s.value.analysisFile.weight,testCount:s.value.analysisFile.testCount,chartData:s.value.analysisFile.chartData};const o=s.value.analysisFile.chartData.split(`\r
`),_=o[2].split(",").findIndex(c=>c==="Front Left Wheel Center Force (Z)");R.value=o.slice(0,8),B.value=o.slice(8);const V=B.value.map(c=>{const $=c.split(",");return{x:$[0],y:$[_]}});S.value.labels=V.map(c=>c.x),S.value.datasets[0].data=V.map(c=>c.y)}}).finally(()=>{})),await M,N(),w({operation:"analysisLevelCrossings",variables:{analysisFileId:g.params.id}}).then(r=>(P.value=r.data.value.analysisLevelCrossings,r)).finally(()=>{}),(r,s)=>(v(),T(I,null,[a(e(G),{class:"mb-4"},{default:l(()=>[a(e(z),null,{default:l(()=>[t(d(e(f).carType)+"-"+d(e(f).year)+"-"+d(e(f).area)+" / "+d(e(f).weight)+"-"+d(e(f).roadSurface)+"-"+d(e(f).testCount)+" ",1),h("div",null,[a(e(p),{color:"primary",size:"sm",onClick:Q},{default:l(()=>[t("구간선택")]),_:1})])]),_:1}),a(e(U),null,{default:l(()=>[a(e(ke),{ref:"chart",options:e(W),data:e(S)},null,8,["options","data"])]),_:1})]),_:1}),a(e(G),{class:"mb-4"},{default:l(()=>[a(e(z),null,{default:l(()=>[t(" 구간목록 ")]),_:1}),a(e(U),null,{default:l(()=>[(v(!0),T(I,null,O(e(P),o=>(v(),D(e(le),{key:o.id},{default:l(()=>[a(e(se),null,{default:l(()=>[a(e(te),{disabled:o.status!=="Success"},{default:l(()=>[t(d(o.title)+"("+d(o.status)+")",1)]),_:2},1032,["disabled"]),o.status==="Success"?(v(),D(e(oe),{key:0},{default:l(()=>[a(e(ne),null,{default:l(()=>[a(e(ie),null,{default:l(()=>[a(e(j),null,{default:l(()=>[a(e(H),null,{default:l(()=>[t("컬럼명")]),_:1}),a(e(H),null,{default:l(()=>[t("상태")]),_:1}),a(e(H),null,{default:l(()=>[t("이미지")]),_:1})]),_:1})]),_:1}),a(e(ue),null,{default:l(()=>[(v(!0),T(I,null,O(JSON.parse(o.images),_=>(v(),D(e(j),null,{default:l(()=>[a(e(E),null,{default:l(()=>[t(d(_.column_name),1)]),_:2},1024),a(e(E),null,{default:l(()=>[t(d(_.status),1)]),_:2},1024),a(e(E),null,{default:l(()=>[a(e(p),{size:"small",disabled:_.status!=="Success",onClick:V=>J(_.filename)},{default:l(()=>[t("이미지보기")]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]),_:2},1024)):re("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),a(e(x),{visible:e(i).show,onClose:s[1]||(s[1]=()=>{e(i).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t(d(e(i).title),1)]),_:1}),a(e(F),null,{default:l(()=>[t(d(e(i).message),1)]),_:1}),a(e(L),null,{default:l(()=>[a(e(p),{color:"secondary",onClick:s[0]||(s[0]=()=>{e(i).show=!1,e(n).step===3&&(e(n).step=4)})},{default:l(()=>[t(" 확인 ")]),_:1})]),_:1})]),_:1},8,["visible"]),a(e(x),{visible:e(y).show,onClose:s[6]||(s[6]=()=>{e(y).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t("선택하신 구간으로 저장하시겠습니까?")]),_:1}),a(e(F),null,{default:l(()=>[h("div",Fe,[a(e(A),{modelValue:e(n).startPos,"onUpdate:modelValue":s[2]||(s[2]=o=>e(n).startPos=o),type:"text",label:"시작위치"},null,8,["modelValue"])]),h("div",Le,[a(e(A),{modelValue:e(n).endPos,"onUpdate:modelValue":s[3]||(s[3]=o=>e(n).endPos=o),type:"text",label:"완료위치"},null,8,["modelValue"])])]),_:1}),a(e(L),null,{default:l(()=>[a(e(p),{color:"secondary",onClick:s[4]||(s[4]=()=>{e(y).show=!1})},{default:l(()=>[t(" 취소 ")]),_:1}),a(e(p),{color:"primary",onClick:s[5]||(s[5]=()=>{e(y).show=!1,e(u).show=!0})},{default:l(()=>[t(" 잔행 ")]),_:1})]),_:1})]),_:1},8,["visible"]),a(e(x),{visible:e(u).show,onClose:s[9]||(s[9]=()=>{e(u).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t("채널명을 입력하세요")]),_:1}),a(e(F),null,{default:l(()=>[a(e(A),{modelValue:e(u).title,"onUpdate:modelValue":s[7]||(s[7]=o=>e(u).title=o),type:"text",label:"채널명"},null,8,["modelValue"])]),_:1}),a(e(L),null,{default:l(()=>[a(e(p),{color:"secondary",disabled:e(u).loading,onClick:s[8]||(s[8]=()=>{e(i).show=!1})},{default:l(()=>[t(" 닫기 ")]),_:1},8,["disabled"]),a(e(ae),{loading:e(u).loading,color:"primary",onClick:K},{default:l(()=>[t(" 저장 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["visible"]),a(e(x),{visible:e(C).show,size:"lg",onClose:s[11]||(s[11]=()=>{e(C).show=!1})},{default:l(()=>[a(e(k),null,{default:l(()=>[t("Level Crossing")]),_:1}),a(e(F),null,{default:l(()=>[h("img",{src:e(C).levelCrossingImage,alt:""},null,8,xe)]),_:1}),a(e(L),null,{default:l(()=>[a(e(p),{color:"secondary",onClick:s[10]||(s[10]=()=>{e(C).show=!1})},{default:l(()=>[t(" 닫기 ")]),_:1})]),_:1})]),_:1},8,["visible"])],64))}});const Ie=fe(Pe,[["__scopeId","data-v-a186b790"]]);export{Ie as default};