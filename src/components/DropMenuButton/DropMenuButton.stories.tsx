import type { Meta, StoryObj } from '@storybook/react'

// import { buttonType, priority } from '../../storybookHelper'
import { DropMenuButton } from './DropMenuButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DropMenuButton> = {
  title: 'Components/DropMenuButton',
  component: DropMenuButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof DropMenuButton>

const Icon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
  </svg>
)

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const OneItem: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <DropMenuButton {...args} label={Icon}>
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
        <button>Item 4</button>
      </DropMenuButton>
    </div>
  ),
}
