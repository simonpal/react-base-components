import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ToggleSwitch } from './ToggleSwitch'

describe('<ToggleSwitch />', () => {
  it('should render a ToggleSwitch and run mockFn on click"', () => {
    const mockFn = jest.fn()
    render(<ToggleSwitch onChange={mockFn} id="mycheckbox" checked={false} small />)

    const input = document.querySelector('input') as HTMLInputElement
    const label = document.querySelector('label') as HTMLLabelElement
    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    fireEvent.click(label)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
