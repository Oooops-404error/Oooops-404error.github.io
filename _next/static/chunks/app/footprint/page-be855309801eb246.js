(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{66844:function(e,t,n){Promise.resolve().then(n.bind(n,73523))},73523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(57437),r=n(2265);let l={mapType:"Mapbox",logoVisible:!1,mapOptions:{pitch:40,style:"light",center:[109.90188405773064,32.640493912708024],zoom:5,token:"pk.eyJ1Ijoib29vb3BzNDA0IiwiYSI6ImNsdHEwb3lvaDAxMjAyaW15MDEwZGRocTYifQ.U88x7PbW-6MWoWnVor7UOQ"}},a={autoFit:!1,shape:"arc",size:1,color:"#8C1EB2",animate:{enable:!0,interval:.1,trailLength:.5,duration:2},state:{active:{color:"#FFF684"}},style:{opacity:.8}},i={autoFit:!1,shape:"cylinder",size:[1,1,30],color:"#006CFF",state:{active:!0},style:{opacity:.6}};var u=n(24930),s=n.n(u);let c=s()(()=>Promise.all([n.e(402),n.e(530),n.e(415),n.e(201),n.e(357),n.e(828),n.e(772)]).then(n.bind(n,5363)).then(e=>e.LarkMap),{loadableGenerated:{webpack:()=>[5363]},ssr:!1}),d=s()(()=>Promise.all([n.e(402),n.e(530),n.e(415),n.e(201),n.e(357),n.e(828),n.e(772)]).then(n.bind(n,5363)).then(e=>e.LineLayer),{loadableGenerated:{webpack:()=>[5363]},ssr:!1}),f=s()(()=>Promise.all([n.e(402),n.e(530),n.e(415),n.e(201),n.e(357),n.e(828),n.e(772)]).then(n.bind(n,5363)).then(e=>e.PointLayer),{loadableGenerated:{webpack:()=>[5363]},ssr:!1});function p(){let[e,t]=(0,r.useState)(i),[n,u]=(0,r.useState)(a),[s,p]=(0,r.useState)({data:[],parser:{type:"json",x:"longitude",y:"latitude"}}),[h,b]=(0,r.useState)({data:[],parser:{type:"json",coordinates:"coord"}});return(0,r.useEffect)(()=>{fetch("https://oooops302.tech/api/archive/footprint/queryFootprint").then(e=>e.json()).then(e=>{p(t=>({...t,data:e}))}),fetch("https://oooops302.tech/api/archive/footprint/queryFlight").then(e=>e.json()).then(e=>{b(t=>({...t,data:e}))})},[]),(0,o.jsxs)(c,{...l,style:{height:"85vh"},children:[(0,o.jsx)(f,{...e,source:s}),(0,o.jsx)(d,{...n,source:h})]})}},24930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let o=n(86921);n(57437),n(2265);let r=o._(n(84795));function l(e,t){let n={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};return"function"==typeof e&&(n.loader=e),(0,r.default)({...n,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19721:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let o=n(99775);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new o.BailoutToCSRError(t);return n}},84795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let o=n(57437),r=n(2265),l=n(19721);function a(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},n=(0,r.lazy)(()=>t.loader().then(a)),u=t.loading;function s(e){let a=u?(0,o.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,o.jsx)(n,{...e}):(0,o.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(n,{...e})});return(0,o.jsx)(r.Suspense,{fallback:a,children:i})}return s.displayName="LoadableComponent",s}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=66844)}),_N_E=e.O()}]);