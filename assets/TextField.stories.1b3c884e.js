import{r as l,a as m,j as e}from"./jsx-runtime.f69557da.js";import{s as Q}from"./styled-components.browser.esm.db777663.js";import{F as R}from"./FormControl.eca3ad70.js";import{L as O}from"./Label.851986c3.js";import"./_commonjsHelpers.b8add541.js";const H=Q.input`
  --input-radius: 0;
  --size-input-default: 3rem;
  max-width: 100%;
  flex-grow: 1;
  transition: all 0.2s ease;
  color: #000;
  border-radius: var(--input-radius);
  border: 1px solid #000;
  height: var(--size-input-default);
  padding: 0 var(--spacing-s);
  &:focus {
    border-color: blue;
  }

  &.is-dirty:invalid,
  &.has-error {
    border-color: #ff0000;
    color: #ff0000;
  }

  &:disabled {
    opacity: 0.5;
  }
`,G=()=>e("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"})}),J=()=>m("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}),e("path",{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"})]}),o=l.exports.forwardRef(({label:a,hideLabel:s=!1,error:r="",fullWidth:z=!1,id:f,type:t="text",className:h,onChange:x,required:b=!1,requiredText:F="*",disabled:v=!1,placeholder:S="",value:w,icon:c,iconLeft:y=!0,maxLength:N,defaultValue:k,errorBox:M=!1,...P},$)=>{const[n,I]=l.exports.useState(!1),[W,B]=l.exports.useState(!1),[D,j]=l.exports.useState(t),p=l.exports.useRef(null),A=l.exports.useMemo(()=>{let i=y?"left":"right";return t==="password"&&(i="right"),i},[t,y]),E=i=>{v||x&&x(i)};let g={};return w&&(g={value:w}),l.exports.useEffect(()=>{t==="password"&&(j(n?"text":"password"),p.current&&p.current.focus())},[n]),m(R,{fullWidth:z,className:`${c||t==="password"?`icon-position-${A}`:""}`,children:[!s&&m(O,{htmlFor:f,children:[a,b&&e("span",{className:"required-symbol",children:F})]}),e(H,{className:`${r?"has-error":""} ${W?"is-dirty":""} ${h||""}`,ref:$||p,type:D,id:f,onChange:E,required:b,disabled:v,placeholder:S,"aria-label":a,maxLength:N,defaultValue:k,onFocus:()=>B(!0),...g,...P}),t==="password"&&e("div",{className:"input-icon clickable",onClick:()=>I(!n),children:n?e(J,{}):e(G,{})}),c&&r.length===0&&t!=="password"&&e("div",{className:"input-icon",children:c}),r&&r.length>0&&e("div",{className:`base-form-input-error ${M?"fill":""}`,children:r})]})});try{o.displayName="TextField",o.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hideLabel:{defaultValue:{value:"false"},description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:""},description:"",name:"error",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},iconLeft:{defaultValue:{value:"true"},description:"",name:"iconLeft",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"date"'},{value:'"time"'},{value:'"datetime-local"'},{value:'"password"'}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:{value:"*"},description:"",name:"requiredText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},errorBox:{defaultValue:{value:"false"},description:"",name:"errorBox",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Components/TextField",component:o,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean"},label:{control:"text"},id:{control:"text"},error:{control:"text"}}},d={render:({label:a="Label",...s})=>e(o,{label:a,...s})},u={render:({label:a="password",type:s="password",...r})=>e(o,{label:a,type:s,...r})};var q,V,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ({
    label = 'Label',
    ...rest
  }) => <TextField label={label} {...rest} />
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var L,T,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    label = 'password',
    type = 'password',
    ...rest
  }) => <TextField label={label} type={type} {...rest} />
}`,...(_=(T=u.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const ae=["Default","Password"];export{d as Default,u as Password,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=TextField.stories.1b3c884e.js.map
