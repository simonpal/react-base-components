import{B as o}from"./Button.950881d0.js";import{s as f,C as g}from"./styled-components.browser.esm.db777663.js";import{j as r,a as u}from"./jsx-runtime.f69557da.js";import"./_commonjsHelpers.b8add541.js";const G=f.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  button {
    border-radius: 0;
    &:first-of-type {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:last-of-type {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
  }
  ${({$noGap:t})=>t&&g`
      gap: 0;
      button.outline {
        border-width: 1px 0 1px 1px !important;
        &:last-of-type {
          border-width: 1px !important;
        }
      }
    `}
`,e=({children:t,noGap:b=!1})=>r(G,{$noGap:b,children:t});try{e.displayName="ButtonGroup",e.__docgenInfo={description:"",displayName:"ButtonGroup",props:{noGap:{defaultValue:{value:"false"},description:"",name:"noGap",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Components/ButtonGroup",component:e,tags:["autodocs"],argTypes:{noGap:{control:"boolean"}}},n={render:t=>u(e,{...t,children:[r(o,{children:"One"}),r(o,{children:"Two"}),r(o,{children:"Three"}),r(o,{children:"Four"})]})},a={render:t=>u(e,{...t,children:[r(o,{priority:"secondary",children:"One"}),r(o,{priority:"secondary",children:"Two"}),r(o,{priority:"secondary",children:"Three"}),r(o,{priority:"secondary",children:"Four"})]})},i={render:t=>u(e,{noGap:!0,children:[r(o,{priority:"outline",children:"One"}),r(o,{priority:"outline",children:"Two"}),r(o,{priority:"outline",children:"Three"}),r(o,{priority:"outline",children:"Four"})]})};var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,l,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button priority="secondary">One</Button>
      <Button priority="secondary">Two</Button>
      <Button priority="secondary">Three</Button>
      <Button priority="secondary">Four</Button>
    </ButtonGroup>
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var B,m,h;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <ButtonGroup noGap>
      <Button priority="outline">One</Button>
      <Button priority="outline">Two</Button>
      <Button priority="outline">Three</Button>
      <Button priority="outline">Four</Button>
    </ButtonGroup>
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const v=["Primary","Secondary","Outlined"];export{i as Outlined,n as Primary,a as Secondary,v as __namedExportsOrder,O as default};
//# sourceMappingURL=ButtonGroup.stories.cc0e5fb2.js.map
