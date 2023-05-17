import React, { useEffect, useRef } from 'react'

export type Option = {
  value: string
  text: string
  key: string
}

export type DropdownItemProps = {
  option: Option
  focus: boolean
  index: number
  handleClick: (e: any, option: Option, index: number) => void
}

export const DropdownItem: React.FunctionComponent<
  DropdownItemProps & React.HTMLAttributes<HTMLLIElement>
> = ({ option, focus, index, handleClick }) => {
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (focus && ref.current) {
      // Move element into view when it is focused
      ref.current.focus()
      ref.current.setAttribute('aria-selected', 'true')
    } else if (!focus && ref.current) {
      ref.current.setAttribute('aria-selected', 'false')
    }
  }, [focus])

  return (
    <li
      role="option"
      aria-checked={focus}
      aria-selected={focus}
      onClick={(e) => handleClick(e, option, index)}
      tabIndex={focus ? 0 : -1}
      ref={ref}
      onKeyPress={(e) => handleClick(e, option, index)}
    >
      {option.text}
    </li>
  )
}
