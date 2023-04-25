// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Helloworld } from './HelloWorld'

const meta: Meta<typeof Helloworld> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Helloworld',
  component: Helloworld,
}

export default meta

type Story = StoryObj<typeof Helloworld>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Helloworld text="Hello" />,
}
