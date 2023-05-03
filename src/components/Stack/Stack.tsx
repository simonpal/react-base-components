import React from 'react'
import styled from 'styled-components'

// import { getClasses, getShortSpacing } from '../utils/helpers';
import { AlignItems, Justify, Spacings } from '../../types'

type StyledStackProps = {
  $alignItems: AlignItems
  $justifyContent: Justify
}

const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
`

type ChildProps = {
  $spacing: Spacings
}

const StyledChild = styled.div<ChildProps>`
  padding-bottom: ${({ $spacing }) => `var(--spacing-${$spacing})`};
  &:last-of-type {
    padding-bottom: 0;
  }
`

type WrapperProps = {
  alignItems?: AlignItems
  justifyContent?: Justify
}

export interface StackProps extends WrapperProps {
  spacing: Spacings
  children: React.ReactNode
}

export const Stack: React.FunctionComponent<StackProps & React.HTMLAttributes<HTMLDivElement>> = ({
  spacing,
  children,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  className,
  ...rest
}) => {
  //   const stackClasses = getClasses({
  //     [`co-flex-align-${alignItems}`]: !!alignItems,
  //     [`co-flex-justify-${justifyContent}`]: !!justifyContent,
  //   });

  //   const spacingBoxClasses = getClasses({
  //     [`co-pb-${getShortSpacing(spacing)}`]: !!spacing,
  //   });

  return (
    <StyledStack
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      {...rest}
      className={`base-stack ${className ? ` ${className}` : ''}`}
    >
      {React.Children.map(children, (child) => (
        <StyledChild $spacing={spacing} className={`base-spacing-box `}>
          {child}
        </StyledChild>
      ))}
    </StyledStack>
  )
}
