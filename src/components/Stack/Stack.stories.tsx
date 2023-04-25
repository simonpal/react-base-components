import type { Meta, StoryObj } from '@storybook/react'
import { alignItems, justifyContent, spacing } from 'src/storybookHelper'

// import { buttonType, priority } from '../../storybookHelper'
import { Stack } from './Stack'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
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
type Story = StoryObj<typeof Stack>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: (args) => (
    <Stack {...args}>
      <div>
        <img src="https://placehold.co/400x100?text=Item+1" alt="Item 1" />
      </div>
      <div>
        <img src="https://placehold.co/400x100?text=Item+2" alt="Item 2" />
      </div>
      <div>
        <img src="https://placehold.co/400x100?text=Item+3" alt="Item 3" />
      </div>
    </Stack>
  ),
}
