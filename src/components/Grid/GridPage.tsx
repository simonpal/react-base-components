// import { ColumnSize, Spacings } from 'src/types'

import { AlignItems, ColumnSize, Direction, Justify, Spacings } from '../../types'
import Column from './Column'
import Grid from './Grid'

export interface GridPageProps {
  spacing: Spacings // Pick<GridProps, 'spacing'>
  direction?: Direction // Pick<GridProps, 'spacing'>
  mobileDirection?: Direction
  justifyContent?: Justify
  alignItems?: AlignItems
  //   width?: string
  mobileSpacing?: Spacings
  lg: ColumnSize
  md: ColumnSize
  sm: ColumnSize
  xs: ColumnSize
  xsOffset?: ColumnSize
  smOffset?: ColumnSize
  mdOffset?: ColumnSize
  lgOffset?: ColumnSize
  flexGrow?: '1' | '0'
}
const GridPage = ({
  spacing,
  mobileSpacing,
  direction,
  mobileDirection,
  alignItems,
  justifyContent,
  lg,
  md,
  sm,
  xs,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  flexGrow,
}: GridPageProps) => {
  const gridProps = {
    spacing,
    mobileSpacing,
    direction,
    mobileDirection,
    alignItems,
    justifyContent,
  }

  const colProps = { lg, md, sm, xs, xsOffset, smOffset, mdOffset, lgOffset, flexGrow }
  return (
    <Grid {...gridProps}>
      <Column {...colProps}>
        <img src="https://placehold.co/400x100?text=Column+1" alt="placeholder 1" />
      </Column>
      <Column {...colProps}>
        <img src="https://placehold.co/400x100?text=Column+2" alt="placeholder 2" />
      </Column>
      <Column {...colProps}>
        <img src="https://placehold.co/400x100?text=Column+3" alt="placeholder 3" />
      </Column>
    </Grid>
  )
}

export default GridPage
