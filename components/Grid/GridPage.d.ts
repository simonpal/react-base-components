import { AlignItems, ColumnSize, Direction, Justify, Spacings } from '../../types';
export type GridPageProps = {
    spacing: Spacings;
    direction?: Direction;
    mobileDirection?: Direction;
    justifyContent?: Justify;
    alignItems?: AlignItems;
    mobileSpacing?: Spacings;
    lg: ColumnSize;
    md: ColumnSize;
    sm: ColumnSize;
    xs: ColumnSize;
    xsOffset?: ColumnSize;
    smOffset?: ColumnSize;
    mdOffset?: ColumnSize;
    lgOffset?: ColumnSize;
    flexGrow?: '1' | '0';
};
declare const GridPage: ({ spacing, mobileSpacing, direction, mobileDirection, alignItems, justifyContent, lg, md, sm, xs, xsOffset, smOffset, mdOffset, lgOffset, flexGrow, }: GridPageProps) => JSX.Element;
export default GridPage;
//# sourceMappingURL=GridPage.d.ts.map