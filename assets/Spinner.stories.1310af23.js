import{e as u}from"./storybookHelper.84e9676b.js";import{U as g,s as f}from"./styled-components.browser.esm.db777663.js";import{j as n}from"./jsx-runtime.f69557da.js";import"./_commonjsHelpers.b8add541.js";const a={xs:"0.75rem",sm:"1rem",md:"1.25rem",lg:"2rem",xl:"2.5rem",xxl:"4rem"},v=g`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,x=f.div`
  > div,
  > div:after {
    border-radius: 50%;
  }

  > div,
  > div:after {
    width: ${({size:r})=>`${a[r!=null?r:"sm"]}`};
    height: ${({size:r})=>`${a[r!=null?r:"sm"]}`};
  }
  > div {
    margin: 0 auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation: ${v} 1.1s infinite cubic-bezier(0.58, 0.32, 0.44, 0.72); // linear
    border-style: solid;
    border-top-color: rgba(255, 255, 255, 0.2);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.2);
    border-left-color: var(--spinner-color, #000);
    border-width: var(--spinner-width, 0.25rem);
  }
`,o=({color:r,size:m="sm",borderWidth:t,className:s,...c})=>{const p={...r&&{["--spinner-color"]:r},...t&&{["--spinner-width"]:t}};return n(x,{size:m,className:`${s?` ${s}`:""}`,...c,children:n("div",{style:p})})};try{o.displayName="Spinner",o.__docgenInfo={description:"",displayName:"Spinner",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"xl"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xxl"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Components/Spinner",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","xxl"]},color:u,borderWidth:{control:"text"}}},e={args:{size:"lg"}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    size: 'lg'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const $=["Primary"];export{e as Primary,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=Spinner.stories.1310af23.js.map
