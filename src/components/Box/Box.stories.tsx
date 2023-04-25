import type { Meta, StoryObj } from '@storybook/react'
import { alignItems, flexDirection, justifyContent, spacing } from 'src/storybookHelper'

// import { buttonType, priority } from '../../storybookHelper'
import { Box } from './Box'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spacing: { ...spacing, description: 'Will override all other spacing' },
    topSpacing: spacing,
    bottomSpacing: spacing,
    leftSpacing: spacing,
    rightSpacing: spacing,
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    flexDirection,
    alignItems,
    justifyContent,
    // mobileSpacing: spacing,
  },
}

export default meta
type Story = StoryObj<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    topSpacing: 'l',
    bottomSpacing: 'l',
    leftSpacing: 's',
    rightSpacing: 's',
    color: '#000000',
    backgroundColor: '#EEEEEE',
    children: <div>Hello!</div>,
  },
}
