import React from 'react'
import styled from 'styled-components'

import { AlignItems, Justify } from '../../types'
// import Box from '../box/Box';
import { Overlay } from '../Overlay/Overlay'
// import { getClasses } from '../utils/helpers';

type StyledModalProps = {
  $alignItems: AlignItems
  $justifyContent: Justify
}
const StyledModal = styled.div<StyledModalProps>`
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

    svg {
      width: 16px;
      height: 16px;
      margin: 0;

      path {
        fill: #000;
      }
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
`

export interface ModalProps {
  visible: boolean
  width?: string
  alignItems?: AlignItems
  justifyContent?: Justify
  zIndex?: number
  disableOverlayClick?: boolean
  onClose: () => void
}

export const Modal: React.FunctionComponent<ModalProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  visible,
  width = '50rem',
  onClose,
  zIndex = 5,
  disableOverlayClick = false,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  className,
  ...rest
}) => {
  if (!visible) return null

  //   const classes = getClasses({
  //     [`co-flex-align-${alignItems}`]: !!alignItems,
  //     [`co-flex-justify-${justifyContent}`]: !!justifyContent,
  //   })
  //   const btnClasses = getClasses({
  //     [`inline-close-btn`]: inlineCloseButton,
  //     [`mobile-inline-close-btn`]: mobileInlineCloseButton,
  //   })

  const inlineStyle = {
    ...(zIndex && { zIndex: zIndex + 1 }),
    ...(width && { width }),
  }
  return (
    <React.Fragment>
      <Overlay
        visible={visible}
        onClose={onClose}
        disableClick={disableOverlayClick}
        zIndex={zIndex}
      >
        <StyledModal
          className={`co-modal ${className ? ` ${className}` : ''}`}
          style={inlineStyle}
          $alignItems={alignItems}
          $justifyContent={justifyContent}
          {...rest}
        >
          <button
            className={`base-close-button`}
            data-testid="close-button"
            onClick={onClose}
            role="button"
            aria-label="Close"
            title="Close"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="24" height="24">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </button>
          {children}
        </StyledModal>
      </Overlay>
    </React.Fragment>
  )
}
