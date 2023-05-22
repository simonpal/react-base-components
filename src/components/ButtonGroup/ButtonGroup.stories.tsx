import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button/Button'
// import { buttonType, priority } from '../../storybookHelper'
import { ButtonGroup } from './ButtonGroup'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    noGap: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
  ),
}
export const Secondary: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button priority="secondary">One</Button>
      <Button priority="secondary">Two</Button>
      <Button priority="secondary">Three</Button>
      <Button priority="secondary">Four</Button>
    </ButtonGroup>
  ),
}
export const Outlined: Story = {
  render: (args) => (
    <ButtonGroup noGap>
      <Button priority="outline">One</Button>
      <Button priority="outline">Two</Button>
      <Button priority="outline">Three</Button>
      <Button priority="outline">Four</Button>
    </ButtonGroup>
  ),
}
