import{a as A,b as D,e as T,r as p,f as k,w as P,o as U,c as H,h as d,u as e,i as h,j as t,C as S,k as i,l as V,m as I,p as n,q as c,s as f,t as g,v as M,x as N,y as X}from"./entry.6f64e414.js";const G={class:"mb-3"},L={class:"mb-3"},R={class:"mb-3"},W={class:"mb-3"},O={class:"mb-3"},z={class:"mb-3"},q={class:"d-grid gap-2 d-md-flex"},K=A({__name:"edit",async setup(E){let x,C;const y=D(),v=T(),l=p({loading:!1,carType:null,area:"",year:"",roadSurface:"",weight:"",chartData:"",testCount:""}),o=k({carTypes:[{value:"AD",text:"AD",selected:!1},{value:"BC3N",text:"BC3N",selected:!1},{value:"DM",text:"DM",selected:!1},{value:"DMc",text:"DMc",selected:!1},{value:"HCi",text:"HCi",selected:!1},{value:"HS",text:"HS",selected:!1},{value:"HS4WD",text:"HS4WD",selected:!1},{value:"IB",text:"IB",selected:!1},{value:"JA",text:"JA",selected:!1},{value:"K3",text:"K3",selected:!1},{value:"LF",text:"LF",selected:!1},{value:"LM",text:"LM",selected:!1},{value:"MD",text:"MD",selected:!1},{value:"MQ4",text:"MQ4",selected:!1},{value:"NE",text:"NE",selected:!1},{value:"NF",text:"NF",selected:!1}],areas:[{value:"NPG",text:"NPG",selected:!1}],weights:[{value:"2UP",text:"2UP",selected:!1},{value:"3UP",text:"3UP",selected:!1},{value:"4UP",text:"4UP",selected:!1},{value:"GVW",text:"GVW",selected:!1},{value:"4UP_40kg",text:"4UP_40kg",selected:!1},{value:"5UP_40kg",text:"5UP_40kg",selected:!1}],roadSurfaces:[{value:"BG",text:"BG",selected:!1},{value:"DWAY",text:"City(DriveWay)",selected:!1},{value:"FT",text:"City(FullTurn)",selected:!1},{value:"GS",text:"City(Go&Stop)",selected:!1},{value:"HANDLING",text:"City(Handling)",selected:!1},{value:"POT20_BP",text:"City(Pothole&Bump)",selected:!1},{value:"TS",text:"City(TwistSine)",selected:!1},{value:"ABS",text:"City(ABS)",selected:!1},{value:"BrokenAsphalt",text:"XC(BrokenAsphalt)",selected:!1},{value:"Manhole",text:"XC(Manhole)",selected:!1},{value:"CobbleStone",text:"XC(CobbleStone)",selected:!1},{value:"ChatterStrip",text:"XC(ChatterStrip)",selected:!1},{value:"ResonanceBump",text:"XC(ResonanceBump)",selected:!1},{value:"WashBoard",text:"XC(WashBoard)",selected:!1},{value:"SpotPatch",text:"XC(SpotPatch)",selected:!1},{value:"ChuckHole",text:"XC(ChuckHole)",selected:!1},{value:"Scurve",text:"XC(SCurve)",selected:!1},{value:"AddAsphalt",text:"XC(AddAsphalt)",selected:!1},{value:"BrokenAsphalt2",text:"XC(BrokenAsphalt2)",selected:!1},{value:"Rest",text:"XC(Rest)",selected:!1},{value:"OFFROAD",text:"OffRoad",selected:!1},{value:"UPHILL",text:"UpHill",selected:!1},{value:"DownHill",text:"downhill",selected:!1}]});[x,C]=P(()=>h({operation:"analysisFile",variables:{id:v.params.id}}).then(u=>{const{data:a}=u;if(a.value){const s=o.carTypes.findIndex(r=>r.value===a.value.analysisFile.carType),B=o.weights.findIndex(r=>r.value===a.value.analysisFile.weight),w=o.areas.findIndex(r=>r.value===a.value.analysisFile.area),b=o.roadSurfaces.findIndex(r=>r.value===a.value.analysisFile.roadSurface);o.carTypes[s].selected=!0,o.weights[B].selected=!0,o.areas[w].selected=!0,o.roadSurfaces[b].selected=!0,l.value={loading:!1,carType:a.value.analysisFile.carType,year:a.value.analysisFile.year,area:a.value.analysisFile.area,roadSurface:a.value.analysisFile.roadSurface,weight:a.value.analysisFile.weight,testCount:a.value.analysisFile.testCount,chartData:a.value.analysisFile.chartData}}}).finally(()=>{})),await x,C(),p(null);const _=p(!0),m=()=>{y.back()},F=async()=>{const u=e(l);l.value.loading=!0;const{data:a}=await h({operation:"updateAnalysisFile",variables:{id:v.params.id,carType:u.carType,year:u.year,area:u.area,roadSurface:u.roadSurface,weight:u.weight,chartData:u.chartData,testCount:u.testCount}}).finally(()=>{l.value.loading=!1});a.value&&await y.replace(`/analysis/${v.params.id}`)};return(u,a)=>(U(),H(e(X),{class:"mb-4"},{default:d(()=>[t(e(V),null,{default:d(()=>[t(e(S),{size:"sm",onClick:m},{default:d(()=>[i("목록")]),_:1})]),_:1}),t(e(N),null,{default:d(()=>[t(e(I),null,{default:d(()=>[n("div",G,[t(e(c),{for:"cardTypes"},{default:d(()=>[i("차종")]),_:1}),t(e(f),{id:"cardTypes",options:e(o).carTypes,"options-style":"text",placeholder:"차종을 선택하세요",multiple:!1,onChange:a[0]||(a[0]=s=>{e(l).carType=s[0].value})},null,8,["options"])]),n("div",L,[t(e(g),{modelValue:e(l).year,"onUpdate:modelValue":a[1]||(a[1]=s=>e(l).year=s),type:"text",label:"년도"},null,8,["modelValue"])]),n("div",R,[t(e(c),{for:"areas"},{default:d(()=>[i("장소")]),_:1}),t(e(f),{id:"areas",options:e(o).areas,"options-style":"text",placeholder:"장소를 선택하세요",multiple:!1,onChange:a[2]||(a[2]=s=>{e(l).area=s[0].value})},null,8,["options"])]),n("div",W,[t(e(c),{for:"areas"},{default:d(()=>[i("중량")]),_:1}),t(e(f),{id:"weights",options:e(o).weights,"options-style":"text",placeholder:"중량을 선택하세요",multiple:!1,onChange:a[3]||(a[3]=s=>{e(l).weight=s[0].value})},null,8,["options"])]),n("div",O,[t(e(c),{for:"areas"},{default:d(()=>[i("노면")]),_:1}),t(e(f),{id:"roadSurface",modelValue:e(l).roadSurface,"onUpdate:modelValue":a[4]||(a[4]=s=>e(l).roadSurface=s),options:e(o).roadSurfaces,"options-style":"text",placeholder:"노면을 선택하세요",multiple:!1,onChange:a[5]||(a[5]=s=>{e(l).roadSurface=s[0].value})},null,8,["modelValue","options"])]),n("div",z,[t(e(g),{modelValue:e(l).testCount,"onUpdate:modelValue":a[6]||(a[6]=s=>e(l).testCount=s),type:"text",label:"횟수"},null,8,["modelValue"])]),n("div",q,[t(e(M),{loading:e(l).loading,color:"primary",size:"sm",class:"me-md-2 col-3",disabled:!e(_),onClick:F},{default:d(()=>[i("수정")]),_:1},8,["loading","disabled"]),t(e(S),{size:"sm",class:"me-md-2 col-3",color:"secondary",onClick:m},{default:d(()=>[i("목록")]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{K as default};
