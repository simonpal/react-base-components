import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from './Button'

describe('<Button />', () => {
  it('should render a button with text "My button" by default', () => {
    render(<Button>My button</Button>)

    expect(screen.getByText(/My button/)).toBeInTheDocument()
  })

  it('should call mockFn when clicked', () => {
    const mockFn = jest.fn()
    render(<Button onClick={mockFn}>My button</Button>) // render toggle button

    expect(screen.getByText(/My button/)).toBeInTheDocument() // check if the OFF string to be rendered
    fireEvent.click(screen.getByText(/My button/)) // trigger click event on the element
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
