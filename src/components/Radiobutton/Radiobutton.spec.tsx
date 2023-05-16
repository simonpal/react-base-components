import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Radiobutton } from './Radiobutton'

describe('<Radiobutton />', () => {
  it('should render two Radiobuttons with label "My Radiobutton"', () => {
    render(
      <>
        <Radiobutton label="My Radiobutton" id="myRadiobutton" name="radiogroup" />
        <Radiobutton name="radiogroup" label="My second radiobutton" id="mySecondRadiobutton" />
      </>,
    )

    const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    expect(screen.getByText(/My Radiobutton/)).toBeInTheDocument()
    expect(inputs).toHaveLength(2)
  })
  it('should check the radiobutton on click', () => {
    const mockFn = jest.fn()
    render(
      <>
        <Radiobutton
          label="My Radiobutton"
          id="myRadiobutton"
          name="radiogroup"
          onChange={mockFn}
        />
        <Radiobutton
          name="radiogroup"
          label="My second radiobutton"
          id="mySecondRadiobutton"
          onChange={mockFn}
        />
      </>,
    )

    const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    fireEvent.click(inputs[1])
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(inputs[1].checked).toBe(true)
  })
})
