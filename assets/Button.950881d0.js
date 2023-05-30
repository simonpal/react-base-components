import{r as n,j as p}from"./jsx-runtime.f69557da.js";import{U as v,s as f}from"./styled-components.browser.esm.db777663.js";const m=v`
  from {
      opacity: 0.7;
      transform: scale(0);
  }

  to {
      opacity: 0;
      transform: scale(10);
  }
`,y=f.button`
  --button-font-size: 16px;
  --color-button-primary-background: #000;
  --color-button-primary-color: #fff;
  --color-button-primary-hover: #010101;
  --color-button-secondary-background: #eee;
  --color-button-secondary-color: #000;
  --color-button-secondary-hover: #ddd;
  --color-button-tertiary-background: transparent;
  --color-button-tertiary-color: #000;
  --color-button-tertiary-hover: transparent;
  --size-button-default: 3rem;
  --button-radius: 1.5rem;
  --ripple-background: #010101;
  --color-button-outline-background: transparent;
  --color-button-outline-color: #000;
  --color-button-outline-border: #000;
  font-family: inherit;
  background-color: var(--color-button-primary-background);
  color: var(--color-button-primary-color);
  height: var(--size-button-default);
  border-radius: var(--button-radius);
  padding: 0 1rem;
  border-width: 0;
  font-size: var(--button-font-size);
  font-weight: bold;
  display: ${({$fullWidth:o})=>o?"flex":"inline-flex"};
  justify-content: center;
  line-height: 100%;
  cursor: pointer;
  align-items: center;
  transition: all 0.2s ease;

  @media screen and (max-width: 600px) {
    position: relative;
    overflow: hidden;

    &::after {
      display: none;
      content: '';
      position: absolute;
      border-radius: 50%;

      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;

      background-color: var(--ripple-background);

      /* Center the ripple */
      top: 50%;
      left: 50%;

      animation: ${m} 1s;
      opacity: 0;
    }

    &:focus:not(:active)::after {
      display: block;
    }
  }

  svg {
    margin: ${({$iconLeft:o})=>o?"0 var(--spacing-xs) 0 0":"0 0 0 var(--spacing-xs)"};
    path {
      fill: var(--color-button-primary-color);
    }
  }
  &:hover {
    @media screen and (min-width: 601px) {
      background-color: var(--color-button-primary-hover);
    }
  }

  &:disabled {
    // background-color: var(--color-button-primary-disabled);
    cursor: default;
    opacity: 0.5;
  }

  &.secondary {
    background-color: var(--color-button-secondary-background);
    color: var(--color-button-secondary-color);

    &:hover {
      @media screen and (min-width: 601px) {
        background-color: var(--color-button-secondary-hover);
      }
    }

    svg path {
      fill: var(--color-button-secondary-color);
    }
  }

  &.tertiary {
    padding: 0;
    background-color: var(--color-button-tertiary-background);
    color: var(--color-button-tertiary-color);

    &:hover {
      @media screen and (min-width: 601px) {
        background-color: var(--color-button-tertiary-hover);
      }
    }

    svg path {
      fill: var(--color-button-tertiary-color);
    }
  }

  &.outline {
    background-color: var(--color-button-outline-background);
    color: var(--color-button-outline-color);
    border: 1px solid var(--color-button-outline-border);

    &:hover {
      @media screen and (min-width: 601px) {
        background-color: var(--color-button-outline-hover);
      }
    }

    svg path {
      fill: var(--color-button-outline-color);
    }
  }
`,l=n.exports.forwardRef(({children:o,priority:r="primary",disabled:i=!1,type:t="button",fullWidth:c=!1,onClick:u,iconLeft:e=!1,className:a,...d},s)=>{const b=n.exports.useMemo(()=>({["--ripple-background"]:`var(--color-button-${r}-hover)`}),[r]);return p(y,{style:b,"aria-label":t,className:`base-button ${r} icon-${e?"left":"right"} ${a?` ${a}`:""}`,onClick:u,type:t,disabled:i,$fullWidth:c,$iconLeft:e,ref:s,...d,children:o})});try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{priority:{defaultValue:{value:"primary"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"outline"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:{value:"false"},description:"",name:"iconLeft",required:!1,type:{name:"boolean"}}}}}catch{}export{l as B};
//# sourceMappingURL=Button.950881d0.js.map
