import { Meta, StoryObj } from '@storybook/react'
import { alignItems, columnSize, direction, justifyContent, spacing } from 'src/storybookHelper'
import { ColumnSize, Spacings } from 'src/types'

import GridPage from './GridPage'

const meta: Meta<typeof GridPage> = {
  title: 'Components/Grid',
  component: GridPage,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    spacing: { ...spacing, description: 'Grid component' },
    direction: { ...direction, description: 'Grid component' },
    mobileDirection: { ...direction, description: 'Grid component' },
    justifyContent: { ...justifyContent, description: 'Grid component' },
    alignItems: { ...alignItems, description: 'Grid component' },
    lg: { ...columnSize, description: 'Column component' },
    md: { ...columnSize, description: 'Column component' },
    sm: { ...columnSize, description: 'Column component' },
    xs: { ...columnSize, description: 'Column component' },
    lgOffset: { ...columnSize, description: 'Column component' },
    mdOffset: { ...columnSize, description: 'Column component' },
    smOffset: { ...columnSize, description: 'Column component' },
    xsOffset: { ...columnSize, description: 'Column component' },
    flexGrow: {
      control: 'select',
      options: ['1', '0'],
      description: 'Column component',
    },
  },
}

export default meta
type Story = StoryObj<typeof GridPage>

export const Simple: Story = {
  args: {
    spacing: 'm' as Spacings,

    lg: '4' as ColumnSize,
    md: '4' as ColumnSize,
    sm: '6' as ColumnSize,
    xs: '12' as ColumnSize,
  },
}
