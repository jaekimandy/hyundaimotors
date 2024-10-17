import{a as k,b as N,e as P,r as x,f as U,w as H,o as V,c as I,h as i,u as e,i as g,j as t,C as F,k as c,l as M,m as X,p as f,q as v,s as p,t as _,v as G,x as L,y as R}from"./entry.565e85f7.js";const W={class:"mb-3"},O={class:"mb-3"},z={class:"mb-3"},E={class:"mb-3"},q={class:"mb-3"},J={class:"mb-3"},K={class:"d-grid gap-2 d-md-flex"},Y=k({__name:"edit",async setup(Q){let y,m;const h=N(),C=P(),s=x({loading:!1,chartCellName:"",carType:null,area:"",year:"",roadSurface:"",weight:"",chartData:"",testCount:""}),o=U({carTypes:[{value:"AD",text:"AD",selected:!1},{value:"BC3N",text:"BC3N",selected:!1},{value:"DM",text:"DM",selected:!1},{value:"DMc",text:"DMc",selected:!1},{value:"HCi",text:"HCi",selected:!1},{value:"HS",text:"HS",selected:!1},{value:"HS4WD",text:"HS4WD",selected:!1},{value:"IB",text:"IB",selected:!1},{value:"JA",text:"JA",selected:!1},{value:"K3",text:"K3",selected:!1},{value:"LF",text:"LF",selected:!1},{value:"LM",text:"LM",selected:!1},{value:"MD",text:"MD",selected:!1},{value:"MQ4",text:"MQ4",selected:!1},{value:"NE",text:"NE",selected:!1},{value:"NF",text:"NF",selected:!1}],areas:[{value:"NPG",text:"NPG",selected:!1}],weights:[{value:"2UP",text:"2UP",selected:!1},{value:"3UP",text:"3UP",selected:!1},{value:"4UP",text:"4UP",selected:!1},{value:"GVW",text:"GVW",selected:!1},{value:"4UP_40kg",text:"4UP_40kg",selected:!1},{value:"5UP_40kg",text:"5UP_40kg",selected:!1}],roadSurfaces:[{value:"BG",text:"BG",selected:!1},{value:"DWAY",text:"City(DriveWay)",selected:!1},{value:"FT",text:"City(FullTurn)",selected:!1},{value:"GS",text:"City(Go&Stop)",selected:!1},{value:"HANDLING",text:"City(Handling)",selected:!1},{value:"POT20_BP",text:"City(Pothole&Bump)",selected:!1},{value:"TS",text:"City(TwistSine)",selected:!1},{value:"ABS",text:"City(ABS)",selected:!1},{value:"BrokenAsphalt",text:"XC(BrokenAsphalt)",selected:!1},{value:"Manhole",text:"XC(Manhole)",selected:!1},{value:"CobbleStone",text:"XC(CobbleStone)",selected:!1},{value:"ChatterStrip",text:"XC(ChatterStrip)",selected:!1},{value:"ResonanceBump",text:"XC(ResonanceBump)",selected:!1},{value:"WashBoard",text:"XC(WashBoard)",selected:!1},{value:"SpotPatch",text:"XC(SpotPatch)",selected:!1},{value:"ChuckHole",text:"XC(ChuckHole)",selected:!1},{value:"Scurve",text:"XC(SCurve)",selected:!1},{value:"AddAsphalt",text:"XC(AddAsphalt)",selected:!1},{value:"BrokenAsphalt2",text:"XC(BrokenAsphalt2)",selected:!1},{value:"Rest",text:"XC(Rest)",selected:!1},{value:"OFFROAD",text:"OffRoad",selected:!1},{value:"UPHILL",text:"UpHill",selected:!1},{value:"DownHill",text:"downhill",selected:!1}]});[y,m]=H(()=>g({operation:"analysisFile",variables:{id:C.params.id}}).then(d=>{var l;const{data:a}=d;if(((l=a.value)==null?void 0:l.analysisFile)==null)throw new Error("NotFound File");if(a.value){const b=o.carTypes.findIndex(n=>{var u,r;return n.value===((r=(u=a.value)==null?void 0:u.analysisFile)==null?void 0:r.carType)}),A=o.weights.findIndex(n=>{var u,r;return n.value===((r=(u=a.value)==null?void 0:u.analysisFile)==null?void 0:r.weight)}),D=o.areas.findIndex(n=>{var u,r;return n.value===((r=(u=a.value)==null?void 0:u.analysisFile)==null?void 0:r.area)}),T=o.roadSurfaces.findIndex(n=>{var u,r;return n.value===((r=(u=a.value)==null?void 0:u.analysisFile)==null?void 0:r.roadSurface)});o.carTypes[b].selected=!0,o.weights[A].selected=!0,o.areas[D].selected=!0,o.roadSurfaces[T].selected=!0,s.value={loading:!1,chartCellName:a.value.analysisFile.chartCellName,carType:a.value.analysisFile.carType,year:a.value.analysisFile.year,area:a.value.analysisFile.area,roadSurface:a.value.analysisFile.roadSurface,weight:a.value.analysisFile.weight,testCount:a.value.analysisFile.testCount,chartData:a.value.analysisFile.chartData}}}).finally(()=>{})),await y,m(),x(null);const w=x(!0),S=()=>{h.back()},B=async()=>{const d=e(s);s.value.loading=!0;const{data:a}=await g({operation:"updateAnalysisFile",variables:{id:C.params.id,chartCellName:d.chartCellName,carType:d.carType,year:d.year,area:d.area,roadSurface:d.roadSurface,weight:d.weight,chartData:d.chartData,testCount:d.testCount}}).finally(()=>{s.value.loading=!1});a.value&&await h.replace(`/analysis/${C.params.id}`)};return(d,a)=>(V(),I(e(R),{class:"mb-4"},{default:i(()=>[t(e(M),null,{default:i(()=>[t(e(F),{size:"sm",onClick:S},{default:i(()=>[c("목록")]),_:1})]),_:1}),t(e(L),null,{default:i(()=>[t(e(X),null,{default:i(()=>[f("div",W,[t(e(v),{for:"cardTypes"},{default:i(()=>[c("차종")]),_:1}),t(e(p),{id:"cardTypes",options:e(o).carTypes,"options-style":"text",placeholder:"차종을 선택하세요",multiple:!1,onChange:a[0]||(a[0]=l=>{e(s).carType=l[0].value})},null,8,["options"])]),f("div",O,[t(e(_),{modelValue:e(s).year,"onUpdate:modelValue":a[1]||(a[1]=l=>e(s).year=l),type:"text",label:"년도"},null,8,["modelValue"])]),f("div",z,[t(e(v),{for:"areas"},{default:i(()=>[c("장소")]),_:1}),t(e(p),{id:"areas",options:e(o).areas,"options-style":"text",placeholder:"장소를 선택하세요",multiple:!1,onChange:a[2]||(a[2]=l=>{e(s).area=l[0].value})},null,8,["options"])]),f("div",E,[t(e(v),{for:"areas"},{default:i(()=>[c("중량")]),_:1}),t(e(p),{id:"weights",options:e(o).weights,"options-style":"text",placeholder:"중량을 선택하세요",multiple:!1,onChange:a[3]||(a[3]=l=>{e(s).weight=l[0].value})},null,8,["options"])]),f("div",q,[t(e(v),{for:"areas"},{default:i(()=>[c("노면")]),_:1}),t(e(p),{id:"roadSurface",modelValue:e(s).roadSurface,"onUpdate:modelValue":a[4]||(a[4]=l=>e(s).roadSurface=l),options:e(o).roadSurfaces,"options-style":"text",placeholder:"노면을 선택하세요",multiple:!1,onChange:a[5]||(a[5]=l=>{e(s).roadSurface=l[0].value})},null,8,["modelValue","options"])]),f("div",J,[t(e(_),{modelValue:e(s).testCount,"onUpdate:modelValue":a[6]||(a[6]=l=>e(s).testCount=l),type:"text",label:"횟수"},null,8,["modelValue"])]),f("div",K,[t(e(G),{loading:e(s).loading,color:"primary",size:"sm",class:"me-md-2 col-3",disabled:!e(w),onClick:B},{default:i(()=>[c("수정")]),_:1},8,["loading","disabled"]),t(e(F),{size:"sm",class:"me-md-2 col-3",color:"secondary",onClick:S},{default:i(()=>[c("목록")]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{Y as default};