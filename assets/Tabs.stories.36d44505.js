import{r as v,a as n,j as t}from"./jsx-runtime.f69557da.js";import{s as I}from"./styled-components.browser.esm.db777663.js";import"./_commonjsHelpers.b8add541.js";const T=I.ul`
  display: flex;
  list-style-type: none;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 1.5rem 0;
  padding: 0;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    background-color: transparent;
    display: inline-flex;

    button,
    span {
      border: 0;

      color: #444;
      background-color: transparent;
      padding: var(--spacing-xs);
      position: relative;
      font-weight: bold;
    }

    button {
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    &.active button {
      color: #000;
      text-decoration: underline;
    }

    &:not(:first-of-type) {
      button::before,
      span::before {
        content: '';
        border-right: 1px solid #eee;
        height: 18px;
        position: absolute;
        left: 0;
      }
    }
  }
`,d=({children:r,onTabChange:s,defaultActiveIndex:i=0,className:c})=>{if(!r)return null;const[f,h]=v.exports.useState(i),p=e=>f===e,y=e=>{h(e),typeof s=="function"&&s(e)};return n("div",{children:[t(T,{className:`base-tabs-headers ${c}`,role:"tablist",children:r&&r.map((e,o)=>t("li",{className:`${p(o)?"active":""} ${e.props.disabled?"disabled":""}`,children:t("button",{disabled:e.props.disabled,"aria-selected":p(o),"aria-controls":`${e.props.eventKey}-content`,id:`${e.props.eventKey}-control`,type:"button",role:"tab",onClick:()=>y(o),children:e.props.title})},e.props.eventKey))}),r&&r.map((e,o)=>t(a,{...e.props,visible:p(o)},`tabitem-${e.props.eventKey}`))]})},a=({children:r,visible:s=!1,eventKey:i,title:c})=>s?t("div",{role:"tabpanel",id:`${i}-content`,"aria-labelledby":`${i}-control`,children:r}):null;try{d.displayName="Tabs",d.__docgenInfo={description:"",displayName:"Tabs",props:{defaultActiveIndex:{defaultValue:{value:"0"},description:"",name:"defaultActiveIndex",required:!1,type:{name:"number"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((idx: number) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{a.displayName="TabItem",a.__docgenInfo={description:"",displayName:"TabItem",props:{eventKey:{defaultValue:null,description:"",name:"eventKey",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Components/Tabs",component:d,tags:["autodocs"],argTypes:{defaultActiveIndex:{control:"number"}}},l={render:r=>n(d,{...r,children:[n(a,{eventKey:"first",title:"First",children:[t("h3",{children:"First tab"}),t("h3",{children:"Lorem Ipsum dolor sit amet."})]}),n(a,{eventKey:"second",title:"Second",children:[t("h3",{children:"Second tab"}),t("p",{children:"Lorem Ipsum dolor sit amet."})]}),n(a,{disabled:!0,eventKey:"third",title:"Disabled",children:[t("h3",{children:"Third tab"}),t("p",{children:"Lorem Ipsum dolor sit amet."})]}),n(a,{eventKey:"fourth",title:"Fourth",children:[t("h3",{children:"Fourth tab"}),t("p",{children:"Lorem Ipsum dolor sit amet."})]})]})};var m,u,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabItem eventKey="first" title="First">
        <h3>First tab</h3>
        <h3>Lorem Ipsum dolor sit amet.</h3>
      </TabItem>
      <TabItem eventKey="second" title="Second">
        <h3>Second tab</h3>
        <p>Lorem Ipsum dolor sit amet.</p>
      </TabItem>
      <TabItem disabled eventKey="third" title="Disabled">
        <h3>Third tab</h3>
        <p>Lorem Ipsum dolor sit amet.</p>
      </TabItem>
      <TabItem eventKey="fourth" title="Fourth">
        <h3>Fourth tab</h3>
        <p>Lorem Ipsum dolor sit amet.</p>
      </TabItem>
    </Tabs>
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const F=["Primary"];export{l as Primary,F as __namedExportsOrder,K as default};
//# sourceMappingURL=Tabs.stories.36d44505.js.map
