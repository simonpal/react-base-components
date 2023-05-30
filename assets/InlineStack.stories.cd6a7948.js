import{s as B,a as m,j as f}from"./storybookHelper.84e9676b.js";import{B as t}from"./Button.950881d0.js";import{j as e,R as x,a as T}from"./jsx-runtime.f69557da.js";import{s as d}from"./styled-components.browser.esm.db777663.js";import"./_commonjsHelpers.b8add541.js";const g=d.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  justify-content: ${({$justifyContent:n})=>n};
  align-items: ${({$alignItems:n})=>n};
  gap: ${({$spacing:n})=>`var(--spacing-${n})`};
`,y=d.div`
  display: inline-flex;
`,a=({spacing:n,children:c,justifyContent:v="flex-start",alignItems:p="stretch",className:s,...h})=>e(g,{$spacing:n,$alignItems:p,$justifyContent:v,className:`base-inline-stack-wrapper ${s?` ${s}`:""}`,...h,children:x.Children.map(c,l=>l?e(y,{children:l}):null)});try{a.displayName="InlineStack",a.__docgenInfo={description:"",displayName:"InlineStack",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},alignItems:{defaultValue:{value:"stretch"},description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}}}}}catch{}const S={title:"Components/InlineStack",component:a,tags:["autodocs"],argTypes:{spacing:B,alignItems:m,justifyContent:f}},i={render:n=>T(a,{...n,children:[e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})}),e("div",{children:e(t,{children:"This is a Button"})})]})};var r,u,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <InlineStack {...args}>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
    </InlineStack>
}`,...(o=(u=i.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const C=["OneItem"];export{i as OneItem,C as __namedExportsOrder,S as default};
//# sourceMappingURL=InlineStack.stories.cd6a7948.js.map
