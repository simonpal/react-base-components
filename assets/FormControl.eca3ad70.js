import{s as i}from"./styled-components.browser.esm.db777663.js";const n=i.div`
  display: ${({fullWidth:e})=>e?"flex":"inline-flex"};
  flex-direction: ${({inlineControl:e})=>e?"row":"column"};
  position: relative;
  .input-icon {
    position: absolute;
    bottom: calc(var(--size-input-default, 3rem) / 2);
    transform: translateY(50%);
    width: 2rem;
    height: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &.clickable {
      cursor: pointer;
    }

    svg path {
      fill: var(--color-grey-scale-onwhite);
    }
  }

  &.input-disabled {
    .input-icon {
      svg path {
        fill: var(--color-grey-scale-grey100);
      }
    }
  }

  &.icon-position-left {
    .input-icon {
      left: var(--spacing-2xs);
      right: auto;
    }

    input.co-form-element:not([type='checkbox']):not([type='radio']) {
      text-indent: var(--spacing-m);
    }
  }

  &.icon-position-right {
    .input-icon {
      left: auto;
      right: var(--spacing-2xs);
    }
  }
  .base-form-input-error {
    margin-top: var(--spacing-2xs);
    font-size: 0.75rem;
    color: #ff0000;

    &.fill {
      background-color: rgba(255, 0, 0, 0.1);
      padding: var(--spacing-2xs);
      color: #000;
    }
  }
`;try{n.displayName="FormControl",n.__docgenInfo={description:"",displayName:"FormControl",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},inlineControl:{defaultValue:null,description:"",name:"inlineControl",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{n as F};
//# sourceMappingURL=FormControl.eca3ad70.js.map
