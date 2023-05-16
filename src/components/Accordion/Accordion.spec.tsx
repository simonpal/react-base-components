import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Accordion, AccordionItem } from './Accordion'

const setup = () => {
  const wrapper = render(
    <Accordion singleSelect>
      <AccordionItem title="First" eventKey="firstItem">
        <div style={{ padding: 'var(--spacing-m)' }}>
          <h2>This is a title</h2>
          <p>This is a text</p>
        </div>
      </AccordionItem>
      <AccordionItem title="Second" eventKey="secondItem">
        <div style={{ padding: 'var(--spacing-m)' }}>
          <h2>This is a title</h2>
          <p>This is a text</p>
        </div>
      </AccordionItem>
    </Accordion>,
  )
  const buttons = document.querySelectorAll('button')
  const regions = screen.getAllByRole('region')
  return {
    wrapper,
    buttons,
    regions,
  }
}

describe('<Accordion />', () => {
  it('should render a button with text "My button" by default', () => {
    const { buttons } = setup()

    const firstButton = buttons[0] as HTMLButtonElement | null

    // button exists in the form component
    expect(firstButton).toBeTruthy()

    // has text
    expect(firstButton).toHaveTextContent('First')
  })

  it('should open the region when clicked', () => {
    const { buttons, regions } = setup()

    const firstButton = buttons[0] as HTMLButtonElement

    expect(firstButton).toBeTruthy()

    fireEvent.click(firstButton)

    const firstRegion = regions[0] as HTMLDivElement
    expect(firstRegion.classList.contains('open')).toBe(true)
    expect(firstButton.parentElement).toHaveAttribute('data-state', 'open')
  })
})
