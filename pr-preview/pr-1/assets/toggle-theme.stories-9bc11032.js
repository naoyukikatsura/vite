import{r as o}from"./index-cb9ba028.js";import{a as x}from"./chunk-OPEUWD42-a3b45fd8.js";import{_ as u}from"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";var v={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=o,R=Symbol.for("react.element"),S=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,w=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,n){var r,l={},c=null,s=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)T.call(t,r)&&!N.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:R,type:e,key:c,ref:s,props:l,_owner:w.current}}p.Fragment=S;p.jsx=y;p.jsxs=y;v.exports=p;var _=v.exports;function O(e,t,{checkForDefaultPrevented:n=!0}={}){return function(l){if(e==null||e(l),n===!1||!l.defaultPrevented)return t==null?void 0:t(l)}}function C(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function j({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,l]=V({defaultProp:t,onChange:n}),c=e!==void 0,s=c?e:r,a=C(n),i=o.useCallback(f=>{if(c){const h=typeof f=="function"?f(e):f;h!==e&&a(h)}else l(f)},[c,e,l,a]);return[s,i]}function V({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,l=o.useRef(r),c=C(t);return o.useEffect(()=>{l.current!==r&&(c(r),l.current=r)},[r,l,c]),n}function D(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function A(...e){return t=>e.forEach(n=>D(n,t))}const P=o.forwardRef((e,t)=>{const{children:n,...r}=e,l=o.Children.toArray(n),c=l.find(I);if(c){const s=c.props.children,a=l.map(i=>i===c?o.Children.count(s)>1?o.Children.only(null):o.isValidElement(s)?s.props.children:null:i);return o.createElement(m,u({},r,{ref:t}),o.isValidElement(s)?o.cloneElement(s,void 0,a):null)}return o.createElement(m,u({},r,{ref:t}),n)});P.displayName="Slot";const m=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...U(r,n.props),ref:A(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null});m.displayName="SlotClone";const F=({children:e})=>o.createElement(o.Fragment,null,e);function I(e){return o.isValidElement(e)&&e.type===F}function U(e,t){const n={...t};for(const r in t){const l=e[r],c=t[r];/^on[A-Z]/.test(r)?l&&c?n[r]=(...a)=>{c(...a),l(...a)}:l&&(n[r]=l):r==="style"?n[r]={...l,...c}:r==="className"&&(n[r]=[l,c].filter(Boolean).join(" "))}return{...e,...n}}const q=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],L=q.reduce((e,t)=>{const n=o.forwardRef((r,l)=>{const{asChild:c,...s}=r,a=c?P:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(a,u({},s,{ref:l}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),B=o.forwardRef((e,t)=>{const{pressed:n,defaultPressed:r=!1,onPressedChange:l,...c}=e,[s=!1,a]=j({prop:n,onChange:l,defaultProp:r});return o.createElement(L.button,u({type:"button","aria-pressed":s,"data-state":s?"on":"off","data-disabled":e.disabled?"":void 0},c,{ref:t,onClick:O(e.onClick,()=>{e.disabled||a(!s)})}))}),M=({value:e,onClick:t})=>{const n=o.useMemo(()=>{switch(e){case"light":return"light";case"dark":return"dark"}},[e]);return _.jsx(B,{"aria-label":"Toggle website theme",onClick:t,value:e,children:n})},E=o.memo(M);try{toggletheme.displayName="toggletheme",toggletheme.__docgenInfo={description:"",displayName:"toggletheme",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const K={title:"Components/ToggleTheme",component:E,argTypes:{value:{control:{type:"radio"},options:["light","dark"]}},args:{value:"light"}},J=e=>_.jsx(E,{...e,onClick:x("change")}),d=J.bind({});var $,g,b;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:'args => <ToggleTheme {...args} onClick={action("change")} />',...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Q=["Default"];export{d as Default,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=toggle-theme.stories-9bc11032.js.map