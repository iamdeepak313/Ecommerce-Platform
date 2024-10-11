"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-profiling-mode_src_index_ts-ui_packages_analytics-provider_AnalyticsProvide-519d14"],{31481:(e,t,a)=>{a.d(t,{I:()=>n});let n=(0,a(96540).createContext)(null)},51848:(e,t,a)=>{let n;a.d(t,{BI:()=>_,Ti:()=>p,lA:()=>m});var s=a(70837),i=a(18679),r=a(74572),o=a(51528);let{getItem:l}=(0,r.A)("localStorage"),d="dimension_",c=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,s.O)("octolytics");delete e.baseContext,n=new i.s(e)}catch(e){}function u(e){let t=(0,s.O)("octolytics").baseContext||{};if(t)for(let[e,a]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(d)&&(t[e.replace(d,"")]=a,delete t[e]);let a=document.querySelector("meta[name=visitor-payload]");for(let[e,n]of(a&&Object.assign(t,JSON.parse(atob(a.content))),new URLSearchParams(window.location.search)))c.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,o.X)().toString(),Object.assign(t,e)}function m(e){n?.sendPageView(u(e))}function _(e,t={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,s=a?{service:a}:{};for(let[e,a]of Object.entries(t))null!=a&&(s[e]=`${a}`);n&&(u(s),n.sendEvent(e||"unknown",u(s)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},67726:(e,t,a)=>{a.d(t,{l:()=>n});let n=()=>void 0},23581:(e,t,a)=>{a.d(t,{A:()=>o});let{getItem:n,setItem:s,removeItem:i}=(0,a(74572).A)("localStorage"),r="REACT_PROFILING_ENABLED",o={enable:()=>s(r,"true"),disable:()=>i(r),isEnabled:()=>!!n(r)}},71312:(e,t,a)=>{a.d(t,{S:()=>o,s:()=>r});var n=a(96540),s=a(51848),i=a(31481);function r(){let e=(0,n.useContext)(i.I);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:a,metadata:r}=e;return{sendAnalyticsEvent:(0,n.useCallback)((e,n,i={})=>{let o={react:!0,app_name:t,category:a,...r};(0,s.BI)(e,{...o,...i,target:n})},[t,a,r])}}function o(){let{sendAnalyticsEvent:e}=r();return{sendClickAnalyticsEvent:(0,n.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},59840:(e,t,a)=>{a.d(t,{m:()=>i});var n=a(96540),s=a(97156);function i(e,t){s.KJ&&(0,n.useLayoutEffect)(e,t)}},73272:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(59840),s=a(96540);function i(){let e=(0,s.useRef)(!1),t=(0,s.useCallback)(()=>e.current,[]);return(0,n.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},83784:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(73272),s=a(96540);let i=function(e){let t=(0,n.A)(),[a,i]=(0,s.useState)(e);return[a,(0,s.useCallback)(e=>{t()&&i(e)},[t])]}},37190:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(74848),s=a(96540),i=a(31481);function r({children:e,appName:t,category:a,metadata:r}){let o=(0,s.useMemo)(()=>({appName:t,category:a,metadata:r}),[t,a,r]);return(0,n.jsx)(i.I.Provider,{value:o,children:e})}try{r.displayName||(r.displayName="AnalyticsProvider")}catch{}},22629:(e,t,a)=>{a.d(t,{O:()=>v,r:()=>f});var n=a(74848),s=a(71312),i=a(16823),r=a(38553),o=a(89323),l=a(80577),d=a(38621),c=a(96540),u=a(75014);let m=(0,c.lazy)(()=>Promise.all([a.e("primer-react"),a.e("react-core"),a.e("react-lib"),a.e("vendors-node_modules_dompurify_dist_purify_js"),a.e("vendors-node_modules_github_relative-time-element_dist_index_js"),a.e("vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec"),a.e("vendors-node_modules_react-relay_index_js"),a.e("vendors-node_modules_date-fns_format_mjs"),a.e("vendors-node_modules_date-fns_addWeeks_mjs-node_modules_date-fns_addYears_mjs-node_modules_da-827f4f"),a.e("vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_fzy_js_index_js-node_mo-c4d1d6"),a.e("vendors-node_modules_github_hotkey_dist_index_js-node_modules_date-fns_getDaysInMonth_mjs-nod-70c11b"),a.e("vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_g-emoji-element_di-6ce195"),a.e("vendors-node_modules_react-relay_hooks_js-node_modules_github_paste-markdown_dist_index_js-no-da0d56"),a.e("ui_packages_paths_index_ts"),a.e("ui_packages_ui-commands_ui-commands_ts"),a.e("ui_packages_relay-environment_relay-environment_ts"),a.e("ui_packages_date-picker_date-picker_ts-ui_packages_github-avatar_GitHubAvatar_tsx"),a.e("ui_packages_item-picker_components_RepositoryPicker_tsx"),a.e("ui_packages_issue-create_dialog_CreateIssueDialogEntry_tsx"),a.e("ui_packages_aria-live_aria-live_ts-ui_packages_test-id-props_test-id-props_ts-ui_packages_use-085703")]).then(a.bind(a,36860)));function _({label:e,analyticsLabel:t}){return{category:"SiteHeaderComponent",action:"add_dropdown",label:t||e.toLowerCase()}}function p({label:e,href:t,LeadingVisual:a,analyticsLabel:r}){let{sendClickAnalyticsEvent:o}=(0,s.S)(),l=(0,c.useCallback)(()=>{o(_({label:e,analyticsLabel:r}))},[e,r,o]);return(0,n.jsxs)(i.l.LinkItem,{href:t,onClick:l,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(a,{})}),e]})}function y({label:e,onClick:t,LeadingVisual:a,analyticsLabel:r}){let{sendClickAnalyticsEvent:o}=(0,s.S)(),l=(0,c.useCallback)(()=>{o(_({label:e,analyticsLabel:r})),t()},[e,r,o,t]);return(0,n.jsxs)(i.l.Item,{onSelect:l,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(a,{})}),e]})}function h(){return(0,n.jsx)(r.A,{size:"small"})}function x({side:e="outside-bottom",createRepo:t,importRepo:a,createOrg:s,createProject:r,createProjectUrl:l,createLegacyProject:u,createIssue:_,codespaces:x,gist:j,org:g,owner:f,repo:b,isOpen:v=!1,setIsOpen:C=()=>{},environment:N}){let[I,k]=(0,c.useState)(!1),[w,L]=(0,c.useState)(!1),[P,S]=(0,c.useState)(v);(0,c.useEffect)(()=>{v&&S(!0)},[v]);let A=I&&!w;return(0,n.jsxs)(n.Fragment,{children:[_&&P&&(0,n.jsx)(c.Suspense,{children:(0,n.jsx)(m,{isVisible:I,setIsVisible:k,setIsLoaded:L,setIsParentMenuOpen:C,owner:f,repo:b,environment:N})}),(0,n.jsx)(o.W.Overlay,{side:e,children:(0,n.jsxs)(i.l,{children:[_&&(0,n.jsx)(y,{label:"New issue",onClick:()=>(k(!0),!1),LeadingVisual:A?h:d.IssueOpenedIcon}),!1!==t&&(0,n.jsx)(p,{label:"New repository",href:"/new",LeadingVisual:d.RepoIcon}),a&&(0,n.jsx)(p,{label:"Import repository",href:"/new/import",LeadingVisual:d.RepoPushIcon}),(x||j)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.l.Divider,{}),x&&(0,n.jsx)(p,{label:"New codespace",href:"/codespaces/new",LeadingVisual:d.CodespacesIcon}),j&&(0,n.jsx)(p,{label:"New gist",href:"/gist",LeadingVisual:d.CodeIcon})]}),(s||r||u)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.l.Divider,{}),s&&(0,n.jsx)(p,{label:"New organization",href:"/account/organizations/new",LeadingVisual:d.OrganizationIcon}),r&&(0,n.jsx)(p,{label:"New project",analyticsLabel:"new project",href:l,LeadingVisual:d.ProjectIcon}),!r&&u&&(0,n.jsx)(p,{label:"New project",analyticsLabel:"new legacy project",href:"/new/project",LeadingVisual:d.ProjectIcon})]}),g&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.l.Divider,{}),(0,n.jsx)(p,{label:`${g.addWord} someone to ${g.login}`,analyticsLabel:"invite someone",href:`/orgs/${g.login}/people#invite-member`,LeadingVisual:d.PersonAddIcon}),(0,n.jsx)(p,{label:`New team in ${g.login}`,analyticsLabel:"new team",href:`/orgs/${g.login}/new-team`,LeadingVisual:d.PeopleIcon}),(0,n.jsx)(p,{label:`New repository in ${g.login}`,analyticsLabel:"organization - new repository",href:`/organizations/${g.login}/repositories/new`,LeadingVisual:d.RepoIcon})]})]})})]})}function j(e){let{ref:t,open:a,setOpen:s}=(0,u.Mm)(e.reactPartialAnchor);return(0,n.jsx)(o.W,{anchorRef:t,open:a,onOpenChange:s,children:(0,n.jsx)(x,{...e,isOpen:a,setIsOpen:s})})}function g(e){let t=`global-create-menu-tooltip-${(0,c.useId)()}`,[a,s]=(0,c.useState)(!1);return(0,n.jsxs)(o.W,{open:a,onOpenChange:s,children:[(0,n.jsx)(l.m,{text:"Create New...",type:"label",id:t,children:(0,n.jsx)(o.W.Button,{leadingVisual:d.PlusIcon,children:""})}),(0,n.jsx)(x,{...e,isOpen:a,setIsOpen:s})]})}function f(e){return e.reactPartialAnchor?(0,n.jsx)(j,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,n.jsx)(g,{...e})}let b={"@media (min-width: 48rem)":{display:"none"}};function v(e){let[t,a]=(0,c.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.W,{open:t,onOpenChange:a,children:[(0,n.jsx)(o.W.Anchor,{children:(0,n.jsxs)(i.l.Item,{sx:b,onSelect:()=>{a(e=>!e)},children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(d.PlusIcon,{})}),"Create new"]})}),(0,n.jsx)(x,{...e,isOpen:t,setIsOpen:a,side:"outside-top"})]}),(0,n.jsx)(i.l.Divider,{sx:b})]})}try{m.displayName||(m.displayName="LazyCreateIssueDialog")}catch{}try{p.displayName||(p.displayName="CreateMenuLinkItem")}catch{}try{y.displayName||(y.displayName="CreateMenuItem")}catch{}try{h.displayName||(h.displayName="MenuItemSpinner")}catch{}try{x.displayName||(x.displayName="GlobalCreateMenuOverlay")}catch{}try{j.displayName||(j.displayName="ExternallyAnchoredGlobalCreateMenu")}catch{}try{g.displayName||(g.displayName="GlobalCreateMenuWithAnchor")}catch{}try{f.displayName||(f.displayName="GlobalCreateMenu")}catch{}try{v.displayName||(v.displayName="GlobalCreateMenuItem")}catch{}},47831:(e,t,a)=>{a.d(t,{BP:()=>c,D3:()=>d,O8:()=>n});var n,s=a(74848),i=a(96540),r=a(97156),o=a(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(n||(n={}));let l=(0,i.createContext)("ClientRender");function d({wasServerRendered:e,children:t}){let[a,n]=(0,i.useState)(()=>r.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,o.m)(()=>{"ClientRender"!==a&&n("ClientRender")},[a]),(0,s.jsx)(l.Provider,{value:a,children:t})}function c(){return(0,i.useContext)(l)}try{l.displayName||(l.displayName="RenderPhaseContext")}catch{}try{d.displayName||(d.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,a)=>{a.d(t,{Qn:()=>l,T8:()=>c,Y6:()=>m,k6:()=>u});var n=a(74848),s=a(65556),i=a(96540),r=a(67726),o=a(83784);let l=5e3,d=(0,i.createContext)({addToast:r.l,addPersistedToast:r.l,clearPersistedToast:r.l}),c=(0,i.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,a]=(0,o.A)([]),[r,u]=(0,i.useState)(null),{safeSetTimeout:m}=(0,s.A)(),_=(0,i.useCallback)(function(e){a([...t,e]),m(()=>a(t.slice(1)),l)},[t,m,a]),p=(0,i.useCallback)(function(e){u(e)},[u]),y=(0,i.useCallback)(function(){u(null)},[u]),h=(0,i.useMemo)(()=>({addToast:_,addPersistedToast:p,clearPersistedToast:y}),[p,_,y]),x=(0,i.useMemo)(()=>({toasts:t,persistedToast:r}),[t,r]);return(0,n.jsx)(d.Provider,{value:h,children:(0,n.jsx)(c.Provider,{value:x,children:e})})}function m(){return(0,i.useContext)(d)}try{d.displayName||(d.displayName="ToastContext")}catch{}try{c.displayName||(c.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},67870:(e,t,a)=>{a.d(t,{V:()=>m});var n=a(74848),s=a(96540),i=a(54156),r=a(38621),o=a(65556),l=a(16255);let d={info:"",success:"Toast--success",error:"Toast--error"},c={info:(0,n.jsx)(r.InfoIcon,{}),success:(0,n.jsx)(r.CheckIcon,{}),error:(0,n.jsx)(r.StopIcon,{})},u=({message:e,timeToLive:t,icon:a,type:i="info",role:r="log"})=>{let[u,m]=s.useState(!0),{safeSetTimeout:_}=(0,o.A)();return(0,s.useEffect)(()=>{t&&_(()=>m(!1),t-300)},[_,t]),(0,n.jsx)(l.Z,{children:(0,n.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,n.jsxs)("div",{className:`Toast ${d[i]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${i}`,role:r,children:[(0,n.jsx)("span",{className:"Toast-icon",children:a||c[i]}),(0,n.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function m(){let{toasts:e,persistedToast:t}=(0,s.useContext)(i.T8);return(0,n.jsxs)(n.Fragment,{children:[e.map((e,t)=>(0,n.jsx)(u,{message:e.message,icon:e.icon,timeToLive:i.Qn,type:e.type,role:e.role},t)),t&&(0,n.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{m.displayName||(m.displayName="Toasts")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-profiling-mode_src_index_ts-ui_packages_analytics-provider_AnalyticsProvide-519d14-6451819ec7d5.js.map