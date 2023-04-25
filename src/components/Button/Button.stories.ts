import type { Meta, StoryObj } from '@storybook/react'

import { buttonType, priority } from '../../storybookHelper'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    priority,
    type: { ...buttonType },
    fullWidth: { control: 'boolean' },
    iconLeft: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    priority: 'primary',
    children: 'This is a button',
  },
}

export const Secondary: Story = {
  args: {
    priority: 'secondary',
    children: 'This is a button',
  },
}
export const Tertiary: Story = {
  args: {
    priority: 'tertiary',
    children: 'This is a button',
  },
}
export const Outlined: Story = {
  args: {
    priority: 'outline',
    children: 'This is a button',
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
