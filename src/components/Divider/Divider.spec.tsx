import { render } from '@testing-library/react'
import React from 'react'

import { Divider } from './Divider'

describe('<Divider />', () => {
  it('should render a Divider ', () => {
    render(<Divider spacing="s" />)
    expect(document.querySelector('.base-divider')).toBeInTheDocument()
  })
})
