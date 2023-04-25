import type { Meta, StoryObj } from '@storybook/react'
import { alignItems, justifyContent, spacing } from 'src/storybookHelper'

import Button from '../Button/Button'
// import { buttonType, priority } from '../../storybookHelper'
import { InlineStack } from './InlineStack'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof InlineStack> = {
  title: 'Components/InlineStack',
  component: InlineStack,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spacing,
    alignItems,
    justifyContent,
  },
}

export default meta
type Story = StoryObj<typeof InlineStack>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: (args) => (
    <InlineStack {...args}>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
      <div>
        <Button>This is a Button</Button>
      </div>
    </InlineStack>
  ),
}
