import{a as M,b as z,r as p,z as D,i as h,o as v,F as g,j as a,h as e,u as l,H as w,aa as E,y as H,l as N,C as f,k as s,x as R,ab as k,V,W as A,X as m,Y as d,Z as G,J as P,K as U,L as j,M as q,v as J,N as K,c as W,$ as o,I as r,p as I,a1 as X,a2 as Y,a3 as Z,G as O}from"./entry.07433182.js";import{C as Q,c as ll,d as el,P as al,L as sl,p as tl,a as nl,b as ul}from"./chart.742e63cc.js";const dl=_=>(X("data-v-1ab9fc22"),_=_(),Y(),_),ol=["href"],il=dl(()=>I("span",null,"해당 데이터를 삭제 하시겠습니까?",-1)),rl=M({__name:"index",setup(_){Q.register(ll,el,al,sl,tl,nl,ul);const C=z(),x=Z(),c=p(!1),y=p([]),n=p({loading:!1,show:!1,deleteId:void 0});D(()=>c.value,u=>{u&&h({operation:"analysisFiles",variables:{}}).then(i=>{var t;y.value=(t=i.data.value)==null?void 0:t.analysisFiles}).finally(()=>{c.value=!1})});const B=()=>{C.push("/analysis/new")},S=u=>{C.push(`/analysis/${u}`)},$=u=>{C.push(`/analysis/${u}/edit`)},T=u=>{n.value.deleteId=u,n.value.show=!0},F=()=>{n.value.loading=!0,h({operation:"deleteAnalysisFile",variables:{id:n.value.deleteId}}).then(u=>u).finally(()=>{n.value.deleteId=void 0,n.value.loading=!1,n.value.show=!1,c.value=!0})},L=(u,i)=>`${x.public.IMAGE_URL}/media/uploads/${u}/${i}`;return c.value=!0,(u,i)=>(v(),g(w,null,[a(l(k),null,{default:e(()=>[a(l(E),{xs:12},{default:e(()=>[a(l(H),{class:"mb-4"},{default:e(()=>[a(l(N),null,{default:e(()=>[a(l(f),{color:"primary",size:"sm",onClick:B},{default:e(()=>[s("업로드")]),_:1})]),_:1}),a(l(R),null,{default:e(()=>[a(l(k),null,{default:e(()=>[a(l(V),null,{default:e(()=>[a(l(A),null,{default:e(()=>[a(l(m),null,{default:e(()=>[a(l(d),null,{default:e(()=>[s("차종")]),_:1}),a(l(d),null,{default:e(()=>[s("연도")]),_:1}),a(l(d),null,{default:e(()=>[s("장소")]),_:1}),a(l(d),null,{default:e(()=>[s("중량")]),_:1}),a(l(d),null,{default:e(()=>[s("노면")]),_:1}),a(l(d),null,{default:e(()=>[s("횟수")]),_:1}),a(l(d),null,{default:e(()=>[s("상세")]),_:1}),a(l(d),null,{default:e(()=>[s("수정")]),_:1}),a(l(d),null,{default:e(()=>[s("다운로드")]),_:1}),a(l(d),null,{default:e(()=>[s("삭제")]),_:1})]),_:1})]),_:1}),a(l(G),null,{default:e(()=>[(v(!0),g(w,null,P(l(y),t=>(v(),W(l(m),{key:t.id},{default:e(()=>[a(l(o),null,{default:e(()=>[s(r(t.carType),1)]),_:2},1024),a(l(o),null,{default:e(()=>[s(r(t.year),1)]),_:2},1024),a(l(o),null,{default:e(()=>[s(r(t.area),1)]),_:2},1024),a(l(o),null,{default:e(()=>[s(r(t.weight),1)]),_:2},1024),a(l(o),null,{default:e(()=>[s(r(t.roadSurface),1)]),_:2},1024),a(l(o),null,{default:e(()=>[s(r(t.testCount),1)]),_:2},1024),a(l(o),null,{default:e(()=>[a(l(f),{size:"sm",onClick:b=>S(t.id)},{default:e(()=>[s("상세")]),_:2},1032,["onClick"])]),_:2},1024),a(l(o),null,{default:e(()=>[a(l(f),{size:"sm",onClick:b=>$(t.id)},{default:e(()=>[s("수정")]),_:2},1032,["onClick"])]),_:2},1024),a(l(o),null,{default:e(()=>[I("a",{class:"btn btn-sm",href:L(t.id,t.filename)},"다운로드",8,ol)]),_:2},1024),a(l(o),null,{default:e(()=>[a(l(f),{size:"sm",onClick:b=>T(t.id)},{default:e(()=>[s("삭제")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(l(K),{visible:l(n).show,onClose:i[1]||(i[1]=()=>{l(n).show=!1,l(n).deleteId=void 0})},{default:e(()=>[a(l(U),null,{default:e(()=>[s("확인")]),_:1}),a(l(j),null,{default:e(()=>[il]),_:1}),a(l(q),null,{default:e(()=>[a(l(f),{color:"secondary",disabled:l(n).loading,onClick:i[0]||(i[0]=()=>{l(n).show=!1,l(n).deleteId=void 0})},{default:e(()=>[s(" 취소 ")]),_:1},8,["disabled"]),a(l(J),{loading:l(n).loading,color:"primary",onClick:F},{default:e(()=>[s(" 진행 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["visible"])],64))}});const cl=O(rl,[["__scopeId","data-v-1ab9fc22"]]);export{cl as default};