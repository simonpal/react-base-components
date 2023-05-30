import{j as l,R as v}from"./jsx-runtime.f69557da.js";import{s as n}from"./styled-components.browser.esm.db777663.js";const d=n.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
`,o=n.div`
  padding-bottom: ${({$spacing:e})=>`var(--spacing-${e})`};
  &:last-of-type {
    padding-bottom: 0;
  }
`,t=({spacing:e,children:s,justifyContent:u="flex-start",alignItems:i="stretch",className:a,...r})=>l(d,{$alignItems:i,$justifyContent:u,...r,className:`base-stack ${a?` ${a}`:""}`,children:v.Children.map(s,c=>l(o,{$spacing:e,className:"base-spacing-box ",children:c}))});try{t.displayName="Stack",t.__docgenInfo={description:"",displayName:"Stack",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'}]}},alignItems:{defaultValue:{value:"stretch"},description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}}}}}catch{}export{t as S};
//# sourceMappingURL=Stack.f73d87be.js.map
