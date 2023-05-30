import{r as h,j as t,a as d,F as y}from"./jsx-runtime.f69557da.js";import{s as x}from"./styled-components.browser.esm.db777663.js";import{F as v}from"./FormControl.eca3ad70.js";import{L as _}from"./Label.851986c3.js";import"./_commonjsHelpers.b8add541.js";const R=x(v)`
  --form-control-color: #0000ff;
  --form-control-disabled: #555;
  align-items: center;
  input[type='radio'] {
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
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    &:before {
      content: '';
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
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
`,o=h.exports.forwardRef(({fullWidth:e=!1,id:r,label:m,value:c="",onChange:u,hideLabel:p,className:n,name:f="",...b},g)=>t(R,{inlineControl:!0,fullWidth:e,className:`base-checkbox ${n?` ${n}`:""}`,children:d(_,{htmlFor:r,children:[t("input",{type:"radio",id:r,onChange:u,name:f,value:c,...b,ref:g}),!p&&m]})}));try{o.displayName="Radiobutton",o.__docgenInfo={description:"",displayName:"Radiobutton",props:{fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string | (string & readonly string[])"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Components/Radiobutton",component:o,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean"},label:{control:"text"},id:{control:"text"}}},a={render:({label:e="Label",...r})=>d(y,{children:[t(o,{label:e,name:"testgroup",...r}),t(o,{label:e,name:"testgroup",...r})]})};var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    label = 'Label',
    ...rest
  }) => <>
      <Radiobutton label={label} name="testgroup" {...rest} />
      <Radiobutton label={label} name="testgroup" {...rest} />
    </>
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const W=["Primary"];export{a as Primary,W as __namedExportsOrder,V as default};
//# sourceMappingURL=Radiobutton.stories.8cb281a3.js.map
