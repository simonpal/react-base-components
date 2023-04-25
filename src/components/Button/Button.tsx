import React, { useMemo } from 'react'
import styled, { keyframes } from 'styled-components'

import { getClasses } from '../../helpers'

const ripple = keyframes`
    from {
                opacity: 0.7;
                transform: scale(0);
            }

            to {
                opacity: 0;
                transform: scale(10);
            }
`

const StyledButton = styled.button`
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
  --fontweights-bold: 600;
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
  font-weight: var(--fontweights-bold);
  display: inline-flex;
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

      animation: ${ripple} 1s;
      opacity: 0;
    }

    &:focus:not(:active)::after {
      display: block;
    }
  }

  svg {
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

  &.icon-left svg {
    margin-left: 0;
    margin-right: var(--spacing-xs);
  }

  &.icon-right svg {
    margin-right: 0;
    margin-left: var(--spacing-xs);
  }

  &.small-text {
    font-size: 12px;
  }

  &.secondary {
    background-color: var(--color-button-secondary-background);
    color: var(--color-button-secondary-color);

    &:hover {
      @media screen and (min-width: 601px) {
        background-color: var(--color-button-secondary-hover);
      }
    }

    &:disabled {
      opacity: 0.5;
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

    &:disabled {
      opacity: 0.5;
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

    &:disabled {
      opacity: 0.5;
    }

    svg path {
      fill: var(--color-button-outline-color);
    }
  }
`

export type ButtonProps = {
  priority?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  children: React.ReactNode
  iconLeft?: boolean
}

export const Button: React.FunctionComponent<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({
  children,
  priority = 'primary',
  disabled = false,
  type = 'button',
  fullWidth = false,
  onClick,
  iconLeft = false,
  className,
  ...rest
}) => {
  const classes = getClasses({
    'base-full-width': fullWidth,
    [`icon-${iconLeft ? 'left' : 'right'}`]: true,
  })

  const inlineStyle: any = useMemo(
    () => ({
      ['--ripple-background']: `var(--color-button-${priority}-hover)`,
    }),
    [priority],
  )

  return (
    <StyledButton
      style={inlineStyle}
      aria-label={type}
      className={`base-button ${priority} ${classes} ${className ? ` ${className}` : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button
