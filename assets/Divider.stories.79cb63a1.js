import{s as i}from"./storybookHelper.84e9676b.js";import{s as c}from"./styled-components.browser.esm.db777663.js";import{B as m}from"./constants.b9e191d4.js";import{j as p}from"./jsx-runtime.f69557da.js";import"./_commonjsHelpers.b8add541.js";const x=c.div`
  --divider-color: #eee;
  height: 1px;
  margin: ${({$spacing:e})=>`var(--spacing-${e}) 0`};
  background-color: var(--divider-color);
  @media screen and (max-width: ${m.xs.max}) {
    margin: ${({$mobileSpacing:e})=>`var(spacing-${e}) 0`};
  }
`,l=({color:e,spacing:s="l",mobileSpacing:r,className:o,...d})=>{const v={...e&&{["--divider-color"]:e}};return p(x,{"aria-hidden":"true",className:`base-divider ${o?` ${o}`:""}`,$spacing:s,$mobileSpacing:r!=null?r:s,style:v,...d})};try{l.displayName="Divider",l.__docgenInfo={description:"",displayName:"Divider",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},spacing:{defaultValue:{value:"l"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},mobileSpacing:{defaultValue:null,description:"",name:"mobileSpacing",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}}}}}catch{}const $={title:"Components/Divider",component:l,tags:["autodocs"],argTypes:{spacing:i,mobileSpacing:i}},a={args:{spacing:"m",color:"#EEEEEE"}};var n,t,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    spacing: 'm',
    color: '#EEEEEE'
  }
}`,...(u=(t=a.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};const h=["Primary"];export{a as Primary,h as __namedExportsOrder,$ as default};
//# sourceMappingURL=Divider.stories.79cb63a1.js.map
