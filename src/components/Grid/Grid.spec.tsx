import { render } from '@testing-library/react'
import React from 'react'

import { Column } from './Column'
import { Grid } from './Grid'

describe('<Grid />', () => {
  it('should render a Grid with 3 columns', () => {
    render(
      <Grid spacing="s">
        <Column lg="4" md="4" sm="4" xs="4">
          Column 1
        </Column>
        <Column lg="4" md="4" sm="4" xs="4">
          Column 2
        </Column>
        <Column lg="4" md="4" sm="4" xs="4">
          Column 3
        </Column>
      </Grid>,
    )
    const columns = document.querySelectorAll('[data-testid="grid-column"]')
    expect(columns).toHaveLength(3)
    expect(columns[2]).toHaveTextContent('Column 3')
  })
})
