import{r as o,a as B,j as e}from"./jsx-runtime.f69557da.js";import{s as k,C as D}from"./styled-components.browser.esm.db777663.js";import{B as T}from"./Button.950881d0.js";import"./_commonjsHelpers.b8add541.js";const S=k.div`
  position: relative;
  [role='menu'] {
    display: none;
    position: absolute;
    max-height: ${({$maxHeight:t})=>`${t}px`};
    flex-direction: column;
    left: 0;
    overflow: auto;
    top: calc(100% + 1px);
    bottom: auto;
    /* transform-origin: top left; */
    left: 0;
    background-color: #333;
    padding: 0;
    margin: 0;
    width: 200px;
    /* margin: 1rem 0 0 0; */
    /* &:after {
      position: absolute;
      left: 1rem;
      bottom: 100%;
      content: '';
      border-bottom: 8px solid #333;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    } */
    button {
      color: #fff;
      border-color: rgba(255, 255, 255, 0.2);
      border-width: 0 0 1px 0;
      background-color: transparent;
      &:hover {
        background-color: purple;
      }
    }
    ${({$fromTop:t})=>!t&&D`
        top: auto;
        bottom: calc(100% + 1px);
        /* margin: 0 0 1rem 0; */
      `};
  }
  [aria-expanded='true'] + [role='menu'] {
    display: flex;
  }
  svg {
    margin: 0;
  }
`,v=300,l=({label:t,id:u,children:E,...M})=>{const[r,h]=o.exports.useState(!1),[C,H]=o.exports.useState(!0),[_,R]=o.exports.useState(v),n=o.exports.useRef(null),d=o.exports.useRef(null),f=s=>{n.current&&!n.current.contains(s.target)&&h(!1)},p=o.exports.useCallback(()=>{if(n.current&&d.current){const s=n.current.getBoundingClientRect(),m=d.current.getBoundingClientRect(),a=m.top+m.height,{clientHeight:g}=document.documentElement,b=s.height+a<g;H(b);let c=v;if(m.top>0&&a<g){const x=b?g-(a+s.height):a;c=x>c?c:x}R(c)}},[]);return o.exports.useEffect(()=>(r&&(p(),window.addEventListener("scroll",p),document.addEventListener("mousedown",f)),()=>{window.removeEventListener("scroll",p),document.removeEventListener("mousedown",f)}),[r]),B(S,{$maxHeight:_,$fromTop:C,children:[e(T,{type:"button","aria-haspopup":"true","aria-expanded":r,"aria-controls":u,onClick:()=>h(!r),ref:d,...M,children:t}),e("ul",{role:"menu",id:u,"aria-label":typeof t=="string"?t:u,ref:n,children:E})]})};try{l.displayName="DropMenuButton",l.__docgenInfo={description:"",displayName:"DropMenuButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Components/DropMenuButton",component:l,tags:["autodocs"],argTypes:{label:{control:"text"},id:{control:"text"}}},$=e("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"})}),i={render:t=>e("div",{style:{height:"400px"},children:B(l,{...t,label:$,children:[e("button",{children:"Item 1"}),e("button",{children:"Item 2"}),e("button",{children:"Item 3"}),e("button",{children:"Item 4"})]})})};var w,y,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    height: '400px'
  }}>
      <DropMenuButton {...args} label={Icon}>
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
        <button>Item 4</button>
      </DropMenuButton>
    </div>
}`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const q=["OneItem"];export{i as OneItem,q as __namedExportsOrder,F as default};
//# sourceMappingURL=DropMenuButton.stories.bae8ace3.js.map
