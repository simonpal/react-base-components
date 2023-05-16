import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Select } from './Select'

describe('<Select />', () => {
  it('should render a Select with label "My select" by default', () => {
    render(
      <Select label="My select">
        <option value="1">First</option>
        <option value="2">Second</option>
        <option value="3">Third</option>
      </Select>,
    )

    expect(screen.getByText(/My select/)).toBeInTheDocument()
    expect(document.querySelector('select')).toBeInTheDocument()
  })
  it('should call mockFn on change', () => {
    const mockFn = jest.fn()
    const { getByTestId, getAllByTestId } = render(
      <Select label="My select" onChange={mockFn} data-testid="select">
        <option data-testid="select-option" value="1">
          First
        </option>
        <option data-testid="select-option" value="2">
          Second
        </option>
        <option data-testid="select-option" value="3">
          Third
        </option>
      </Select>,
    )
    fireEvent.change(getByTestId('select'), { target: { value: 2 } })
    const options = getAllByTestId('select-option') as HTMLOptionElement[]
    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
    expect(options[2].selected).toBeFalsy()
    // expect(screen.getByText(/My select/)).toBeInTheDocument()
    // expect(document.querySelector('select')).toBeInTheDocument()
  })
})
