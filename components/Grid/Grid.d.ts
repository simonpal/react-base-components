import React from 'react';
import { AlignItems, Direction, Justify, Spacings } from '../../types';
export type GridProps = {
    spacing: Spacings;
    direction?: Direction;
    mobileDirection?: Direction;
    justifyContent?: Justify;
    alignItems?: AlignItems;
    mobileSpacing?: Spacings;
};
export declare const Grid: React.FunctionComponent<GridProps & React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=Grid.d.ts.map