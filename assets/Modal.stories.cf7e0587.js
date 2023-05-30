import{j as a,r as C,R as V,a as b,F as w}from"./jsx-runtime.f69557da.js";import{a as I,j as k}from"./storybookHelper.84e9676b.js";import{s as q,C as h}from"./styled-components.browser.esm.db777663.js";import{I as $}from"./SvgWrapper.29691096.js";import"./_commonjsHelpers.b8add541.js";const y=e=>a($,{viewBox:"0 0 352 512",...e,children:a("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})});try{y.displayName="TimesIcon",y.__docgenInfo={description:"",displayName:"TimesIcon",props:{}}}catch{}const j=q.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({$zIndex:e})=>e};
  ${({$transparent:e})=>e&&h`
      background-color: transparent;
    `}
  ${({$blur:e})=>e&&h`
      backdrop-filter: blur(5px);
    `}
`,v=({transparent:e=!1,zIndex:t=2,visible:r=!1,disableClick:i=!1,blur:l=!1,onClose:o,className:s,...p})=>{const n=C.exports.useRef(null),d=f=>{!i&&n.current&&f.target===n.current&&o&&o()};if(!r)return null;const m={...t&&{["--overlay-index"]:t}};return a(j,{ref:n,className:`base-overlay ${s?` ${s}`:""}`,"aria-hidden":"true",style:m,$transparent:e,$zIndex:t,$blur:l,...p,onClick:d})};try{v.displayName="Overlay",v.__docgenInfo={description:"",displayName:"Overlay",props:{zIndex:{defaultValue:{value:"2"},description:"",name:"zIndex",required:!1,type:{name:"number"}},visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"boolean"}},transparent:{defaultValue:{value:"false"},description:"",name:"transparent",required:!1,type:{name:"boolean"}},disableClick:{defaultValue:{value:"false"},description:"",name:"disableClick",required:!1,type:{name:"boolean"}},blur:{defaultValue:{value:"false"},description:"",name:"blur",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const S=q.div`
  max-height: 90%;
  max-width: 90vw;
  overflow: visible;
  width: 50rem;
  display: flex;
  flex-direction: column;
  position: relative;
  button.base-close-button {
    cursor: pointer;
    border: 0;
    z-index: 2;
    padding: 0;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.23);
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    right: -24px;
    top: -24px;
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
    svg {
      margin: 0;
    }

    @media screen and (max-width: $breakpoint-mobile-max) {
      width: 32px;
      height: 32px;
      right: -16px;
      top: -16px;

      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
`,c=({children:e,visible:t,width:r="50rem",onClose:i,zIndex:l=5,disableClick:o=!1,alignItems:s="flex-start",justifyContent:p="flex-start",blur:n,className:d,...m})=>{if(!t)return null;const f={...l&&{zIndex:l+1},...r&&{width:r}};return a(V.Fragment,{children:a(v,{visible:t,onClose:i,disableClick:o,zIndex:l,blur:n,children:b(S,{className:`base-modal ${d?` ${d}`:""}`,style:f,$alignItems:s,$justifyContent:p,...m,children:[a("button",{className:"base-close-button","data-testid":"close-button",onClick:i,role:"button","aria-label":"Close",title:"Close",type:"button",children:a(y,{})}),e]})})})};try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},width:{defaultValue:{value:"50rem"},description:"",name:"width",required:!1,type:{name:"string"}},alignItems:{defaultValue:{value:"flex-start"},description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},zIndex:{defaultValue:{value:"5"},description:"",name:"zIndex",required:!1,type:{name:"number"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},disableClick:{defaultValue:{value:"false"},description:"",name:"disableClick",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Components/Modal",component:c,tags:["autodocs"],argTypes:{alignItems:I,justifyContent:k,blur:{control:"boolean"},width:{control:"string"},zIndex:{control:"number"}}},M=e=>{const[t,r]=C.exports.useState(!1);return b(w,{children:[a("button",{onClick:()=>r(!0),children:"Show modal"}),a(c,{...e,visible:t,onClose:()=>r(!1),children:b("div",{style:{backgroundColor:"#FFF",padding:"var(--spacing-xl)",borderRadius:"1rem"},children:[a("h3",{children:"This is a heading"}),a("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam"}),a("button",{children:"This is a button"})]})})]})},u={render:e=>a(M,{args:e})};var x,g,_;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <ModalWithState args={args} />
}`,...(_=(g=u.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const R=["Primary"];export{u as Primary,R as __namedExportsOrder,O as default};
//# sourceMappingURL=Modal.stories.cf7e0587.js.map
