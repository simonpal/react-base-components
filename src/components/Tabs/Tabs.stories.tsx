import type { Meta, StoryObj } from '@storybook/react'

// import { buttonType, priority } from '../../storybookHelper'
import { TabItem, Tabs } from './Tabs'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    defaultActiveIndex: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabItem eventKey="first" title="First">
        <h3>First tab</h3>
        <h3>Lorem Ipsum dolor sit amet.</h3>
      </TabItem>
      <TabItem eventKey="second" title="Second">
        <h3>Second tab</h3>
        <p>Lorem Ipsum dolor sit amet.</p>
      </TabItem>
      <TabItem disabled eventKey="third" title="Disabled">
        <h3>Third tab</h3>
        <p>Lorem Ipsum dolor sit amet.</p>
      </TabItem>
      <TabItem eventKey="fourth" title="Fourth">
        <h3>Fourth tab</h3>
        <p>Lorem Ipsum dolor sit amet.</p>
      </TabItem>
    </Tabs>
  ),
}
