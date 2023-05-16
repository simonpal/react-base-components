import { render } from '@testing-library/react'
import React from 'react'

import { Skeleton } from './Skeleton'

describe('<Skeleton />', () => {
  it('should render 6 Skeleton', () => {
    const { getAllByTestId } = render(
      <div>
        <Skeleton
          data-testid="skeleton"
          animation="wave"
          variant="rounded"
          height="2rem"
          width="70%"
        />
        <Skeleton data-testid="skeleton" animation="wave" variant="rectangular" height="8rem" />
        <Skeleton
          data-testid="skeleton"
          animation="wave"
          variant="circular"
          height="3rem"
          width="3rem"
        />
        <Skeleton data-testid="skeleton" animation="wave" variant="rounded" height="1rem" />
        <Skeleton data-testid="skeleton" animation="wave" variant="rounded" height="1rem" />
        <Skeleton
          data-testid="skeleton"
          animation="wave"
          variant="rounded"
          height="1rem"
          width="80%"
        />
      </div>,
    )

    expect(getAllByTestId('skeleton').length).toBe(6)
  })
})
