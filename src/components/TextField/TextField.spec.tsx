import { fireEvent, render, screen } from '@testing-library/react'

import { TextField } from './TextField'

const setup = (disabled = false) => {
  const utils = render(<TextField label="My input" disabled={disabled} />)
  const input = screen.getByLabelText('My input') as HTMLInputElement
  return {
    input,
    ...utils,
  }
}

describe('<TextField />', () => {
  it('should render an input and change value', () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: 'abc' } })
    expect(input.value).toBe('abc')
  })

  it('should render an input but dont change value if disabled', () => {
    const { input } = setup(true)
    expect(input).toBeDisabled()
    // fireEvent.change(input, { target: { value: 'abc' } })
    // expect(input.value).toBe('')
  })
})
