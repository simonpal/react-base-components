import{r as i,a as p,j as n}from"./jsx-runtime.f69557da.js";import{s as V}from"./styled-components.browser.esm.db777663.js";import{F as k}from"./FormControl.eca3ad70.js";import"./_commonjsHelpers.b8add541.js";const C=V.div`
  --input-radius: 0;
  --size-input-default: 3rem;
  --input-border-color: #ccc;
  display: inline-flex;
  flex-direction: row;
  height: var(--size-input-default);
  // line-height: var(--sizes-input-default);
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-radius);
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  width: 100%;
  background-color: #fff;
  align-items: stretch;

  button {
    // height: 100%;
    width: 2rem;
    background-color: transparent;
    // display: inline-flex;
    // flex-grow: 0;
    font-size: 1.5rem;
    border: 0;
    color: #000;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:last-of-type {
      border-left: 1px solid var(--input-border-color);
    }

    &:first-of-type {
      border-right: 1px solid var(--input-border-color);
    }

    &:disabled {
      svg {
        path {
          fill: var(--input-border-color);
        }
      }

      cursor: not-allowed;
      color: var(--input-border-color);
    }
  }

  input:not([type='checkbox']):not([type='radio']) {
    display: inline-flex;
    height: 100%;
    min-width: 2rem;
    text-align: center;
    border: 0;
    background-color: transparent;
    width: calc(100% - 4rem);
    padding: 0 var(--spacing-s);
    font-size: 1rem;
    -moz-appearance: textfield;
    box-shadow: none;
    flex-grow: 1;
    color: #000;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    &:disabled {
      color: var(--input-border-color);
    }
  }
`,s=i.exports.forwardRef(({min:e=1,max:t=1e4,value:r=1,hideLabel:u=!1,fullWidth:h=!1,label:g="",id:c="",required:y=!1,handleChange:x,disabled:o=!1,...v},w)=>{const d=a=>{a>=e&&a<=t&&x(a)},q=i.exports.useMemo(()=>o||r===e,[o,r,e]),N=i.exports.useMemo(()=>o||r===t,[o,r,t]);return p(k,{fullWidth:h,children:[!u&&p("label",{htmlFor:c,children:[g,y&&n("span",{children:"(required)"})]}),p(C,{className:"base-number-input-wrapper",children:[n("button",{disabled:q,onClick:()=>d(r-1),"aria-label":"Decrease",children:"-"}),n("input",{id:c,type:"number",min:e,max:t,value:r,disabled:o,onFocus:a=>a.target.select(),onChange:a=>{d(Number(a.target.value))},ref:w,"aria-label":"Quantity",...v}),n("button",{disabled:N,onClick:()=>d(Number(r)+1),"aria-label":"Increase",children:"+"})]})]})});try{s.displayName="NumberInput",s.__docgenInfo={description:"",displayName:"NumberInput",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},hideLabel:{defaultValue:{value:"false"},description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"1"},description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"1"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"10000"},description:"",name:"max",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(val: number) => void"}}}}}catch{}const F={title:"Components/NumberInput",component:s,tags:["autodocs"],argTypes:{fullWidth:{control:"boolean"},required:{control:"boolean"},disabled:{control:"boolean"},hideLabel:{control:"boolean"},min:{control:"number"},max:{control:"number"},value:{control:"number"}}},I=e=>{const[t,r]=i.exports.useState(5);return n(s,{...e,value:t,handleChange:u=>r(u)})},l={render:e=>n(I,{...e})};var m,b,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <NumberInputWithState {...args} />
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const S=["Primary"];export{l as Primary,S as __namedExportsOrder,F as default};
//# sourceMappingURL=NumberInput.stories.12cbdcab.js.map
