import{s as p,C as e}from"./styled-components.browser.esm.db777663.js";import{a as c,j as o}from"./jsx-runtime.f69557da.js";import"./_commonjsHelpers.b8add541.js";const n=p.span`
  position: absolute;
  transition: opacity 0.2s ease;
  border-radius: 0.25rem;
  background: #333;
  color: #fff;
  padding: var(--spacing-2xs);
  white-space: nowrap;
  font-size: 0.875rem;
  ${({$position:t})=>t==="top"&&e`
      left: 50%;
      bottom: calc(100% + 0.6rem);
      transform: translateX(-50%);
      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top: 0.3rem solid #333;
        border-left: 0.3rem solid transparent;
        border-right: 0.3rem solid transparent;
      }
    `}
  ${({$position:t})=>t==="bottom"&&e`
      left: 50%;
      top: calc(100% + 0.6rem);
      transform: translateX(-50%);
      &:after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 0.3rem solid #333;
        border-left: 0.3rem solid transparent;
        border-right: 0.3rem solid transparent;
      }
    `}
  ${({$position:t})=>t==="right"&&e`
      top: 50%;
      left: calc(100% + 0.6rem);
      transform: translateY(-50%);
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-right: 0.3rem solid #333;
        border-top: 0.3rem solid transparent;
        border-bottom: 0.3rem solid transparent;
      }
    `}
  ${({$position:t})=>t==="left"&&e`
      top: 50%;
      right: calc(100% + 0.6rem);
      transform: translateY(-50%);
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-left: 0.3rem solid #333;
        border-top: 0.3rem solid transparent;
        border-bottom: 0.3rem solid transparent;
      }
    `}
`,f=p.span`
  position: relative;
  ${n} {
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    ${n} {
      opacity: 1;
      visibility: visible;
    }
  }
`,a=({title:t,position:d="top",children:m})=>c(f,{children:[m,o(n,{$position:d,role:"tooltip",children:t})]});try{a.displayName="Tooltip",a.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}}}}}catch{}const g={title:"Components/Tooltip",component:a,tags:["autodocs"],argTypes:{position:{control:"select",options:["top","right","bottom","left"]},title:{control:"text"}}},r={render:t=>o("div",{style:{display:"flex",justifyContent:"center",margin:"4rem"},children:o(a,{...t,children:o("button",{children:"Hover me"})})})};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'center',
    margin: '4rem'
  }}>
      <Tooltip {...args}>
        <button>Hover me</button>
      </Tooltip>
    </div>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["Primary"];export{r as Primary,h as __namedExportsOrder,g as default};
//# sourceMappingURL=Tooltip.stories.770118a2.js.map
