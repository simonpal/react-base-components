import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Modal } from './Modal'

describe('<Modal />', () => {
  it('should render a Modal', () => {
    const mockFn = jest.fn()
    render(
      <Modal visible onClose={mockFn}>
        <h1>My modal</h1>
        This is a modal
      </Modal>,
    )
    const wrapper = document.querySelector('.base-modal')
    expect(wrapper).toBeInTheDocument()
  })
  it('should run mockFn on close', () => {
    const mockFn = jest.fn()
    render(
      <Modal visible onClose={mockFn}>
        <h1>My modal</h1>
        This is a modal
      </Modal>,
    )
    const closeBtn = document.querySelector('[data-testid="close-button"]') as HTMLButtonElement
    expect(closeBtn).toBeInTheDocument()
    fireEvent.click(closeBtn)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
