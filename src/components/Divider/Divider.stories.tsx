import type { Meta, StoryObj } from '@storybook/react'
import { spacing } from 'src/storybookHelper'

// import { buttonType, priority } from '../../storybookHelper'
import { Divider } from './Divider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spacing,
    mobileSpacing: spacing,
  },
}

export default meta
type Story = StoryObj<typeof Divider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    spacing: 'm',
    color: '#EEEEEE',
  },
}
