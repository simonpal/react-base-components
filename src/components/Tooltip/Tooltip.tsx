import React from 'react'
import styled, { css } from 'styled-components'

const StyledTooltip = styled.span<StyledTooltipProps>`
  position: absolute;
  transition: opacity 0.2s ease;
  border-radius: 0.25rem;
  background: #333;
  color: #fff;
  padding: var(--spacing-2xs);
  white-space: nowrap;
  font-size: 0.875rem;
  ${({ $position }) =>
    $position === 'top' &&
    css`
      left: 50%;
      bottom: calc(100% + 0.6rem);
      transform: translateX(-50%);
      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top: 0.3rem solid #333;
        border-left: 0.3rem solid transparent;
        border-right: 0.3rem solid transparent;
      }
    `}
  ${({ $position }) =>
    $position === 'bottom' &&
    css`
      left: 50%;
      top: calc(100% + 0.6rem);
      transform: translateX(-50%);
      &:after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 0.3rem solid #333;
        border-left: 0.3rem solid transparent;
        border-right: 0.3rem solid transparent;
      }
    `}
  ${({ $position }) =>
    $position === 'right' &&
    css`
      top: 50%;
      left: calc(100% + 0.6rem);
      transform: translateY(-50%);
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-right: 0.3rem solid #333;
        border-top: 0.3rem solid transparent;
        border-bottom: 0.3rem solid transparent;
      }
    `}
  ${({ $position }) =>
    $position === 'left' &&
    css`
      top: 50%;
      right: calc(100% + 0.6rem);
      transform: translateY(-50%);
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-left: 0.3rem solid #333;
        border-top: 0.3rem solid transparent;
        border-bottom: 0.3rem solid transparent;
      }
    `}
`
const TooltipWrapper = styled.span`
  position: relative;
  ${StyledTooltip} {
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    ${StyledTooltip} {
      opacity: 1;
      visibility: visible;
    }
  }
`

type Position = 'top' | 'right' | 'bottom' | 'left'

type TooltipProps = {
  title: string
  position?: Position
}
type StyledTooltipProps = {
  $position: Position
}

export const Tooltip: React.FunctionComponent<
  TooltipProps & React.HTMLAttributes<HTMLDivElement>
> = ({ title, position = 'top', children }) => {
  return (
    <TooltipWrapper>
      {children}
      <StyledTooltip $position={position}>{title}</StyledTooltip>
    </TooltipWrapper>
  )
}
