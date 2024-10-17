import{a as D,b as P,r as c,z as F,f as y,o as T,c as U,h as s,u as e,j as o,C as S,k as n,l as H,m as V,p as r,q as v,s as p,t as C,v as M,x as N,y as X,i as G}from"./entry.2a0ab3cc.js";const L={class:"mb-3"},R={class:"mb-3"},W={class:"mb-3"},I={class:"mb-3"},z={class:"mb-3"},O={class:"mb-3"},q={class:"mb-3"},E={class:"d-grid gap-2 d-md-flex"},K=D({__name:"new",props:{show:{type:Boolean,default:!1}},setup(g){const B=g,x=P(),b=c(!1);F(()=>B.show,u=>{u&&(b.value=u)});const i=y({carTypes:[{value:"AD",text:"AD"},{value:"BC3N",text:"BC3N"},{value:"DM",text:"DM"},{value:"DMc",text:"DMc"},{value:"HCi",text:"HCi"},{value:"HS",text:"HS"},{value:"HS4WD",text:"HS4WD"},{value:"IB",text:"IB"},{value:"JA",text:"JA"},{value:"K3",text:"K3"},{value:"LF",text:"LF"},{value:"LM",text:"LM"},{value:"MD",text:"MD"},{value:"MQ4",text:"MQ4"},{value:"NE",text:"NE"},{value:"NF",text:"NF"}],areas:[{value:"NPG",text:"NPG"}],weights:[{value:"2UP",text:"2UP"},{value:"3UP",text:"3UP"},{value:"4UP",text:"4UP"},{value:"GVW",text:"GVW"},{value:"4UP_40kg",text:"4UP_40kg"},{value:"5UP_40kg",text:"5UP_40kg"}],roadSurfaces:[{value:"BG",text:"BG"},{value:"DWAY",text:"City(DriveWay)"},{value:"FT",text:"City(FullTurn)"},{value:"GS",text:"City(Go&Stop)"},{value:"HANDLING",text:"City(Handling)"},{value:"POT20_BP",text:"City(Pothole&Bump)"},{value:"TS",text:"City(TwistSine)"},{value:"ABS",text:"City(ABS)"},{value:"BrokenAsphalt",text:"XC(BrokenAsphalt)"},{value:"Manhole",text:"XC(Manhole)"},{value:"CobbleStone",text:"XC(CobbleStone)"},{value:"ChatterStrip",text:"XC(ChatterStrip)"},{value:"ResonanceBump",text:"XC(ResonanceBump)"},{value:"WashBoard",text:"XC(WashBoard)"},{value:"SpotPatch",text:"XC(SpotPatch)"},{value:"ChuckHole",text:"XC(ChuckHole)"},{value:"Scurve",text:"XC(SCurve)"},{value:"AddAsphalt",text:"XC(AddAsphalt)"},{value:"BrokenAsphalt2",text:"XC(BrokenAsphalt2)"},{value:"Rest",text:"XC(Rest)"},{value:"OFFROAD",text:"OffRoad"},{value:"UPHILL",text:"UpHill"},{value:"DownHill",text:"downhill"}]}),t=y({loading:!1,carType:"",area:"",year:"",roadSurface:"",weight:"",chartData:"",testCount:""}),f=c(null),m=c(!1),h=()=>{x.back()},_=async()=>{if(!t.carType){alert("차종을 선택하셔야 합니다");return}if(!t.year){alert("년도를 입력하셔야 합니다");return}if(!t.area){alert("장소를 선택하셔야 합니다");return}if(!t.roadSurface){alert("노면을 선택하셔야 합니다");return}if(!t.weight){alert("중량을 선택하셔야 합니다");return}if(!t.testCount){alert("횟수를 입력 합니다");return}const{data:u}=await G({operation:"createAnalysisFile",variables:{carType:t.carType,year:t.year,area:t.area,roadSurface:t.roadSurface,weight:t.weight,chartData:t.chartData,testCount:t.testCount}}).finally(()=>{t.loading=!1});u.value&&await x.push("/analysis")},w=u=>{f.value=u.target.files[0],(a=>new Promise((A,k)=>{const d=new FileReader;d.onload=()=>A(d.result),d.onerror=k,d.readAsText(a)}))(f.value).then(a=>{t.chartData=a,m.value=!0})};return(u,l)=>(T(),U(e(X),{class:"mb-4"},{default:s(()=>[o(e(H),null,{default:s(()=>[o(e(S),{size:"sm",onClick:h},{default:s(()=>[n("목록")]),_:1})]),_:1}),o(e(N),null,{default:s(()=>[o(e(V),null,{default:s(()=>[r("div",L,[o(e(v),{for:"cardTypes"},{default:s(()=>[n("차종")]),_:1}),o(e(p),{id:"cardTypes",options:e(i).carTypes,"options-style":"text",placeholder:"차종을 선택하세요",multiple:!1,onChange:l[0]||(l[0]=a=>{e(t).carType=a[0].value})},null,8,["options"])]),r("div",R,[o(e(C),{modelValue:e(t).year,"onUpdate:modelValue":l[1]||(l[1]=a=>e(t).year=a),type:"text",label:"년도"},null,8,["modelValue"])]),r("div",W,[o(e(v),{for:"areas"},{default:s(()=>[n("장소")]),_:1}),o(e(p),{id:"areas",options:e(i).areas,"options-style":"text",placeholder:"장소를 선택하세요",multiple:!1,onChange:l[2]||(l[2]=a=>{e(t).area=a[0].value})},null,8,["options"])]),r("div",I,[o(e(v),{for:"areas"},{default:s(()=>[n("중량")]),_:1}),o(e(p),{id:"weights",options:e(i).weights,"options-style":"text",placeholder:"중량을 선택하세요",multiple:!1,onChange:l[3]||(l[3]=a=>{e(t).weight=a[0].value})},null,8,["options"])]),r("div",z,[o(e(v),{for:"areas"},{default:s(()=>[n("노면")]),_:1}),o(e(p),{id:"roadSurface",modelValue:e(t).roadSurface,"onUpdate:modelValue":l[4]||(l[4]=a=>e(t).roadSurface=a),options:e(i).roadSurfaces,"options-style":"text",placeholder:"노면을 선택하세요",multiple:!1,onChange:l[5]||(l[5]=a=>{e(t).roadSurface=a[0].value})},null,8,["modelValue","options"])]),r("div",O,[o(e(C),{modelValue:e(t).testCount,"onUpdate:modelValue":l[6]||(l[6]=a=>e(t).testCount=a),type:"text",label:"횟수"},null,8,["modelValue"])]),r("div",q,[o(e(C),{type:"file",label:"측정자료",onChange:l[7]||(l[7]=a=>w(a))})]),r("div",E,[o(e(M),{loading:e(t).loading,color:"primary",size:"sm",class:"me-md-2 col-3",disabled:!e(m),onClick:_},{default:s(()=>[n("등록")]),_:1},8,["loading","disabled"]),o(e(S),{size:"sm",class:"me-md-2 col-3",color:"secondary",onClick:h},{default:s(()=>[n("목록")]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{K as default};
