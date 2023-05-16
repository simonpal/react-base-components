import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Checkbox } from './Checkbox'

describe('<Checkbox />', () => {
  it('should render a Checkbox with label "My checkbox"', () => {
    render(<Checkbox label="My checkbox" id="mycheckbox" />)

    const input = document.querySelector('input') as HTMLInputElement
    expect(screen.getByText(/My checkbox/)).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
  it('should check the box on click', () => {
    const mockFn = jest.fn()
    render(<Checkbox onChange={mockFn} label="My checkbox" id="mycheckbox" />)

    const input = document.querySelector('input') as HTMLInputElement
    fireEvent.click(input)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(input.checked).toBe(true)
  })
})
