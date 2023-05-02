import type { Meta, StoryObj } from '@storybook/react'
import { color } from 'src/storybookHelper'

import { Spinner } from './Spinner'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
    color,
    borderWidth: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    size: 'lg',
  },
}

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }
