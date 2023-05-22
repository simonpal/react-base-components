import React from 'react'
import styled, { css } from 'styled-components'

export type ButtonGroupProps = {
  noGap?: boolean
}
type StyledButtonGroupProps = {
  $noGap?: boolean
}

const ButtonWrapper = styled.div<StyledButtonGroupProps>`
  display: flex;
  flex-direction: row;
  gap: 1px;
  button {
    border-radius: 0;
    &:first-of-type {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:last-of-type {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
  }
  ${({ $noGap }) =>
    $noGap &&
    css`
      gap: 0;
      button.outline {
        border-width: 1px 0 1px 1px !important;
        &:last-of-type {
          border-width: 1px !important;
        }
      }
    `}
`

export const ButtonGroup: React.FunctionComponent<
  ButtonGroupProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, noGap = false }) => {
  return <ButtonWrapper $noGap={noGap}>{children}</ButtonWrapper>
}
