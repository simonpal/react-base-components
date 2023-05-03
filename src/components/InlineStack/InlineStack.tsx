import React from 'react'
import styled from 'styled-components'

import { AlignItems, Justify, Spacings } from '../../types'

type StyledInlineStackProps = {
  $spacing: Spacings
  $justifyContent: Justify
  $alignItems: AlignItems
}

const InnerStackWrapper = styled.div<StyledInlineStackProps>`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  gap: ${({ $spacing }) => `var(--spacing-${$spacing})`};
`

const ChildWrapper = styled.div`
  display: inline-flex;
`

export type InlineStackProps = {
  spacing: Spacings
  children: React.ReactNode
  justifyContent?: Justify
  alignItems?: AlignItems
}

export const InlineStack: React.FunctionComponent<
  InlineStackProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  spacing,
  children,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  className,
  ...rest
}) => {
  //   const innerWrapperClasses = getClasses({
  //     [`co-flex-align-${alignItems}`]: !!alignItems,
  //     [`co-flex-justify-${justifyContent}`]: !!justifyContent,
  //     [`co-negative-mt-${getShortSpacing(spacing)}`]: !!spacing,
  //     [`co-negative-ml-${getShortSpacing(spacing)}`]: !!spacing,
  //   });
  //   const innerBoxClasses = getClasses({
  //     [`co-pt-${getShortSpacing(spacing)}`]: !!spacing,
  //     [`co-pl-${getShortSpacing(spacing)}`]: !!spacing,
  //   });

  return (
    // <InlineStackWrapper className="base-inline-stack-wrapper">
    <InnerStackWrapper
      $spacing={spacing}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      className={`base-inline-stack-wrapper ${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null
        return <ChildWrapper>{child}</ChildWrapper>
      })}
    </InnerStackWrapper>
    // </InlineStackWrapper>
  )
}
