import{r as n,a as D,j as d}from"./jsx-runtime.f69557da.js";import{s as Q}from"./styled-components.browser.esm.db777663.js";import{I as X}from"./SvgWrapper.29691096.js";import"./_commonjsHelpers.b8add541.js";const Z=(r,e)=>{const[a,o]=n.exports.useState(0),s=n.exports.useCallback(u=>{!e||(u.keyCode===40?(u.preventDefault(),o(a===r-1?0:a+1)):u.keyCode===38&&(u.preventDefault(),o(a===0?r-1:a-1)))},[r,a,o,e]);return n.exports.useEffect(()=>(document.addEventListener("keydown",s,!1),()=>{document.removeEventListener("keydown",s,!1)}),[s]),[a,o]},L=r=>{n.exports.useEffect(()=>{const e=document.createElement("script");return e.src=r,e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[r])};try{L.displayName="useScript",L.__docgenInfo={description:"",displayName:"useScript",props:{}}}catch{}const V=r=>D(X,{viewBox:"0 0 20 20",...r,children:[d("title",{children:"expand"}),d("path",{d:"M19 6.25l-1.5-1.5-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"})]});try{V.displayName="AngleDownIcon",V.__docgenInfo={description:"",displayName:"AngleDownIcon",props:{}}}catch{}const S=({option:r,focus:e,index:a,handleClick:o})=>{const s=n.exports.useRef(null);return n.exports.useEffect(()=>{e&&s.current?(s.current.focus(),s.current.setAttribute("aria-selected","true")):!e&&s.current&&s.current.setAttribute("aria-selected","false")},[e]),d("li",{role:"option","aria-checked":e,"aria-selected":e,onClick:u=>o(u,r,a),tabIndex:e?0:-1,ref:s,onKeyPress:u=>o(u,r,a),children:r.text})};try{S.displayName="DropdownItem",S.__docgenInfo={description:"",displayName:"DropdownItem",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"Option"}},focus:{defaultValue:null,description:"",name:"focus",required:!0,type:{name:"boolean"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"(e: any, option: Option, index: number) => void"}}}}}catch{}const ee=Q.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: var(--input-radius, 0);
  position: relative;
  height: var(--size-input-default, 3rem);
  min-height: 2.5rem;
  align-items: center;
  display: inline-flex;
  padding: var(--spacing-s);
  cursor: pointer;
  color: #000;

  &.is-focused {
    border: 1px solid #eee;
  }

  .dropdown-icon {
    transition: transform 0.2s ease;
    transform-origin: center center;
    position: absolute;
    top: 50%;
    right: var(--spacing-s);
    transform: translateY(-50%) rotate(0);
    display: inline-flex;
    align-items: center;

    > svg path {
      fill: #000;
    }

    &.is-focused {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  input.dropdown-input {
    border: 0;
    background: transparent;
    color: #000;
    width: 100%;
    margin-left: 0px;
    padding: 0;

    &.has-icon {
      width: calc(100% - var(--spacing-l));
      margin-left: var(--spacing-l);
    }

    &.has-value::placeholder {
      opacity: 0.5;
    }

    &:focus {
      outline: 0;
    }
  }

  .dropdown {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    overflow: auto;
    top: auto;
    bottom: calc(100% + 1px);
    left: 0;
    width: 100%;
    border-width: 1px 1px 1px;
    border-style: solid;
    border-color: #eee;
    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);
    background: #fff;
    transform: scaleY(0);
    transition: transform 0.2s ease;
    transform-origin: bottom left;
    z-index: 5;

    &.from-top {
      top: calc(100% + 1px);
      bottom: auto;
      transform-origin: top left;
    }

    &.is-focused {
      transform: scaleY(1);
    }

    > li {
      border-top: 1px solid #eee;
      padding: var(--spacing-2xs) var(--spacing-s);
      font-size: 1rem;

      &:last-of-type {
        border-bottom: 0;
      }

      &:hover {
        background: #eee;
      }

      &[aria-selected='true'] {
        border: 1px 0 1px 0 solid #0000ff;
      }

      &.locate-menu-item {
        border-top: 1px solid #f5f5f5;
        padding: 0;
      }
    }
  }

  &.disabled {
    cursor: default;
    opacity: 0.5;
  }

  button.clear-button {
    border: 0;
    background: transparent;
    margin-right: var(--spacing-s);
    position: relative;
    z-index: 2;
    padding: 0 var(--spacing-xs) 0 0;
    cursor: pointer;
    flex-shrink: 0;

    &:disabled {
      opacity: 0.2;
    }

    > svg path {
      fill: var(--color-grey-scale-black);
    }
  }

  .icon {
    margin-right: var(--spacing-s);
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg path {
      fill: #000;
    }

    &.search-icon {
      margin-right: 0;
      position: absolute;
      top: 50%;
      left: var(--spacing-s);
      transform: translateY(-50%);
    }
  }

  .styled-label {
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    padding-right: var(--spacing-l);

    &.clearable {
      padding-right: var(--spacing-s);
    }
  }

  .locate-button {
    background: none;
    padding: var(--spacing-xs);
    font-size: 1rem;
    border: 0;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    width: 100%;
    align-items: center;
    font-weight: bold;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    svg {
      flex-shrink: 0;
      margin-right: var(--spacing-2xs);

      path {
        fill: #000;
      }
    }
  }
`,te=(r,e)=>{let a=null;return o=>{clearTimeout(a),a=setTimeout(()=>e(o),r)}},N=n.exports.forwardRef(({placeholder:r,options:e,search:a,disabled:o,defaultValue:s,value:u,icon:g,handleChange:y,maxHeight:T,...j},z)=>{const[p,I]=n.exports.useState(s),[v,_]=n.exports.useState(""),[c,x]=n.exports.useState(!1),[A,M]=n.exports.useState(!0),[P,Y]=n.exports.useState(300),[E,q]=n.exports.useState(!1),[f,b]=n.exports.useState(e||[]),[K,B]=Z(f?f==null?void 0:f.length:0,c),h=n.exports.useRef(null),l=n.exports.useRef(null),U=(t,i,m)=>{if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.type==="keypress"&&t.nativeEvent.code!=="Enter"){l&&l.current&&(l.current.focus(),l.current.value+=t.nativeEvent.key,_(l.current.value));return}I(i.text),B(m),_(""),x(!1),l.current&&(l.current.value=""),b(e||[]),y&&y(i)},H=t=>{h.current&&!h.current.contains(t.target)&&x(!1)},W=n.exports.useCallback(te(500,_),[]),C=n.exports.useCallback(()=>{if(h.current){const t=h.current.getBoundingClientRect(),{clientHeight:i}=document.documentElement,m=t.top<i/2-t.height/2;let w=300;if(M(m),t.top>0&&t.top<i){const F=m?i-(t.top+t.height):t.top;w=F>w?w:F-16}Y(w)}},[]),G=t=>{const i=(e==null?void 0:e.find(m=>m.text===t))||null;y&&y(i)},J=t=>{t.key==="Escape"?x(!1):t.key==="Enter"&&!o&&x(!c)};return n.exports.useEffect(()=>{v.length>0&&e?b([...e.filter(t=>t.value.toLowerCase().includes(v.toLowerCase())||t.text.toLowerCase().includes(v.toLowerCase()))]):b(e||[])},[v]),n.exports.useEffect(()=>(l.current&&(c?l.current.focus():l.current.blur()),c&&(C(),window.addEventListener("scroll",C),document.addEventListener("mousedown",H)),()=>{window.removeEventListener("scroll",C),document.removeEventListener("mousedown",H)}),[c]),n.exports.useEffect(()=>{p&&p.length>0?(q(!0),G(p)):q(!1)},[p]),n.exports.useEffect(()=>{e&&b([...e])},[e]),n.exports.useEffect(()=>{I(s)},[s]),D(ee,{className:` ${o&&"disabled"} ${c&&"is-focused"}`,ref:h,role:"combobox","aria-expanded":c,"aria-disabled":o||!1,onClick:()=>!o&&x(!c),onKeyDown:J,tabIndex:0,...j,children:[a&&g&&d("div",{className:"icon search-icon",children:g}),a&&d("input",{className:`dropdown-input ${!!g&&"has-icon"} ${E&&".has-value"}`,disabled:o||!1,ref:l,type:"text","aria-autocomplete":"list","aria-label":p||r,autoComplete:"off",tabIndex:0,placeholder:E?p:r,onChange:t=>W(t.target.value)}),!a&&D("label",{className:"styled-label",role:"alert","aria-live":"polite","aria-atomic":"true",children:[g&&d("div",{className:"icon",children:g}),E?p:r]}),d("i",{"aria-hidden":"true",className:`dropdown-icon ${c&&"is-focused"}`,children:d(V,{})}),f.length>0&&d("ul",{className:`dropdown ${c?"is-focused":""} ${A?"from-top":""}`,style:{maxHeight:`${T||P}px`},"aria-label":r,role:"listbox",ref:z,children:f.map((t,i)=>d(S,{option:t,index:i,handleClick:U,focus:K===i},t.value))})]})});try{N.displayName="Dropdown",N.__docgenInfo={description:"",displayName:"Dropdown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"Option[]"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | (string & readonly string[])"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!1,type:{name:"((val: Option | null) => void)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Dropdown",component:N,tags:["autodocs"],argTypes:{placeholder:{control:"text"},search:{control:"boolean"},disabled:{control:"boolean"}}},k={args:{options:[{value:"se",text:"Sweden",key:"se"},{value:"no",text:"Norway",key:"no"},{value:"fi",text:"Finland",key:"fi"}],placeholder:"Select country"}};var R,$,O;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    options: [{
      value: 'se',
      text: 'Sweden',
      key: 'se'
    }, {
      value: 'no',
      text: 'Norway',
      key: 'no'
    }, {
      value: 'fi',
      text: 'Finland',
      key: 'fi'
    }],
    placeholder: 'Select country'
  }
}`,...(O=($=k.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const ie=["Primary"];export{k as Primary,ie as __namedExportsOrder,le as default};
//# sourceMappingURL=Dropdown.stories.05dcf643.js.map
