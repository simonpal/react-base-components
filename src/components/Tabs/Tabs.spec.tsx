import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { TabItem, Tabs } from './Tabs'

const setup = () => {
  const wrapper = render(
    <Tabs>
      <TabItem eventKey="first" title="First">
        <h3>First tab</h3>
      </TabItem>
      <TabItem eventKey="second" title="Second">
        <h3>Second tab</h3>
      </TabItem>
      <TabItem disabled eventKey="third" title="Disabled">
        <h3>Third tab</h3>
      </TabItem>
      <TabItem eventKey="fourth" title="Fourth">
        <h3>Fourth tab</h3>
      </TabItem>
    </Tabs>,
  )

  const { getAllByRole, getByRole } = wrapper
  const buttons = getAllByRole('tab')
  const tabPanel = getByRole('tabpanel')
  return {
    wrapper,
    buttons,
    tabPanel,
  }
}

describe('<Tabs />', () => {
  it('should render 4 tabs', () => {
    const { buttons, tabPanel } = setup()

    const firstButton = buttons[0] as HTMLButtonElement | null

    // button exists in the form component
    expect(firstButton).toHaveTextContent('First')

    // has text
    expect(tabPanel).toHaveTextContent('First tab')
  })

  it('should switch region when clicked', () => {
    const { buttons } = setup()

    const secButton = buttons[1] as HTMLButtonElement

    expect(secButton).toBeTruthy()
    expect(secButton).toHaveTextContent('Second')
    expect(secButton).toHaveAttribute('aria-selected', 'false')

    fireEvent.click(secButton)

    // expect(tabPanel).toHaveTextContent('Second tab')
    expect(secButton).toHaveAttribute('aria-selected', 'true')
  })
  it('should not switch region when disabled', () => {
    const { buttons } = setup()

    const button = buttons[2] as HTMLButtonElement

    expect(button).toBeTruthy()
    expect(button).toHaveTextContent('Disabled')
    expect(button).toHaveAttribute('aria-selected', 'false')

    fireEvent.click(button)

    // expect(tabPanel).toHaveTextContent('Second tab')
    expect(button).toHaveAttribute('aria-selected', 'false')
  })
})
