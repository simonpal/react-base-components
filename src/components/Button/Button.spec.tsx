import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from './Button'

describe('<Button />', () => {
  it('should render a button with text "My button" by default', () => {
    render(<Button>My button</Button>)

    const button = document.querySelector('button') as HTMLButtonElement | null

    // button exists in the form component
    expect(button).toBeTruthy()

    // has text
    expect(button?.textContent).toBe('My button')
  })

  it('should call mockFn when clicked', () => {
    const mockFn = jest.fn()
    render(<Button onClick={mockFn}>My button</Button>) // render button

    expect(screen.getByText(/My button/)).toBeInTheDocument()
    fireEvent.click(screen.getByText(/My button/)) // trigger click event on the element
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
