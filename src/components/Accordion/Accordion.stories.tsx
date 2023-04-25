import type { Meta, StoryObj } from '@storybook/react'

// import { buttonType, priority } from '../../storybookHelper'
import { Accordion, AccordionItem } from './Accordion'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    defaultActiveKey: { control: 'text' },
    singleSelect: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: (args) => (
    <Accordion {...args}>
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
      <AccordionItem
        eventKey="thirdItem"
        title="Third"
        titleComponent={
          <button role="button" aria-controls="thirdItem-section" id="thirdItem-trigger">
            Im a custom component
          </button>
        }
      >
        <div style={{ padding: 'var(--spacing-m)' }}>
          <h2>This is a title</h2>
          <p>This is a text</p>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}
