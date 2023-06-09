import React from 'react'
import styled from 'styled-components'

import { BREAKPOINTS } from '../../constants'
// import { getClasses, getShortSpacing } from '../utils/helpers';
import { Spacings } from '../../types'

export type DividerProps = {
  color?: string
  spacing: Spacings
  mobileSpacing?: Spacings
}
type StyledDividerProps = {
  $spacing: Spacings
  $mobileSpacing?: Spacings
}

const StyledDivider = styled.div<StyledDividerProps>`
  --divider-color: #eee;
  height: 1px;
  margin: ${({ $spacing }) => `var(--spacing-${$spacing}) 0`};
  background-color: var(--divider-color);
  @media screen and (max-width: ${BREAKPOINTS.xs.max}) {
    margin: ${({ $mobileSpacing }) => `var(spacing-${$mobileSpacing}) 0`};
  }
`

export const Divider: React.FunctionComponent<
  DividerProps & React.HTMLAttributes<HTMLDivElement>
> = ({ color, spacing = 'l', mobileSpacing, className, ...rest }) => {
  const inlineStyle = {
    ...(color && { ['--divider-color']: color }),
  } as any
  return (
    <StyledDivider
      aria-hidden="true"
      className={`base-divider ${className ? ` ${className}` : ''}`}
      $spacing={spacing}
      $mobileSpacing={mobileSpacing ?? spacing}
      style={inlineStyle}
      {...rest}
    />
  )
}
