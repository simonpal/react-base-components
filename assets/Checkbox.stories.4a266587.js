import{r as h,j as t,a as x}from"./jsx-runtime.f69557da.js";import{s as g}from"./styled-components.browser.esm.db777663.js";import{F as y}from"./FormControl.eca3ad70.js";import{L as k}from"./Label.851986c3.js";import"./_commonjsHelpers.b8add541.js";const v=g(y)`
  --form-control-color: #0000ff;
  --form-control-disabled: #555;
  align-items: center;
  input[type='checkbox'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 0 0.5rem 0 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    &:before {
      content: '';
      width: 0.65em;
      height: 0.65em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
      /* Windows High Contrast Mode */
      background-color: CanvasText;
    }
    &:checked:before {
      transform: scale(1);
    }
    &:focus {
      outline: max(2px, 0.15em) solid #0000ff;
      outline-offset: max(2px, 0.15em);
    }
    &:disabled {
      --form-control-color: var(--form-control-disabled);

      color: var(--form-control-disabled);
      cursor: not-allowed;
    }
  }
`,a=h.exports.forwardRef(({fullWidth:e=!1,id:r,label:c,value:d="",onChange:m,hideLabel:p,className:n,name:u="",...f},b)=>t(v,{inlineControl:!0,fullWidth:e,className:`base-checkbox ${n?` ${n}`:""}`,children:x(k,{htmlFor:r,tabIndex:0,children:[t("input",{type:"checkbox",id:r,onChange:m,name:u,value:d,...f,ref:b}),!p&&c]})}));try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string | (string & readonly string[])"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean"},label:{control:"text"},id:{control:"text"}}},o={render:({label:e="Label",...r})=>t(a,{label:e,...r})};var l,s,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    label = 'Label',
    ...rest
  }) => <Checkbox label={label} {...rest} />
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const W=["Primary"];export{o as Primary,W as __namedExportsOrder,V as default};
//# sourceMappingURL=Checkbox.stories.4a266587.js.map
