import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { FormControl } from '../FormControl/FormControl'
import { Label } from '../FormControl/Label'

const RadiobuttonWrapper = styled(FormControl)`
  --form-control-color: #0000ff;
  --form-control-disabled: #555;
  align-items: center;
  input[type='radio'] {
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 0 0.5rem 0 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    &:before {
      content: '';
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
      /* Windows High Contrast Mode */
      background-color: CanvasText;
    }
    &:checked:before {
      transform: scale(1);
    }
    &:focus {
      outline: max(2px, 0.15em) solid #0000ff;
      outline-offset: max(2px, 0.15em);
    }
    &:disabled {
      --form-control-color: var(--form-control-disabled);

      color: var(--form-control-disabled);
      cursor: not-allowed;
    }
  }
`

export type RadiobuttonProps = {
  fullWidth?: boolean
  id: string
  label: string | JSX.Element
  value?: string
  hideLabel?: boolean
  name?: string
}

export interface StyledRadiobuttonProps {
  $fullWidth: boolean
}

export const Radiobutton = forwardRef<
  HTMLInputElement,
  RadiobuttonProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      fullWidth = false,
      id,
      label,
      value = '',
      onChange,
      hideLabel,
      className,
      name = '',
      ...rest
    },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <RadiobuttonWrapper
        inlineControl
        fullWidth={fullWidth}
        className={`base-checkbox ${className ? ` ${className}` : ''}`}
      >
        <Label htmlFor={id}>
          <input
            type="radio"
            id={id}
            onChange={onChange}
            name={name}
            value={value}
            {...rest}
            ref={ref}
          />
          {/* <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
            <rect
              x={5}
              y={5}
              width={14}
              height={14}
              fill={'none'}
              strokeWidth={2}
              stroke={'#000000'}
            />
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
              className="focus"
            />
          </svg> */}

          {!hideLabel && label}
        </Label>
      </RadiobuttonWrapper>
    )
  },
)
