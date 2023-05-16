import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Overlay } from './Overlay'

describe('<Overlay />', () => {
  it('should render an Overlay and not close on click', () => {
    const mockFn = jest.fn()
    render(
      <Overlay visible onClose={mockFn} disableClick>
        <h1>My modal</h1>
        This is a modal
      </Overlay>,
    )
    const wrapper = document.querySelector('.base-overlay') as HTMLDivElement
    expect(wrapper).toBeInTheDocument()
    fireEvent.click(wrapper)
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
  it('should run mockFn on close', () => {
    const mockFn = jest.fn()
    render(
      <Overlay visible onClose={mockFn}>
        <h1>My modal</h1>
        This is a modal
      </Overlay>,
    )
    const wrapper = document.querySelector('.base-overlay') as HTMLDivElement
    fireEvent.click(wrapper)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
