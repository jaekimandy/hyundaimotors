import{a as k,y as T,r as u,K as U,L as f,o as y,c as h,e as s,u as e,h as o,C as V,i,k as H,x as L,j as n,O as v,P as c,v as C,l as N,s as M,m as X,f as G,p as W}from"./entry.9f149934.js";import{C as O,p as R,a as z,b as I,B as E,L as K,c as J,d as Q,P as j,T as q}from"./chart.742e63cc.js";import{L as Y}from"./index.2d710176.js";import{p as Z}from"./chartjs-plugin-zoom.esm.03d8f1fb.js";const $={class:"mb-3"},ee={class:"mb-3"},te={class:"mb-3"},ae={class:"mb-3"},le={class:"mb-3"},oe={class:"mb-3"},se=k({__name:"new",props:{show:{type:Boolean,default:!1}},setup(_){const g=_,S=T();O.register(R,z,I,E,K,J,Q,j,Z,q);const b=u(!1);U(()=>g.show,r=>{r&&(b.value=r)});const d=f({carTypes:[{value:"AD",text:"AD"},{value:"BC3N",text:"BC3N"},{value:"DM",text:"DM"},{value:"DMc",text:"DMc"},{value:"HCi",text:"HCi"},{value:"HS",text:"HS"},{value:"HS4WD",text:"HS4WD"},{value:"IB",text:"IB"},{value:"JA",text:"JA"},{value:"K3",text:"K3"},{value:"LF",text:"LF"},{value:"LM",text:"LM"},{value:"MD",text:"MD"},{value:"MQ4",text:"MQ4"},{value:"NE",text:"NE"},{value:"NF",text:"NF"}],areas:[{value:"NPG",text:"NPG"}],weights:[{value:"2UP",text:"2UP"},{value:"3UP",text:"3UP"},{value:"4UP",text:"4UP"},{value:"GVW",text:"GVW"},{value:"4UP_40kg",text:"4UP_40kg"},{value:"5UP_40kg",text:"5UP_40kg"}],roadSurfaces:[{value:"BG",text:"BG"},{value:"DWAY",text:"City(DriveWay)"},{value:"FT",text:"City(FullTurn)"},{value:"GS",text:"City(Go&Stop)"},{value:"HANDLING",text:"City(Handling)"},{value:"POT20_BP",text:"City(Pothole&Bump)"},{value:"TS",text:"City(TwistSine)"},{value:"ABS",text:"City(ABS)"},{value:"BrokenAsphalt",text:"XC(BrokenAsphalt)"},{value:"Manhole",text:"XC(Manhole)"},{value:"CobbleStone",text:"XC(CobbleStone)"},{value:"ChatterStrip",text:"XC(ChatterStrip)"},{value:"ResonanceBump",text:"XC(ResonanceBump)"},{value:"WashBoard",text:"XC(WashBoard)"},{value:"SpotPatch",text:"XC(SpotPatch)"},{value:"ChuckHole",text:"XC(ChuckHole)"},{value:"Scurve",text:"XC(SCurve)"},{value:"AddAsphalt",text:"XC(AddAsphalt)"},{value:"BrokenAsphalt2",text:"XC(BrokenAsphalt2)"},{value:"Rest",text:"XC(Rest)"},{value:"OFFROAD",text:"OffRoad"},{value:"UPHILL",text:"UpHill"},{value:"DownHill",text:"downhill"}]}),t=f({loading:!1,carType:"",area:"",year:"",roadSurface:"",weight:"",chartData:"",testCount:""}),m=u(null),x=u(!1),B=u({labels:["1","2"],datasets:[{data:[10,20]}]}),P=u({responsive:!0,plugins:{zoom:{pan:{enabled:!0,mode:"x",modifierKey:"ctrl"},zoom:{mode:"x",drag:{enabled:!0,borderColor:"rgb(54, 162, 235)",borderWidth:1,backgroundColor:"rgba(54, 162, 235, 0.3)"}}},title:{display:!0,position:"bottom",text:r=>{}}},transitions:{zoom:{animation:{duration:100}}}}),w=async()=>{const{data:r}=await G({operation:"createAnalysisFile",variables:{carType:t.carType,year:t.year,area:t.area,roadSurface:t.roadSurface,weight:t.weight,chartData:t.chartData,testCount:t.testCount}}).finally(()=>{t.loading=!1});r.value&&await S.push("/analysis")},A=r=>{m.value=r.target.files[0],(a=>new Promise((D,F)=>{const p=new FileReader;p.onload=()=>D(p.result),p.onerror=F,p.readAsText(a)}))(m.value).then(a=>{t.chartData=a,x.value=!0})};return(r,l)=>(y(),h(e(X),{class:"mb-4"},{default:s(()=>[o(e(H),null,{default:s(()=>[o(e(V),{color:"primary",size:"sm",disabled:!e(x),onClick:w},{default:s(()=>[i("등록")]),_:1},8,["disabled"])]),_:1}),o(e(N),null,{default:s(()=>[o(e(L),null,{default:s(()=>[n("div",$,[o(e(v),{for:"cardTypes"},{default:s(()=>[i("차종")]),_:1}),o(e(c),{id:"cardTypes",options:e(d).carTypes,"options-style":"text",placeholder:"차종을 선택하세요",multiple:!1,onChange:l[0]||(l[0]=a=>{e(t).carType=a[0].value})},null,8,["options"])]),n("div",ee,[o(e(C),{modelValue:e(t).year,"onUpdate:modelValue":l[1]||(l[1]=a=>e(t).year=a),type:"text",label:"년도"},null,8,["modelValue"])]),n("div",te,[o(e(v),{for:"areas"},{default:s(()=>[i("장소")]),_:1}),o(e(c),{id:"areas",options:e(d).areas,"options-style":"text",placeholder:"장소를 선택하세요",multiple:!1,onChange:l[2]||(l[2]=a=>{e(t).area=a[0].value})},null,8,["options"])]),n("div",ae,[o(e(v),{for:"areas"},{default:s(()=>[i("중량")]),_:1}),o(e(c),{id:"weights",options:e(d).weights,"options-style":"text",placeholder:"중량을 선택하세요",multiple:!1,onChange:l[3]||(l[3]=a=>{e(t).weight=a[0].value})},null,8,["options"])]),n("div",le,[o(e(v),{for:"areas"},{default:s(()=>[i("노면")]),_:1}),o(e(c),{id:"roadSurface",modelValue:e(t).roadSurface,"onUpdate:modelValue":l[4]||(l[4]=a=>e(t).roadSurface=a),options:e(d).roadSurfaces,"options-style":"text",placeholder:"노면을 선택하세요",multiple:!1,onChange:l[5]||(l[5]=a=>{e(t).roadSurface=a[0].value})},null,8,["modelValue","options"])]),n("div",oe,[o(e(C),{modelValue:e(t).testCount,"onUpdate:modelValue":l[6]||(l[6]=a=>e(t).testCount=a),type:"text",label:"횟수"},null,8,["modelValue"])]),o(e(C),{type:"file",label:"측정자료",onChange:l[7]||(l[7]=a=>A(a))})]),_:1})]),_:1}),n("div",null,[e(x)?(y(),h(e(Y),{key:0,ref:"chart",options:e(P),data:e(B)},null,8,["options","data"])):M("",!0)])]),_:1}))}});const pe=W(se,[["__scopeId","data-v-4cb421ff"]]);export{pe as default};
