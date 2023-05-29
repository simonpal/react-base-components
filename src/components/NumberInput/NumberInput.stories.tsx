import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

// import { buttonType, priority } from '../../storybookHelper'
import { NumberInput } from './NumberInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hideLabel: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof NumberInput>

const NumberInputWithState = (args: any) => {
  const [value, setValue] = useState(5)
  return <NumberInput {...args} value={value} handleChange={(val: number) => setValue(val)} />
}

export const Primary: Story = {
  render: (args) => <NumberInputWithState {...args} />,
}

// export const Primary: Story = {
//   args: {
//     fullWidth: false,
//     required: false,
//     disabled: false,
//     min: 0,
//     max: 100,
//     value: 5,
//     label: 'Number input',
//   },
// }
