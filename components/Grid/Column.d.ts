import React from 'react';
import { AlignItems, ColumnSize, Justify, Spacings } from '../../types';
export type ColumnProps = {
    xs?: ColumnSize;
    sm?: ColumnSize;
    md?: ColumnSize;
    lg?: ColumnSize;
    xsOffset?: ColumnSize;
    smOffset?: ColumnSize;
    mdOffset?: ColumnSize;
    lgOffset?: ColumnSize;
    alignItems?: AlignItems;
    justifyContent?: Justify;
    flexGrow?: '1' | '0';
    $spacing?: Spacings;
    $mobileSpacing?: Spacings;
};
export declare const Column: React.FunctionComponent<ColumnProps & React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=Column.d.ts.map