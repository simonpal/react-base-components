import{s as b}from"./styled-components.browser.esm.db777663.js";import{a as c,j as i}from"./jsx-runtime.f69557da.js";import"./_commonjsHelpers.b8add541.js";const w=b.div`
  --switch-color: #0000ff;
  position: relative;
  margin-right: 10px;
  width: 75px;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  text-align: left;
  input[type='checkbox'] {
    display: none;
  }
  label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 20px;
    margin: 0;
    &:focus {
      outline: none;
      > .toggle-switch-switch {
        box-shadow: 0 0 2px 5px var(--switch-color);
      }
    }
    > span:focus {
      outline: none;
    }
  }
  .toggle-switch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 34px;
      padding: 0;
      line-height: 34px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5); // TODO: set as variable
      font-weight: bold;
      box-sizing: border-box;
    }
    &:before {
      content: attr(data-yes);
      text-transform: uppercase;
      padding-left: 10px;
      background-color: var(--switch-color);
      color: #fff;
    }
  }
  .toggle-switch-disabled {
    /* background-color: #eee; */
    opacity: 0.5;
    cursor: not-allowed;
    &:before {
      /* background-color: #eee; */
      cursor: not-allowed;
    }
  }
  .toggle-switch-inner:after {
    content: attr(data-no);
    text-transform: uppercase;
    padding-right: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: right;
  }
  .toggle-switch-switch {
    display: block;
    width: 24px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  input[type='checkbox']:checked + label {
    .toggle-switch-inner {
      margin-left: 0;
    }
    .toggle-switch-switch {
      right: 0px;
    }
  }
  &.small-switch {
    width: 40px;
    .toggle-switch-inner {
      &:after,
      &:before {
        content: '';
        height: 20px;
        line-height: 20px;
      }
    }
    .toggle-switch-switch {
      width: 16px;
      right: 20px;
      margin: 2px;
    }
  }
`,n=({id:t,name:h,checked:r,onChange:l,optionLabels:s=["Yes","No"],small:u,disabled:o})=>{const m=e=>{e.code!=="Enter"&&e.code!=="Space"||(e.preventDefault(),l(!r))};return c(w,{className:`${u?" small-switch":""}`,role:"switch","aria-checked":r,children:[i("input",{type:"checkbox",name:h,className:"toggle-switch-checkbox",id:t,checked:r,onChange:e=>l(e.target.checked),disabled:o}),t?c("label",{className:"toggle-switch-label",tabIndex:o?-1:1,onKeyDown:e=>m(e),htmlFor:t,children:[i("span",{className:o?"toggle-switch-inner toggle-switch-disabled":"toggle-switch-inner","data-yes":s[0],"data-no":s[1],tabIndex:-1}),i("span",{className:o?"toggle-switch-switch toggle-switch-disabled":"toggle-switch-switch",tabIndex:-1})]}):null]})};try{n.displayName="ToggleSwitch",n.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},optionLabels:{defaultValue:{value:"['Yes', 'No']"},description:"",name:"optionLabels",required:!1,type:{name:"string[]"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/ToggleSwitch",component:n,tags:["autodocs"],argTypes:{id:{control:"text"},checked:{control:"boolean"},name:{control:"text"},small:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{id:"myswitch",small:!0}};var d,g,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    id: 'myswitch',
    small: true
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const v=["Primary"];export{a as Primary,v as __namedExportsOrder,k as default};
//# sourceMappingURL=ToggleSwitch.stories.ef75185e.js.map
