import { render } from '@testing-library/react'
import React from 'react'

import { InlineStack } from './InlineStack'

describe('<InlineStack />', () => {
  it('should render an InlineStack with 5 children', () => {
    render(
      <InlineStack spacing="s">
        <button>Button 1</button>
        <button>Button 1</button>
        <button>Button 1</button>
        <button>Button 1</button>
        <button>Button 1</button>
      </InlineStack>,
    )
    const wrapper = document.querySelector('.base-inline-stack-wrapper')
    expect(wrapper).toBeInTheDocument()
    // const children = wrapper.findAllByRole('button')
    expect(wrapper?.children).toHaveLength(5)
  })
})
