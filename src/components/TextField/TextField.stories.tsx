import type { Meta, StoryObj } from '@storybook/react'

// import { buttonType, priority } from '../../storybookHelper'
import { TextField } from './TextField'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    id: { control: 'text' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: ({ label = 'Label', ...rest }) => <TextField label={label} {...rest} />,
}
