import type { Meta, StoryObj } from '@storybook/react'

// import { buttonType, priority } from '../../storybookHelper'
import { Select } from './Select'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fullWidth: { control: 'boolean' },
    hideLabel: { control: 'boolean' },
    required: { control: 'boolean' },
    errorBox: { control: 'boolean' },
    label: { control: 'text' },
    id: { control: 'text' },
    requiredText: { control: 'text' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: (args) => (
    <Select {...args}>
      <option>Make selection</option>
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
    </Select>
  ),
}
