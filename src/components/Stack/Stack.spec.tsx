import { render } from '@testing-library/react'
import React from 'react'

import { Stack } from './Stack'

describe('<Stack />', () => {
  it('should render a Stack of buttons', () => {
    const { getAllByRole } = render(
      <Stack spacing="xl">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </Stack>,
    )

    expect(document.querySelector('.base-spacing-box')).toBeInTheDocument()
    expect(getAllByRole('button').length).toBe(3)
  })
})
