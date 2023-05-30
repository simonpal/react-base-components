import{r as x,a as t,j as e}from"./jsx-runtime.f69557da.js";import{s as p}from"./styled-components.browser.esm.db777663.js";import{F as v}from"./FormControl.eca3ad70.js";import{L as w}from"./Label.851986c3.js";import"./_commonjsHelpers.b8add541.js";const q=p.div`
  --select-border: #777;
  --select-focus: blue;
  --select-arrow: var(--select-border);
  --size-input-default: 3rem;
  width: 100%;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
  /* min-width: 15ch;
  max-width: 30ch; */

  border: 1px solid var(--select-border);
  border-radius: 0.25rem;
  height: var(--size-input-default);
  align-items: center;
  padding: 0 0.5rem;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  /* background-image: linear-gradient(to top, #f9f9f9, #fff 33%); */

  select,
  &::after {
    grid-area: select;
  }

  // Custom arrow
  &:not(.select--multiple)::after {
    content: '';
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`,S=p.select`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  height: var(--size-input-default);
  font-size: 1rem;

  z-index: 1;
  outline: none;

  // Remove dropdown arrow in IE10 & IE11
  // @link https://www.filamentgroup.com/lab/select-css.html
  &::-ms-expand {
    display: none;
  }

  &:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }
  &:disabled {
    opacity: 0.5;
  }
  &:invalid,
  &.has-error {
    border-color: #ff0000;
    color: #ff0000;
  }
  [multiple] {
    padding-right: 0;
    height: 6rem;

    option {
      white-space: normal;

      // Only affects Chrome
      outline-color: var(--select-focus);
    }
  }
`,l=x.exports.forwardRef(({children:r,hideLabel:u,label:m,id:a,fullWidth:f,required:i,requiredText:h="*",error:n,errorBox:b,...g},y)=>t(v,{fullWidth:f,children:[!u&&t(w,{htmlFor:a,children:[m,i&&e("span",{className:"required-symbol",children:h})]}),t(q,{children:[e(S,{id:a,ref:y,required:i,...g,children:r}),e("span",{className:"focus"})]}),n&&n.length>0&&e("div",{className:`base-form-input-error ${b?"fill":""}`,children:n})]}));try{l.displayName="Select",l.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},requiredText:{defaultValue:{value:"*"},description:"",name:"requiredText",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorBox:{defaultValue:null,description:"",name:"errorBox",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/Select",component:l,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean"},hideLabel:{control:"boolean"},required:{control:"boolean"},errorBox:{control:"boolean"},label:{control:"text"},id:{control:"text"},requiredText:{control:"text"},error:{control:"text"}}},o={render:r=>t(l,{...r,children:[e("option",{children:"Make selection"}),e("option",{value:"1",children:"First"}),e("option",{value:"2",children:"Second"}),e("option",{value:"3",children:"Third"}),e("option",{value:"4",children:"Fourth"})]})};var s,d,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Select {...args}>
      <option>Make selection</option>
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
    </Select>
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["Primary"];export{o as Primary,L as __namedExportsOrder,T as default};
//# sourceMappingURL=Select.stories.07184234.js.map
