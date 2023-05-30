import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { FormControl } from '../FormControl/FormControl'
import { Label } from '../FormControl/Label'

const StyledInput = styled.input`
  --input-radius: 0;
  --size-input-default: 3rem;
  max-width: 100%;
  flex-grow: 1;
  transition: all 0.2s ease;
  color: #000;
  border-radius: var(--input-radius);
  border: 1px solid #000;
  height: var(--size-input-default);
  padding: 0 var(--spacing-s);
  &:focus {
    border-color: blue;
  }

  &.is-dirty:invalid,
  &.has-error {
    border-color: #ff0000;
    color: #ff0000;
  }

  &:disabled {
    opacity: 0.5;
  }
`

const ShowPasswordIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
  </svg>
)

const HidePasswordIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path>
    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path>
  </svg>
)

type InputType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'date'
  | 'datetime-local'
  | 'time'
  | 'tel'
export type TextfieldProps = {
  label: string
  hideLabel?: boolean
  error?: string
  defaultValue?: any
  fullWidth?: boolean
  icon?: JSX.Element
  iconLeft?: boolean
  type?: InputType
  required?: boolean
  requiredText?: string
  disabled?: boolean
  value?: string
  maxLength?: number
  name?: string
  errorBox?: boolean
  // placeholder?: string;
}

export const TextField = forwardRef<
  HTMLInputElement,
  TextfieldProps & React.HTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      hideLabel = false,
      error = '',
      fullWidth = false,
      // multiline = false,
      id,
      type = 'text',
      className,
      onChange,
      required = false,
      requiredText = '*',
      disabled = false,
      placeholder = '',
      value,
      icon,
      iconLeft = true,
      maxLength,
      defaultValue,
      errorBox = false,
      ...rest
    },
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    // const [inputValue, setInputValue] = useState<any>(value || '');
    const [showAsText, setShowAsText] = useState<boolean>(false)
    const [isDirty, setIsDirty] = useState<boolean>(false)
    const [_type, _setType] = useState<string>(type)

    const inputRef = useRef<HTMLInputElement>(null)

    const iconPosition = useMemo(() => {
      let pos = iconLeft ? 'left' : 'right'
      if (type === 'password') {
        pos = 'right'
      }
      return pos
    }, [type, iconLeft])

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return
      // setInputValue(e.target.value);
      if (onChange) onChange(e)
    }

    let valueProp = {}
    if (value) valueProp = { value }

    useEffect(() => {
      if (type === 'password') {
        _setType(showAsText ? 'text' : 'password')
        if (inputRef.current) inputRef.current.focus()
      }
    }, [showAsText])

    return (
      <FormControl
        fullWidth={fullWidth}
        className={`${icon || type === 'password' ? `icon-position-${iconPosition}` : ''}`}
      >
        {!hideLabel && (
          <Label htmlFor={id}>
            {label}
            {required && <span className="required-symbol">{requiredText}</span>}
          </Label>
        )}
        <StyledInput
          className={`${error ? 'has-error' : ''} ${isDirty ? 'is-dirty' : ''} ${
            className ? className : ''
          }`}
          ref={ref || inputRef}
          type={_type}
          id={id}
          onChange={inputOnChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          aria-label={label}
          maxLength={maxLength}
          defaultValue={defaultValue}
          onFocus={() => setIsDirty(true)}
          {...valueProp}
          {...rest}
        />
        {type === 'password' && (
          <div className="input-icon clickable" onClick={() => setShowAsText(!showAsText)}>
            {/* {showAsText ? <VisibilityOff /> : <Visibility />} */}
            {showAsText ? <HidePasswordIcon /> : <ShowPasswordIcon />}
          </div>
        )}
        {icon && error.length === 0 && type !== 'password' && (
          <div className={`input-icon`}>{icon}</div>
        )}
        {error && error.length > 0 && (
          <div className={`base-form-input-error ${errorBox ? 'fill' : ''}`}>{error}</div>
        )}
      </FormControl>
    )
  },
)
