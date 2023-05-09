import type { Meta, StoryObj } from '@storybook/react'

import { Stack } from '../Stack/Stack'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    animation: { control: 'select', options: ['wave', 'pulse', false] },
    variant: { control: 'select', options: ['rectangular', 'rounded', 'circular'] },
    dark: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  args: {
    animation: 'pulse',
    variant: 'rectangular',
  },
}

export const Combo: Story = {
  render: () => (
    <div>
      <Stack spacing="m">
        <Skeleton animation="wave" variant="rounded" height="2rem" width="70%" />
        <Skeleton animation="wave" variant="rectangular" height="8rem" />
        <Skeleton animation="wave" variant="circular" height="3rem" width="3rem" />
        <Skeleton animation="wave" variant="rounded" height="1rem" />
        <Skeleton animation="wave" variant="rounded" height="1rem" />
        <Skeleton animation="wave" variant="rounded" height="1rem" width="80%" />
      </Stack>
    </div>
  ),
}
