import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: { control: 'text' },
    search: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    options: [
      { value: 'se', text: 'Sweden', key: 'se' },
      { value: 'no', text: 'Norway', key: 'no' },
      { value: 'fi', text: 'Finland', key: 'fi' },
    ],
    placeholder: 'Select country',
  },
}
