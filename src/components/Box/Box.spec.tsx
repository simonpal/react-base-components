import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Box } from './Box'

describe('<Box />', () => {
  it('should render a Box with text "My Box" by default', () => {
    render(<Box spacing="s">My Box</Box>)

    expect(screen.getByText(/My Box/)).toBeInTheDocument()
    expect(document.querySelector('.base-box')).toBeInTheDocument()
  })
})
