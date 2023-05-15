import type { Meta, StoryObj } from '@storybook/react'

// import { buttonType, priority } from '../../storybookHelper'
import { Tooltip } from './Tooltip'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    position: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '4rem' }}>
      <Tooltip {...args}>
        <button>Hover me</button>
      </Tooltip>
    </div>
  ),
}
