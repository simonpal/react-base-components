import React, { forwardRef, useMemo } from 'react'
import styled from 'styled-components'

import { FormControl } from '../FormControl/FormControl'

export interface NumberInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  hideLabel?: boolean
  fullWidth?: boolean
  value?: number
  min?: number
  max?: number
  required?: boolean
  disabled?: boolean
  handleChange: (val: number) => void
}

const NumberInputWrapper = styled.div`
  --input-radius: 0;
  --size-input-default: 3rem;
  --input-border-color: #ccc;
  display: inline-flex;
  flex-direction: row;
  height: var(--size-input-default);
  // line-height: var(--sizes-input-default);
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-radius);
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  width: 100%;
  background-color: #fff;
  align-items: stretch;

  button {
    // height: 100%;
    width: 2rem;
    background-color: transparent;
    // display: inline-flex;
    // flex-grow: 0;
    font-size: 1.5rem;
    border: 0;
    color: #000;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:last-of-type {
      border-left: 1px solid var(--input-border-color);
    }

    &:first-of-type {
      border-right: 1px solid var(--input-border-color);
    }

    &:disabled {
      svg {
        path {
          fill: var(--input-border-color);
        }
      }

      cursor: not-allowed;
      color: var(--input-border-color);
    }
  }

  input:not([type='checkbox']):not([type='radio']) {
    display: inline-flex;
    height: 100%;
    min-width: 2rem;
    text-align: center;
    border: 0;
    background-color: transparent;
    width: calc(100% - 4rem);
    padding: 0 var(--spacing-s);
    font-size: 1rem;
    -moz-appearance: textfield;
    box-shadow: none;
    flex-grow: 1;
    color: #000;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    &:disabled {
      color: var(--input-border-color);
    }
  }
`

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      min = 1,
      max = 10000,
      value = 1,
      hideLabel = false,
      fullWidth = false,
      label = '',
      id = '',
      required = false,
      handleChange,
      disabled = false,
      ...rest
    },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    const _handleChange = (_value: number) => {
      if (_value >= min && _value <= max) {
        handleChange(_value)
      }
      // onChange(value >= min ? value : min);
    }

    // const handleKeyDown = (e: any) => {
    //   console.log(e.keyCode);
    //   switch (e.keyCode) {
    //     case 38:
    //       _handleChange(Number(e.target.value));
    //       break;
    //     case 40:
    //       _handleChange(Number(e.target.value));
    //       break;
    //     default:
    //       break;
    //   }
    // };

    const minButtonDisabled = useMemo(() => {
      return disabled || value === min
    }, [disabled, value, min])
    const maxButtonDisabled = useMemo(() => {
      return disabled || value === max
    }, [disabled, value, max])

    return (
      <FormControl fullWidth={fullWidth}>
        {!hideLabel && (
          <label htmlFor={id}>
            {label}
            {required && <span>(required)</span>}
          </label>
        )}
        <NumberInputWrapper className={`base-number-input-wrapper`}>
          <button
            disabled={minButtonDisabled}
            onClick={() => _handleChange(value - 1)}
            aria-label="Decrease"
          >
            -
          </button>
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            value={value}
            disabled={disabled}
            onFocus={(e) => e.target.select()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              _handleChange(Number(e.target.value))
            }}
            // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
            ref={ref}
            aria-label="Quantity"
            {...rest}
          />
          <button
            disabled={maxButtonDisabled}
            onClick={() => _handleChange(Number(value) + 1)}
            aria-label="Increase"
          >
            +
          </button>
        </NumberInputWrapper>
      </FormControl>
    )
  },
)
