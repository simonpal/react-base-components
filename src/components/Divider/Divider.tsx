import React from 'react'
import { BREAKPOINTS } from 'src/constants'
import styled from 'styled-components'

// import { getClasses, getShortSpacing } from '../utils/helpers';
import { Spacings } from '../../types'

export interface DividerProps {
  color?: string
  spacing: Spacings
  mobileSpacing?: Spacings
}
interface StyledDividerProps {
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
  //   const classes = getClasses({
  //     [`co-mt-${getShortSpacing(spacing || 'none')}`]: !!spacing,
  //     [`co-mb-${getShortSpacing(spacing || 'none')}`]: !!spacing,
  //     [`co-mobile-mt-${getShortSpacing(mobileSpacing || 'none')}`]: !!mobileSpacing,
  //     [`co-mobile-mb-${getShortSpacing(mobileSpacing || 'none')}`]: !!mobileSpacing,
  //   });

  const inlineStyle = {
    ...(color && { ['--divider-color']: color }),
  } as any
  return (
    <StyledDivider
      className={`base-divider ${className ? ` ${className}` : ''}`}
      $spacing={spacing}
      $mobileSpacing={mobileSpacing ?? spacing}
      style={inlineStyle}
      {...rest}
    />
  )
}
