import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { FormControl } from '../FormControl/FormControl'

const CheckboxWrapper = styled(FormControl)`
  align-items: center;
  input {
    visibility: hidden;
    position: absolute;
    svg {
      rect:first-of-type {
        width: 14px;
        height: 14px;
        stroke: rgba(0, 0, 0, 0.5);
      }
      rect:last-of-type {
        display: none;
      }
      path {
        display: none;
      }
    }
    &:checked + svg {
      rect:first-of-type {
        transform: translate(-1px, -1px);
        width: 16px;
        height: 16px;
        fill: #0000ff;
        stroke: #000;
      }
      path {
        display: block;
      }
    }
    &:focus + svg rect:last-of-type {
      display: block;
    }
  }
`

export type CheckboxProps = {
  fullWidth?: boolean
  id: string
  label: string | JSX.Element
  value?: string
  hideLabel?: boolean
  onWhite?: boolean
  name?: string
}

export interface StyledCheckboxProps {
  $fullWidth: boolean
}

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      fullWidth = false,
      id,
      label,
      value = '',
      onWhite = false,
      onChange,
      hideLabel,
      className,
      name = '',
      ...rest
    },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <CheckboxWrapper
        inlineControl
        fullWidth={fullWidth}
        className={`base-checkbox ${className ? ` ${className}` : ''}`}
      >
        <label className="co-label" htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            onChange={onChange}
            name={name}
            value={value}
            {...rest}
            ref={ref}
          />
          <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
            <rect x={5} y={5} width={14} height={14} fill={'none'} strokeWidth={2} />
            <path
              fill={`#FFFFFF`}
              transform="translate(7 7)"
              d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
            />
            <rect
              x={1}
              y={1}
              width={22}
              height={22}
              fill="none"
              stroke={`#0000FF`}
              strokeWidth={2}
            />
          </svg>

          {!hideLabel && label}
        </label>
      </CheckboxWrapper>
    )
  },
)
