import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import Button from '../Button/Button'

type DropdownStyledProps = {
  $maxHeight: number
  $fromTop: boolean
}

export type DropMenuButtonProps = {
  label: string | React.ReactElement
  id: string
}

const DropMenuButtonWrapper = styled.div<DropdownStyledProps>`
  position: relative;
  [role='menu'] {
    display: none;
    position: absolute;
    max-height: ${({ $maxHeight }) => `${$maxHeight}px`};
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
    ${({ $fromTop }) =>
      !$fromTop &&
      css`
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
`

const MAX_HEIGHT = 300

export const DropMenuButton: React.FunctionComponent<
  DropMenuButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ label, id, children, ...rest }) => {
  const [expanded, setExpanded] = useState(false)
  const [fromTop, setFromTop] = useState<boolean>(true)
  const [dropMaxHeight, setDropMaxHeight] = useState<number>(MAX_HEIGHT)

  const dropMenuRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && !dropMenuRef.current.contains(e.target)) {
      setExpanded(false)
    }
  }

  const getElementFromTop = useCallback((): void => {
    if (dropMenuRef.current && buttonRef.current) {
      const dropRect = dropMenuRef.current.getBoundingClientRect()
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const buttonFromTop = buttonRect.top + buttonRect.height
      const { clientHeight } = document.documentElement
      const downwards = dropRect.height + buttonFromTop < clientHeight
      setFromTop(downwards)
      //   const inUpperHalf = dropRect.top < clientHeight / 2 - dropRect.height / 2
      let maxHeight = MAX_HEIGHT
      //   setFromTop(inUpperHalf)
      if (buttonRect.top > 0 && buttonFromTop < clientHeight) {
        // const margin = 16
        const setHeight = downwards
          ? clientHeight - (buttonFromTop + dropRect.height)
          : buttonFromTop
        maxHeight = setHeight > maxHeight ? maxHeight : setHeight // - margin
      }
      setDropMaxHeight(maxHeight)
    }
  }, [])

  useEffect(() => {
    if (expanded) {
      getElementFromTop()
      window.addEventListener('scroll', getElementFromTop)
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      window.removeEventListener('scroll', getElementFromTop)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [expanded])

  return (
    <DropMenuButtonWrapper $maxHeight={dropMaxHeight} $fromTop={fromTop}>
      <Button
        type="button"
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={() => setExpanded(!expanded)}
        ref={buttonRef}
        {...rest}
      >
        {label}
      </Button>
      <ul role="menu" id={id} aria-label={typeof label === 'string' ? label : id} ref={dropMenuRef}>
        {children}
      </ul>
    </DropMenuButtonWrapper>
  )
}
