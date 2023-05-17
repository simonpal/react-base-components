import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  it('should render a Tooltip when hover button"', async () => {
    const baseDom = render(
      <Tooltip title="My tooltip">
        <button data-testid="hover-button">Hover me</button>
      </Tooltip>,
    )

    fireEvent.mouseOver(baseDom.getByTestId('hover-button'))

    expect(await baseDom.findByText('My tooltip')).toBeInTheDocument()
  })
})
