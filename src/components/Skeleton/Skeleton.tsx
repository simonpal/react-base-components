import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export type SkeletonProps = {
  animation?: boolean | 'wave' | 'pulse'
  height?: number | string
  width?: number | string
  //   fontSize?: string
  variant?: 'circular' | 'rounded' | 'rectangular'
  dark?: boolean
}
type StyledSkeletonProps = {
  $animation: boolean | 'wave' | 'pulse'
  $height: number | string
  $width: number | string
  //   $fontSize?: string
  $variant: 'circular' | 'rounded' | 'rectangular'
  $rgb: string
}

const wave = keyframes`
    0% {
        left: -50%;
    }
    100% {
        left: 100%;
    }
`
const pulse = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`
const StyledSkeleton = styled.div<StyledSkeletonProps>`
  position: relative;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  background-color: ${({ $rgb }) => `rgba(${$rgb}, 0.1)`};
  ${({ $animation, $rgb }) =>
    $animation === 'wave' &&
    css`
      overflow: hidden;
      &:after {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        animation-iteration-count: infinite;
        animation-duration: inherit;
        animation-name: ${wave};
        opacity: 0.1;
        background: linear-gradient(
          90deg,
          rgba(${$rgb}, 0) 0%,
          rgba(${$rgb}, 1) 50%,
          rgba(${$rgb}, 0) 100%
        );
      }
    `}
  ${({ $animation }) =>
    $animation === 'pulse' &&
    css`
      animation-name: ${pulse};
    `};
  ${({ $variant }) =>
    $variant === 'rounded' &&
    css`
      border-radius: 0.25rem;
    `};
  ${({ $variant }) =>
    $variant === 'circular' &&
    css`
      border-radius: 50%;
    `};
`

export const Skeleton: React.FunctionComponent<
  SkeletonProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  animation = 'pulse',
  height = '1rem',
  width = '100%',
  //   fontSize,
  variant = 'rectangular',
  dark = false,
  ...rest
}) => {
  return (
    <StyledSkeleton
      $animation={animation}
      $height={height}
      $width={width}
      //   $fontSize={fontSize}
      $variant={variant}
      $rgb={dark ? '255,255,255' : '0,0,0'}
      {...rest}
    />
  )
}
