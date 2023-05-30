import{r as u,j as e,a,R as _}from"./jsx-runtime.f69557da.js";import{s as f}from"./styled-components.browser.esm.db777663.js";import"./_commonjsHelpers.b8add541.js";const T=f.div`
  --accordion-max-height: 500px;
  margin-bottom: var(--spacing-s);
  display: flex;
  flex-direction: column;
`,C=f.button`
  flex-direction: row;
  height: var(--size-button-default, 2.5rem);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  padding: var(--spacing-xs);
  display: flex;
  align-items: center;
  border: 0;
  justify-content: space-between;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
  }

  &.open {
    svg {
      transform: rotate(180deg);
    }
  }

  &.disabled {
    opacity: 0.7;
    cursor: default;
  }
`,w=f.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  &.open {
    max-height: var(--accordion-max-height);
    overflow: auto;
  }
`,b=u.exports.createContext({}),g=({singleSelect:n,children:t,defaultActiveKey:l})=>{const[c,s]=u.exports.useState(l?[l]:[]),o=r=>{const m=c.includes(r);s(n?m?[]:[r]:p=>m?[...p.filter(i=>i!==r)]:[...p,r])};return e(b.Provider,{value:{activeItems:c,handleChange:o},children:e("div",{className:"base-accordion",children:t})})},d=({title:n,eventKey:t,children:l,maxHeight:c="500px",titleComponent:s,disabled:o=!1,onClick:r})=>{const{activeItems:m=[],handleChange:p}=u.exports.useContext(b),i=m.includes(t),v=()=>{p(t),r&&r(t)},A=u.exports.useMemo(()=>({["--accordion-max-height"]:`${c||"500px"}`}),[c]);return a(T,{className:`base-accordion-item-container ${i?"accordion-open":"accordion-closed"}`,"data-state":i?"open":"closed","data-disabled":o?"disabled":"enabled","aria-disabled":o,children:[s&&_.cloneElement(s,{onClick:()=>!o&&v(),isOpen:i,id:`${t}-trigger`,"aria-controls":`${t}-section`,"aria-expanded":i}),!s&&a(C,{className:`base-accordion-title ${o?"disabled":""} ${i?"open":""}`,type:"button",id:`${t}-trigger`,"aria-controls":`${t}-section`,onClick:()=>!o&&v(),"aria-expanded":i,children:[n,a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:[e("title",{children:"expand"}),e("path",{d:"M19 6.25l-1.5-1.5-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"})]})]}),e(w,{className:`base-accordion-content ${i?"open":""}`,id:`${t}-section`,style:A,role:"region","aria-labelledby":`${t}-trigger`,children:e("div",{className:"co-accordion-content-inner",children:l})})]})};try{g.displayName="Accordion",g.__docgenInfo={description:"",displayName:"Accordion",props:{singleSelect:{defaultValue:null,description:"",name:"singleSelect",required:!1,type:{name:"boolean"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}}}}}catch{}try{d.displayName="AccordionItem",d.__docgenInfo={description:"",displayName:"AccordionItem",props:{eventKey:{defaultValue:null,description:"",name:"eventKey",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},maxHeight:{defaultValue:{value:"500px"},description:"",name:"maxHeight",required:!1,type:{name:"string"}},titleComponent:{defaultValue:null,description:"",name:"titleComponent",required:!1,type:{name:"Element"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((key: string) => void)"}}}}}catch{}const q={title:"Components/Accordion",component:g,tags:["autodocs"],argTypes:{defaultActiveKey:{control:"text"},singleSelect:{control:"boolean"}}},h={render:n=>a(g,{...n,children:[e(d,{title:"First",eventKey:"firstItem",children:a("div",{style:{padding:"var(--spacing-m)"},children:[e("h2",{children:"This is a title"}),e("p",{children:"This is a text"})]})}),e(d,{title:"Second",eventKey:"secondItem",children:a("div",{style:{padding:"var(--spacing-m)"},children:[e("h2",{children:"This is a title"}),e("p",{children:"This is a text"})]})}),e(d,{eventKey:"thirdItem",title:"Third",titleComponent:e("button",{role:"button","aria-controls":"thirdItem-section",id:"thirdItem-trigger",children:"Im a custom component"}),children:a("div",{style:{padding:"var(--spacing-m)"},children:[e("h2",{children:"This is a title"}),e("p",{children:"This is a text"})]})})]})};var x,y,I;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>
      <AccordionItem title="First" eventKey="firstItem">
        <div style={{
        padding: 'var(--spacing-m)'
      }}>
          <h2>This is a title</h2>
          <p>This is a text</p>
        </div>
      </AccordionItem>
      <AccordionItem title="Second" eventKey="secondItem">
        <div style={{
        padding: 'var(--spacing-m)'
      }}>
          <h2>This is a title</h2>
          <p>This is a text</p>
        </div>
      </AccordionItem>
      <AccordionItem eventKey="thirdItem" title="Third" titleComponent={<button role="button" aria-controls="thirdItem-section" id="thirdItem-trigger">
            Im a custom component
          </button>}>
        <div style={{
        padding: 'var(--spacing-m)'
      }}>
          <h2>This is a title</h2>
          <p>This is a text</p>
        </div>
      </AccordionItem>
    </Accordion>
}`,...(I=(y=h.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const V=["Primary"];export{h as Primary,V as __namedExportsOrder,q as default};
//# sourceMappingURL=Accordion.stories.ead0a6c3.js.map
