import{s as n,f as q,a as V,j as C}from"./storybookHelper.84e9676b.js";import{r as _,j as c}from"./jsx-runtime.f69557da.js";import{s as j,C as l}from"./styled-components.browser.esm.db777663.js";import"./_commonjsHelpers.b8add541.js";const k=j.div`
  --box-background: transparent;
  --box-color: #000;
  background-color: var(--box-background);
  color: var(--box-color);
  position: relative;
  display: flex;
  max-width: 100%;
  width: ${({$width:e})=>e!=null?e:"100%"};
  flex-direction: ${({$flexDirection:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  ${({$topSpacing:e,$spacing:a})=>e&&!a&&l`
      padding-top: var(--spacing-${e});
    `}
  ${({$bottomSpacing:e,$spacing:a})=>e&&!a&&l`
      padding-bottom: var(--spacing-${e});
    `}
  ${({$leftSpacing:e,$spacing:a})=>e&&!a&&l`
      padding-left: var(--spacing-${e});
    `}
  ${({$rightSpacing:e,$spacing:a})=>e&&!a&&l`
      padding-right: var(--spacing-${e});
    `}
  ${({$spacing:e})=>e&&l`
      padding: var(--spacing-${e});
    `}
    ${({$zIndex:e})=>e&&l`
      padding: ${e};
    `}
`,r=_.exports.forwardRef(({width:e,color:a,topSpacing:p,bottomSpacing:d,leftSpacing:x,rightSpacing:m,spacing:g,alignItems:f="flex-start",justifyContent:y="flex-start",zIndex:b,backgroundColor:t,flexDirection:S="column",className:o,...$},h)=>{const E={...t&&{["--box-background"]:t},...a&&{["--box-color"]:a}};return c(k,{$width:e,$zIndex:b,$justifyContent:y,$alignItems:f,$spacing:g,$topSpacing:p,$bottomSpacing:d,$leftSpacing:x,$rightSpacing:m,$flexDirection:S,ref:h,className:`base-box ${o?` ${o}`:""}`,style:E,...$})});try{r.displayName="Box",r.__docgenInfo={description:"",displayName:"Box",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},topSpacing:{defaultValue:null,description:"",name:"topSpacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},bottomSpacing:{defaultValue:null,description:"",name:"bottomSpacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},leftSpacing:{defaultValue:null,description:"",name:"leftSpacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},rightSpacing:{defaultValue:null,description:"",name:"rightSpacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},alignItems:{defaultValue:{value:"flex-start"},description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},flexDirection:{defaultValue:{value:"column"},description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}}}}}catch{}const z={title:"Components/Box",component:r,tags:["autodocs"],argTypes:{spacing:{...n,description:"Will override all other spacing"},topSpacing:n,bottomSpacing:n,leftSpacing:n,rightSpacing:n,color:{control:"color"},backgroundColor:{control:"color"},flexDirection:q,alignItems:V,justifyContent:C}},u={args:{topSpacing:"l",bottomSpacing:"l",leftSpacing:"s",rightSpacing:"s",color:"#000000",backgroundColor:"#EEEEEE",children:c("div",{children:"Hello!"})}};var s,i,v;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    topSpacing: 'l',
    bottomSpacing: 'l',
    leftSpacing: 's',
    rightSpacing: 's',
    color: '#000000',
    backgroundColor: '#EEEEEE',
    children: <div>Hello!</div>
  }
}`,...(v=(i=u.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};const H=["Primary"];export{u as Primary,H as __namedExportsOrder,z as default};
//# sourceMappingURL=Box.stories.201b4594.js.map
