import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",p=function(_){return"/vite/pr-preview/pr-1/"+_},E={},r=function(i,s,l){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e),e in E)return;E[e]=!0;const o=e.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const O=t[c];if(O.href===e&&(!o||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":f,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((c,O)=>{n.addEventListener("load",c),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i())},{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:d}=__STORYBOOK_MODULE_PREVIEW_API__,u=T({page:"preview"});d.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;const{SERVER_CHANNEL_URL:a}=globalThis;if(a){const _=S({url:a});d.setServerChannel(_),window.__STORYBOOK_SERVER_CHANNEL__=_}const P={"./src/components/toggle-theme/toggle-theme.stories.tsx":async()=>r(()=>import("./toggle-theme.stories-9bc11032.js"),["assets/toggle-theme.stories-9bc11032.js","assets/index-cb9ba028.js","assets/_commonjsHelpers-725317a4.js","assets/chunk-OPEUWD42-a3b45fd8.js","assets/extends-98964cd2.js"])};async function R(_){return P[_]()}R.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:L,PreviewWeb:h,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([r(()=>import("./config-aca98cfc.js"),["assets/config-aca98cfc.js","assets/index-d475d2ea.js","assets/index-cb9ba028.js","assets/_commonjsHelpers-725317a4.js","assets/_getPrototype-c5a3c90b.js","assets/index-356e4a49.js"]),r(()=>import("./preview-5ef354f3.js"),["assets/preview-5ef354f3.js","assets/index-d475d2ea.js","assets/index-d37d4223.js"]),r(()=>import("./preview-488c7348.js"),[]),r(()=>import("./preview-2e3527f6.js"),["assets/preview-2e3527f6.js","assets/chunk-OPEUWD42-a3b45fd8.js"]),r(()=>import("./preview-770cc08b.js"),["assets/preview-770cc08b.js","assets/index-d475d2ea.js","assets/index-356e4a49.js"]),r(()=>import("./preview-e6f1f377.js"),["assets/preview-e6f1f377.js","assets/index-d475d2ea.js"]),r(()=>import("./preview-62235626.js"),["assets/preview-62235626.js","assets/index-d475d2ea.js","assets/index-356e4a49.js"]),r(()=>import("./preview-b1164a2e.js"),["assets/preview-b1164a2e.js","assets/index-d475d2ea.js"]),r(()=>import("./preview-b038cc74.js"),["assets/preview-b038cc74.js","assets/index-d475d2ea.js","assets/_commonjsHelpers-725317a4.js"]),r(()=>import("./preview-066f7509.js"),["assets/preview-066f7509.js","assets/index-d475d2ea.js"]),r(()=>import("./preview-1e5c59db.js"),[])]);return L(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new w({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:R,getProjectAnnotations:I});export{r as _};
//# sourceMappingURL=iframe-7f80c66a.js.map
