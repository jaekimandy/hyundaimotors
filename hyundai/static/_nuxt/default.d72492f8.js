import{G as D,ad as s,o as f,c as w,b as U,r as A,D as B,h as t,F as z,J as P,H as L,k as a,I as h,j as e,p as o,a as y,an as R,ao as I,ap as J,aq as j,a4 as x,ar as F,as as G,at as Y,au as H,u as $,av as Z,ah as q}from"./entry.ea429dc8.js";import{u as E}from"./setting.adb2df07.js";const K={name:"AppFooter"};function O(d,r,p,n,m,v){const i=s("CFooter");return f(),w(i)}const Q=D(K,[["render",O]]),k=U(),W={name:"AppBreadcrumb",setup(){const d=A(),r=()=>k.currentRoute.value.matched.map(p=>({active:p.path===k.currentRoute.value.fullPath,name:p.name,path:`${k.options.history.base}${p.path}`}));return k.afterEach(()=>{d.value=r()}),B(()=>{d.value=r()}),{breadcrumbs:d}}};function X(d,r,p,n,m,v){const i=s("CBreadcrumbItem"),g=s("CBreadcrumb");return f(),w(g,{class:"d-md-down-none me-auto mb-0"},{default:t(()=>[(f(!0),z(L,null,P(n.breadcrumbs,_=>(f(),w(i,{key:_,href:_.active?"":_.path,active:_.active},{default:t(()=>[a(h(_.name),1)]),_:2},1032,["href","active"]))),128))]),_:1})}const N=D(W,[["render",X]]),ee=""+new URL("8.8aabb9af.jpg",import.meta.url).href,te={name:"AppHeaderDropdownAccnt",setup(){return{avatar:ee,itemsCount:42}}};function oe(d,r,p,n,m,v){const i=s("CAvatar"),g=s("CDropdownToggle"),_=s("CDropdownHeader"),u=s("CIcon"),c=s("CBadge"),l=s("CDropdownItem"),C=s("CDropdownDivider"),b=s("CDropdownMenu"),M=s("CDropdown");return f(),w(M,{variant:"nav-item"},{default:t(()=>[e(g,{placement:"bottom-end",class:"py-0",caret:!1},{default:t(()=>[e(i,{src:n.avatar,size:"md"},null,8,["src"])]),_:1}),e(b,{class:"pt-0"},{default:t(()=>[e(_,{component:"h6",class:"dropdown-header bg-light dark:bg-white dark:bg-opacity-10 py-2"},{default:t(()=>[a(" Account ")]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-bell"}),a(" Updates "),e(c,{color:"info-gradient",class:"ms-auto"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-envelope-open"}),a(" Messages "),e(c,{color:"success-gradient",class:"ms-auto"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-task"}),a(" Tasks "),e(c,{color:"danger-gradient",class:"ms-auto"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-comment-square"}),a(" Comments "),e(c,{color:"warning-gradient",class:"ms-auto"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(_,{component:"h6",class:"dropdown-header bg-light dark:bg-white dark:bg-opacity-10 py-2"},{default:t(()=>[a(" Settings ")]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-user"}),a(" Profile ")]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-settings"}),a(" Settings ")]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-dollar"}),a(" Payments "),e(c,{color:"secondary",class:"ms-auto"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-file"}),a(" Projects "),e(c,{color:"primary-gradient",class:"ms-auto"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(C),e(l,null,{default:t(()=>[e(u,{icon:"cil-shield-alt"}),a(" Lock Account ")]),_:1}),e(l,null,{default:t(()=>[e(u,{icon:"cil-lock-locked"}),a(" Logout ")]),_:1})]),_:1})]),_:1})}const se=D(te,[["render",oe]]),ne=""+new URL("4.f363c944.jpg",import.meta.url).href,ae=""+new URL("5.4b434c91.jpg",import.meta.url).href,ce=""+new URL("6.d80bed3d.jpg",import.meta.url).href,le=""+new URL("7.10012d9a.jpg",import.meta.url).href,re={name:"TheHeaderDropdownMssgs",setup(){return{avatar4:ne,avatar5:ae,avatar6:ce,avatar7:le,itemsCount:7}}},de={class:"message"},ie={class:"pt-3 me-3 float-start"},ue=o("div",null,[o("small",{class:"text-medium-emphasis"},"John Doe"),o("small",{class:"text-medium-emphasis float-end mt-1"},"Just now")],-1),pe=o("div",{class:"text-truncate font-weight-bold"},[o("span",{class:"fa fa-exclamation text-danger"}),a(" Important message ")],-1),me=o("div",{class:"small text-medium-emphasis text-truncate"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt... ",-1),_e={class:"message"},ge={class:"pt-3 me-3 float-start"},he=o("div",null,[o("small",{class:"text-medium-emphasis"},"Jane Dovve"),o("small",{class:"text-medium-emphasis float-end mt-1"},"5 minutes ago")],-1),fe=o("div",{class:"text-truncate font-weight-bold"}," Lorem ipsum dolor sit amet ",-1),Ce=o("div",{class:"small text-medium-emphasis text-truncate"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt... ",-1),ve={class:"message"},be={class:"pt-3 me-3 float-start"},we=o("div",null,[o("small",{class:"text-medium-emphasis"},"Janet Doe"),o("small",{class:"text-medium-emphasis float-end mt-1"},"1:52 PM")],-1),xe=o("div",{class:"text-truncate font-weight-bold"}," Lorem ipsum dolor sit amet ",-1),De=o("div",{class:"small text-medium-emphasis text-truncate"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt... ",-1),ke={class:"message"},$e={class:"pt-3 me-3 float-start"},Me=o("div",null,[o("small",{class:"text-medium-emphasis"},"Joe Doe"),o("small",{class:"text-medium-emphasis float-end mt-1"},"4:03 AM")],-1),ye=o("div",{class:"text-truncate font-weight-bold"}," Lorem ipsum dolor sit amet ",-1),Ie=o("div",{class:"small text-medium-emphasis text-truncate"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt... ",-1),He=o("strong",null,"View all messages",-1);function Ve(d,r,p,n,m,v){const i=s("CIcon"),g=s("CBadge"),_=s("CDropdownToggle"),u=s("CDropdownHeader"),c=s("CAvatar"),l=s("CDropdownItem"),C=s("CDropdownMenu"),b=s("CDropdown");return f(),w(b,{variant:"nav-item",alignment:"end"},{default:t(()=>[e(_,{class:"c-header-nav-link",caret:!1},{default:t(()=>[e(i,{icon:"cil-envelope-open",size:"lg",class:"my-1 mx-2"}),e(g,{shape:"rounded-pill",color:"info-gradient",class:"position-absolute top-0 end-0"},{default:t(()=>[a(h(n.itemsCount),1)]),_:1})]),_:1}),e(C,{class:"pt-0"},{default:t(()=>[e(u,{class:"dropdown-header bg-light dark:bg-white dark:bg-opacity-10"},{default:t(()=>[o("strong",null,"You have "+h(n.itemsCount)+" messages",1)]),_:1}),e(l,{href:"#"},{default:t(()=>[o("div",de,[o("div",ie,[e(c,{src:n.avatar7,status:"success"},null,8,["src"])]),ue,pe,me])]),_:1}),e(l,{href:"#"},{default:t(()=>[o("div",_e,[o("div",ge,[e(c,{src:n.avatar6,status:"warning"},null,8,["src"])]),he,fe,Ce])]),_:1}),e(l,{href:"#"},{default:t(()=>[o("div",ve,[o("div",be,[e(c,{src:n.avatar5,status:"danger"},null,8,["src"])]),we,xe,De])]),_:1}),e(l,{href:"#"},{default:t(()=>[o("div",ke,[o("div",$e,[e(c,{src:n.avatar4,status:"info"},null,8,["src"])]),Me,ye,Ie])]),_:1}),e(l,{href:"#",class:"text-center border-top"},{default:t(()=>[He]),_:1})]),_:1})]),_:1})}const Ae=D(re,[["render",Ve]]),Be={name:"TheHeaderDropdownNotif",data(){return{itemsCount:5}}},ze=o("strong",null,"Server",-1),Le=o("div",{class:"text-uppercase mb-1"},[o("small",null,[o("b",null,"CPU Usage")])],-1),Ne=o("small",{class:"text-muted"},"348 Processes. 1/4 Cores.",-1),Se=o("div",{class:"text-uppercase mb-1"},[o("small",null,[o("b",null,"Memory Usage")])],-1),Te=o("small",{class:"text-muted"},"11444GB/16384MB",-1),Ue=o("div",{class:"text-uppercase mb-1"},[o("small",null,[o("b",null,"SSD 1 Usage")])],-1),Pe=o("small",{class:"text-muted"},"243GB/256GB",-1);function Re(d,r,p,n,m,v){const i=s("CIcon"),g=s("CBadge"),_=s("CDropdownToggle"),u=s("CDropdownHeader"),c=s("CDropdownItem"),l=s("CProgress"),C=s("CDropdownMenu"),b=s("CDropdown");return f(),w(b,{variant:"nav-item"},{default:t(()=>[e(_,{placement:"bottom-end",caret:!1},{default:t(()=>[e(i,{class:"my-1 mx-2",icon:"cil-bell",size:"lg"}),e(g,{class:"position-absolute top-0 end-0",color:"danger-gradient",shape:"rounded-pill"},{default:t(()=>[a(h(m.itemsCount),1)]),_:1})]),_:1}),e(C,{class:"pt-0"},{default:t(()=>[e(u,{class:"dropdown-header bg-light dark:bg-white dark:bg-opacity-10"},{default:t(()=>[o("strong",null,"You have "+h(m.itemsCount)+" notifications",1)]),_:1}),e(c,null,{default:t(()=>[e(i,{icon:"cil-user-follow",class:"text-success"}),a(" New user registered ")]),_:1}),e(c,null,{default:t(()=>[e(i,{icon:"cil-user-unfollow",class:"text-danger"}),a(" User deleted ")]),_:1}),e(c,null,{default:t(()=>[e(i,{icon:"cil-chart-pie",class:"text-info"}),a(" Sales report is ready ")]),_:1}),e(c,null,{default:t(()=>[e(i,{icon:"cil-basket",class:"text-primary"}),a(" New client ")]),_:1}),e(c,null,{default:t(()=>[e(i,{icon:"cil-speedometer",class:"text-warning"}),a(" Server overloaded ")]),_:1}),e(u,{class:"dropdown-header bg-light dark:bg-white dark:bg-opacity-10"},{default:t(()=>[ze]),_:1}),e(c,{class:"d-block"},{default:t(()=>[Le,e(l,{thin:"",color:"info-gradient",value:25}),Ne]),_:1}),e(c,{class:"d-block"},{default:t(()=>[Se,e(l,{thin:"",color:"warning-gradient",value:70}),Te]),_:1}),e(c,{class:"d-block"},{default:t(()=>[Ue,e(l,{thin:"",color:"danger-gradient",value:90}),Pe]),_:1})]),_:1})]),_:1})}const Je=D(Be,[["render",Re]]),je={name:"TheHeaderDropdownTasks",data(){return{itemsCount:15}}},Fe=o("div",{class:"small mb-1"},[a(" Upgrade NPM & Bower "),o("span",{class:"float-right"},[o("strong",null,"0%")])],-1),Ge=o("div",{class:"small mb-1"},[a(" ReactJS Version "),o("span",{class:"float-right"},[o("strong",null,"25%")])],-1),Ye=o("div",{class:"small mb-1"},[a(" VueJS Version "),o("span",{class:"float-right"},[o("strong",null,"50%")])],-1),Ze=o("div",{class:"small mb-1"},[a(" Add new layouts "),o("span",{class:"float-right"},[o("strong",null,"75%")])],-1),qe=o("div",{class:"small mb-1"},[a(" Angular 2 Cli Version "),o("span",{class:"float-right"},[o("strong",null,"100%")])],-1),Ee=o("strong",null,"View all tasks",-1);function Ke(d,r,p,n,m,v){const i=s("CIcon"),g=s("CBadge"),_=s("CDropdownToggle"),u=s("CDropdownHeader"),c=s("CProgress"),l=s("CDropdownItem"),C=s("CDropdownMenu"),b=s("CDropdown");return f(),w(b,{variant:"nav-item"},{default:t(()=>[e(_,{placement:"bottom-end",caret:!1},{default:t(()=>[e(i,{class:"my-1 mx-2",icon:"cil-list",size:"lg"}),e(g,{class:"position-absolute top-0 end-0",color:"warning-gradient",shape:"rounded-pill"},{default:t(()=>[a(h(m.itemsCount),1)]),_:1})]),_:1}),e(C,{class:"pt-0"},{default:t(()=>[e(u,{class:"dropdown-header bg-light dark:bg-white dark:bg-opacity-10"},{default:t(()=>[o("strong",null,"You have "+h(m.itemsCount)+" pending tasks",1)]),_:1}),e(l,{class:"d-block"},{default:t(()=>[Fe,e(c,{thin:"",color:"info-gradient"})]),_:1}),e(l,{class:"d-block"},{default:t(()=>[Ge,e(c,{thin:"",color:"danger-gradient",value:25})]),_:1}),e(l,{class:"d-block"},{default:t(()=>[Ye,e(c,{thin:"",color:"warning-gradient",value:50})]),_:1}),e(l,{class:"d-block"},{default:t(()=>[Ze,e(c,{thin:"",color:"info-gradient",value:75})]),_:1}),e(l,{class:"d-block"},{default:t(()=>[qe,e(c,{thin:"",color:"success-gradient",value:100})]),_:1}),e(l,{class:"text-center border-top"},{default:t(()=>[Ee]),_:1})]),_:1})]),_:1})}const Oe=D(je,[["render",Ke]]),Qe=["642 134",`
  <title>현대자동차</title>
  <g>
    <g>
      <polygon points="63.76,3.22 63.76,9.47 56.68,9.47 56.68,3.22 52.78,3.22 52.78,19.61 56.68,19.61 56.68,13.02 63.76,13.02 63.76,19.61 67.66,19.61 67.66,3.22 67.46,3.22" class="st0"></polygon>
      <polygon points="81.96,3.22 77.87,9.71 73.8,3.22 69.19,3.22 75.93,13.93 75.93,19.61 79.83,19.61 79.83,13.93 86.56,3.22 86.2,3.22" class="st0"></polygon>
      <path d="M99.11,3.22v12.01c0,0.46-0.34,0.82-0.83,0.82h-6.25V3.22h-3.9v16.39h11.53c1.03,0,1.85-0.3,2.45-0.9c0.6-0.6,0.9-1.42,0.9-2.45V3.22h-0.19H99.11z" class="st0"></path>
      <path d="M118.15,3.22h-11.53v16.39h3.9V6.77h6.26c0.5,0,0.83,0.39,0.83,0.82v12.02h3.9V6.57c0-1.03-0.3-1.85-0.9-2.45 C119.99,3.53,119.17,3.22,118.15,3.22z" class="st0"></path>
      <path d="M136.64,3.22h-11.53v16.39h11.53c1.02,0,1.84-0.3,2.44-0.9c0.6-0.6,0.9-1.42,0.9-2.45V6.57
  			c0-1.03-0.3-1.85-0.9-2.45C138.48,3.53,137.66,3.22,136.64,3.22z M136.09,7.62v7.59c0,0.44-0.32,0.85-0.83,0.85h-6.25V6.77h6.23 C135.75,6.77,136.09,7.13,136.09,7.62z" class="st0"></path>
      <path d="M146.78,3.22c-1.02,0-1.85,0.3-2.45,0.9c-0.6,0.6-0.9,1.42-0.9,2.45v13.04h3.89v-5.07h7.08v5.07h3.9V3.22 H146.78z M154.41,6.77v4.22h-7.08V7.6c0-0.4,0.31-0.83,0.83-0.83H154.41z" class="st0"></path>
      <rect x="162.1" y="3.22" width="3.9" height="16.39" class="st0"></rect>
    </g>
    <g>
      <g>
        <g>
          <g>
            <path d="M22.29,22.83c12.31,0,22.29-5.11,22.29-11.42C44.59,5.11,34.61,0,22.29,0C9.98,0,0,5.11,0,11.41 C0,17.72,9.98,22.83,22.29,22.83z M26.49,17.23c-0.37,0.86-1.01,2.7-2.48,3.44c-0.44,0.22-0.99,0.33-1.49,0.34 c-0.11,0-0.19,0-0.22,0c-4.12,0-7.94-0.57-11.15-1.55c-0.03-0.01-0.1-0.04-0.12-0.05c-0.3-0.1-0.45-0.24-0.45-0.4 c0-0.15,0.08-0.26,0.18-0.36c0.04-0.05,0.11-0.1,0.2-0.18c0.74-0.62,2.97-2.23,7.17-3.84c1.47-0.56,3.31-1.26,5.25-1.67 C24.51,12.72,28.7,12.08,26.49,17.23z M37.75,5.72c0.08-0.14,0.19-0.25,0.38-0.27c0.1-0.01,0.25,0.02,0.46,0.15 c2.62,1.61,4.17,3.62,4.17,5.8c0,3.94-5.06,7.32-12.3,8.8c-0.47,0.09-0.77,0.09-0.88-0.03c-0.07-0.07-0.09-0.2,0-0.35 c0.05-0.08,0.1-0.15,0.19-0.27c3.94-4.65,6.94-11.5,7.8-13.48C37.64,5.95,37.7,5.81,37.75,5.72z M18.16,5.58 c0.37-0.86,1.01-2.7,2.48-3.43c0.45-0.22,0.99-0.33,1.49-0.34c0.11,0,0.19,0,0.22,0c4.12,0,7.94,0.57,11.15,1.55 c0.02,0.01,0.1,0.04,0.12,0.04c0.3,0.1,0.45,0.23,0.45,0.4c0,0.15-0.08,0.26-0.18,0.36c-0.05,0.04-0.11,0.1-0.2,0.18 c-0.74,0.62-2.97,2.23-7.17,3.84c-1.47,0.56-3.32,1.26-5.24,1.67C20.14,10.09,15.95,10.73,18.16,5.58z M14.12,2.61 c0.47-0.09,0.77-0.09,0.88,0.03c0.06,0.07,0.08,0.2,0,0.35c-0.05,0.08-0.1,0.16-0.19,0.27c-3.94,4.65-6.94,11.5-7.8,13.48 c-0.06,0.14-0.13,0.27-0.18,0.36c-0.08,0.14-0.18,0.26-0.37,0.27c-0.11,0.01-0.25-0.02-0.47-0.15 c-2.62-1.61-4.17-3.62-4.17-5.8C1.82,7.48,6.88,4.09,14.12,2.61z" class="st0"></path>
          </g>
        </g>
      </g>
    </g>
  </g>
`],We={name:"AppHeader",components:{AppBreadcrumb:N,AppHeaderDropdownAccnt:se,AppHeaderDropdownMssgs:Ae,AppHeaderDropdownNotif:Je,AppHeaderDropdownTasks:Oe},setup(){return{logo:Qe}}};function Xe(d,r,p,n,m,v){const i=s("CIcon"),g=s("CHeaderToggler"),_=s("CHeaderBrand"),u=s("CNavLink"),c=s("CNavItem"),l=s("CHeaderNav"),C=s("CContainer"),b=s("CHeaderDivider"),M=N,T=s("CHeader");return f(),w(T,{position:"sticky",class:"mb-4"},{default:t(()=>[e(C,{fluid:""},{default:t(()=>[e(g,{class:"ps-1"},{default:t(()=>[e(i,{icon:"cil-menu",size:"lg"})]),_:1}),e(_,{class:"mx-auto d-lg-none",to:"/"},{default:t(()=>[e(i,{icon:n.logo,height:"48",alt:"Logo"},null,8,["icon"])]),_:1}),e(l,{class:"d-none d-md-flex me-auto"},{default:t(()=>[e(c,null,{default:t(()=>[e(u,{href:"/dashboard"},{default:t(()=>[a(" Dashboard ")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(u,{href:"#"},{default:t(()=>[a("Users")]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(u,{href:"#"},{default:t(()=>[a("Settings")]),_:1})]),_:1})]),_:1}),e(l,{class:"me-4"}),e(l,{class:"ms-3 me-4"}),e(g,{class:"px-md-0 me-md-3"},{default:t(()=>[e(i,{icon:"cil-applications-settings",size:"lg"})]),_:1})]),_:1}),e(b),e(C,{fluid:""},{default:t(()=>[e(M)]),_:1})]),_:1})}const et=D(We,[["render",Xe]]),tt=[{component:"CNavItem",name:"Proving Ground",to:"/proving-ground",icon:"cil-drop"},{component:"CNavItem",name:"Analysis & Download",to:"/analysis",icon:"cil-pencil"},{component:"CNavItem",name:"Bulletin Board",to:"/bulletin-board",icon:"cil-pencil"},{component:"CNavItem",name:"Upload",to:"/upload",icon:"cil-pencil"}],V=d=>decodeURI(d).replace(/#.*$/,"").replace(/(index)?\.(html)$/,""),ot=(d,r)=>{if(r===void 0)return!1;if(d.hash===r)return!0;const p=V(d.path),n=V(r);return p===n},S=(d,r)=>ot(d,r.to)?!0:r.items?r.items.some(p=>S(d,p)):!1,st=y({name:"AppSidebarNav",components:{CNavItem:R,CNavGroup:I,CNavTitle:J},setup(){const d=j(),r=A(!0);B(()=>{r.value=!1});const p=n=>n.items?x(I,{...r.value&&{visible:n.items.some(m=>S(d,m))}},{togglerContent:()=>[x(s("CIcon"),{customClassName:"nav-icon",name:n.icon}),n.name],default:()=>n.items.map(m=>p(m))}):n.to?x(Y,{to:n.to,custom:!0},{default:m=>x(s(n.component),{active:m.isActive,href:m.href,onClick:()=>m.navigate()},{default:()=>[n.icon&&x(s("CIcon"),{customClassName:"nav-icon",name:n.icon}),n.name,n.badge&&x(G,{class:"ms-auto",color:n.badge.color},{default:()=>n.badge.text})]})}):x(s(n.component),{},{default:()=>n.name});return()=>x(F,{},{default:()=>tt.map(n=>p(n))})}}),nt=["642 134",`
  <title>현대자동차</title>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 166 23" xml:space="preserve" class="logo color-blue"><g><g><polygon points="63.76,3.22 63.76,9.47 56.68,9.47 56.68,3.22 52.78,3.22 52.78,19.61 56.68,19.61 56.68,13.02 63.76,13.02 63.76,19.61 67.66,19.61 67.66,3.22 67.46,3.22" class="st0"></polygon> <polygon points="81.96,3.22 77.87,9.71 73.8,3.22 69.19,3.22 75.93,13.93 75.93,19.61 79.83,19.61 79.83,13.93 86.56,3.22 86.2,3.22" class="st0"></polygon> <path d="M99.11,3.22v12.01c0,0.46-0.34,0.82-0.83,0.82h-6.25V3.22h-3.9v16.39h11.53c1.03,0,1.85-0.3,2.45-0.9c0.6-0.6,0.9-1.42,0.9-2.45V3.22h-0.19H99.11z" class="st0"></path> <path d="M118.15,3.22h-11.53v16.39h3.9V6.77h6.26c0.5,0,0.83,0.39,0.83,0.82v12.02h3.9V6.57c0-1.03-0.3-1.85-0.9-2.45 C119.99,3.53,119.17,3.22,118.15,3.22z" class="st0"></path> <path d="M136.64,3.22h-11.53v16.39h11.53c1.02,0,1.84-0.3,2.44-0.9c0.6-0.6,0.9-1.42,0.9-2.45V6.57
			c0-1.03-0.3-1.85-0.9-2.45C138.48,3.53,137.66,3.22,136.64,3.22z M136.09,7.62v7.59c0,0.44-0.32,0.85-0.83,0.85h-6.25V6.77h6.23 C135.75,6.77,136.09,7.13,136.09,7.62z" class="st0"></path> <path d="M146.78,3.22c-1.02,0-1.85,0.3-2.45,0.9c-0.6,0.6-0.9,1.42-0.9,2.45v13.04h3.89v-5.07h7.08v5.07h3.9V3.22 H146.78z M154.41,6.77v4.22h-7.08V7.6c0-0.4,0.31-0.83,0.83-0.83H154.41z" class="st0"></path> <rect x="162.1" y="3.22" width="3.9" height="16.39" class="st0"></rect></g> <g><g><g><g><path d="M22.29,22.83c12.31,0,22.29-5.11,22.29-11.42C44.59,5.11,34.61,0,22.29,0C9.98,0,0,5.11,0,11.41 C0,17.72,9.98,22.83,22.29,22.83z M26.49,17.23c-0.37,0.86-1.01,2.7-2.48,3.44c-0.44,0.22-0.99,0.33-1.49,0.34 c-0.11,0-0.19,0-0.22,0c-4.12,0-7.94-0.57-11.15-1.55c-0.03-0.01-0.1-0.04-0.12-0.05c-0.3-0.1-0.45-0.24-0.45-0.4 c0-0.15,0.08-0.26,0.18-0.36c0.04-0.05,0.11-0.1,0.2-0.18c0.74-0.62,2.97-2.23,7.17-3.84c1.47-0.56,3.31-1.26,5.25-1.67 C24.51,12.72,28.7,12.08,26.49,17.23z M37.75,5.72c0.08-0.14,0.19-0.25,0.38-0.27c0.1-0.01,0.25,0.02,0.46,0.15 c2.62,1.61,4.17,3.62,4.17,5.8c0,3.94-5.06,7.32-12.3,8.8c-0.47,0.09-0.77,0.09-0.88-0.03c-0.07-0.07-0.09-0.2,0-0.35 c0.05-0.08,0.1-0.15,0.19-0.27c3.94-4.65,6.94-11.5,7.8-13.48C37.64,5.95,37.7,5.81,37.75,5.72z M18.16,5.58 c0.37-0.86,1.01-2.7,2.48-3.43c0.45-0.22,0.99-0.33,1.49-0.34c0.11,0,0.19,0,0.22,0c4.12,0,7.94,0.57,11.15,1.55 c0.02,0.01,0.1,0.04,0.12,0.04c0.3,0.1,0.45,0.23,0.45,0.4c0,0.15-0.08,0.26-0.18,0.36c-0.05,0.04-0.11,0.1-0.2,0.18 c-0.74,0.62-2.97,2.23-7.17,3.84c-1.47,0.56-3.32,1.26-5.24,1.67C20.14,10.09,15.95,10.73,18.16,5.58z M14.12,2.61 c0.47-0.09,0.77-0.09,0.88,0.03c0.06,0.07,0.08,0.2,0,0.35c-0.05,0.08-0.1,0.16-0.19,0.27c-3.94,4.65-6.94,11.5-7.8,13.48 c-0.06,0.14-0.13,0.27-0.18,0.36c-0.08,0.14-0.18,0.26-0.37,0.27c-0.11,0.01-0.25-0.02-0.47-0.15 c-2.62-1.61-4.17-3.62-4.17-5.8C1.82,7.48,6.88,4.09,14.12,2.61z" class="st0"></path></g></g></g></g></g></svg>
`],at=["160 160",`
  <title>coreui logo</title>
  <g>
    <g style="fill:#fff;">
      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>
      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>
    </g>
  </g>
`],ct=y({__name:"AppSidebar",setup(d){const r=E(),p=H(()=>r.sidebarUnfoldable),n=H(()=>r.sidebarVisible),m=v=>{r.updateSidebarVisible(v)};return(v,i)=>{const g=s("CIcon"),_=s("CSidebarBrand"),u=s("CSidebar");return f(),w(u,{position:"fixed",unfoldable:p.value,visible:n.value!="",onVisibleChange:i[0]||(i[0]=c=>m(c))},{default:t(()=>[e(_,null,{default:t(()=>[e(g,{"custom-class-name":"sidebar-brand-full",icon:$(nt),height:35},null,8,["icon"]),e(g,{"custom-class-name":"sidebar-brand-narrow",icon:$(at),height:35},null,8,["icon"])]),_:1}),e($(st))]),_:1},8,["unfoldable","visible"])}}}),lt={class:"wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent"},rt={class:"body flex-grow-1 px-3"},ut=y({__name:"default",setup(d){return(r,p)=>(f(),z(L,null,[e(ct),o("div",lt,[e(et),o("div",rt,[e($(q),{lg:""},{default:t(()=>[Z(r.$slots,"default")]),_:3})]),e(Q)])],64))}});export{ut as default};
