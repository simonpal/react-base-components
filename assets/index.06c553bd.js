import{R as r,j as u}from"./jsx-runtime.f69557da.js";const s=r.createContext({});function c(t){return n;function n(o){const e=a(o.components);return u(t,{...o,allComponents:e})}}function a(t){const n=r.useContext(s);return r.useMemo(()=>typeof t=="function"?t(n):{...n,...t},[n,t])}const i={};function l({components:t,children:n,disableParentContext:o}){let e;return o?e=typeof t=="function"?t({}):t||i:e=a(t),u(s.Provider,{value:e,children:n})}export{s as M,l as a,a as u,c as w};
//# sourceMappingURL=index.06c553bd.js.map