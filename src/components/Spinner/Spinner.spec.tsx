import { render, screen } from '@testing-library/react'
import React from 'react'

import { Spinner } from './Spinner'

describe('<Spinner />', () => {
  it('should render a Spinner', () => {
    const { getByTestId } = render(<Spinner size="xl" data-testid="spinner" />)

    expect(getByTestId('spinner')).toBeInTheDocument()
  })
})
