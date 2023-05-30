import{S as f}from"./Stack.f73d87be.js";import{U as h,s as k,C as r}from"./styled-components.browser.esm.db777663.js";import{j as n,a as y}from"./jsx-runtime.f69557da.js";import"./_commonjsHelpers.b8add541.js";const S=h`
    0% {
        left: -50%;
    }
    100% {
        left: 100%;
    }
`,$=h`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`,b=k.div`
  position: relative;
  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  background-color: ${({$rgb:e})=>`rgba(${e}, 0.1)`};
  ${({$animation:e,$rgb:t})=>e==="wave"&&r`
      overflow: hidden;
      &:after {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        animation-iteration-count: infinite;
        animation-duration: inherit;
        animation-name: ${S};
        opacity: 0.1;
        background: linear-gradient(
          90deg,
          rgba(${t}, 0) 0%,
          rgba(${t}, 1) 50%,
          rgba(${t}, 0) 100%
        );
      }
    `}
  ${({$animation:e})=>e==="pulse"&&r`
      animation-name: ${$};
    `};
  ${({$variant:e})=>e==="rounded"&&r`
      border-radius: 0.25rem;
    `};
  ${({$variant:e})=>e==="circular"&&r`
      border-radius: 50%;
    `};
`,a=({animation:e="pulse",height:t="1rem",width:p="100%",variant:v="rectangular",dark:g=!1,...w})=>n(b,{$animation:e,$height:t,$width:p,$variant:v,$rgb:g?"255,255,255":"0,0,0",...w});try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:'boolean | "wave" | "pulse"'}},height:{defaultValue:{value:"1rem"},description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circular"'},{value:'"rounded"'},{value:'"rectangular"'}]}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Skeleton",component:a,tags:["autodocs"],argTypes:{animation:{control:"select",options:["wave","pulse",!1]},variant:{control:"select",options:["rectangular","rounded","circular"]},dark:{control:"boolean"},width:{control:"text"},height:{control:"text"}}},i={args:{animation:"pulse",variant:"rectangular"}},o={render:()=>n("div",{children:y(f,{spacing:"m",children:[n(a,{animation:"wave",variant:"rounded",height:"2rem",width:"70%"}),n(a,{animation:"wave",variant:"rectangular",height:"8rem"}),n(a,{animation:"wave",variant:"circular",height:"3rem",width:"3rem"}),n(a,{animation:"wave",variant:"rounded",height:"1rem"}),n(a,{animation:"wave",variant:"rounded",height:"1rem"}),n(a,{animation:"wave",variant:"rounded",height:"1rem",width:"80%"})]})})};var d,l,s;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    animation: 'pulse',
    variant: 'rectangular'
  }
}`,...(s=(l=i.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var m,u,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
      <Stack spacing="m">
        <Skeleton animation="wave" variant="rounded" height="2rem" width="70%" />
        <Skeleton animation="wave" variant="rectangular" height="8rem" />
        <Skeleton animation="wave" variant="circular" height="3rem" width="3rem" />
        <Skeleton animation="wave" variant="rounded" height="1rem" />
        <Skeleton animation="wave" variant="rounded" height="1rem" />
        <Skeleton animation="wave" variant="rounded" height="1rem" width="80%" />
      </Stack>
    </div>
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const j=["Primary","Combo"];export{o as Combo,i as Primary,j as __namedExportsOrder,V as default};
//# sourceMappingURL=Skeleton.stories.4069bb2a.js.map
