import React from 'react';
import { AlignItems, Direction, Justify, Spacings } from '../../types';
export type BoxProps = {
    backgroundColor?: string;
    width?: string;
    color?: string;
    topSpacing?: Spacings;
    bottomSpacing?: Spacings;
    leftSpacing?: Spacings;
    rightSpacing?: Spacings;
    spacing?: Spacings;
    alignItems?: AlignItems;
    justifyContent?: Justify;
    zIndex?: number;
    flexDirection?: Direction;
};
export declare const Box: React.ForwardRefExoticComponent<BoxProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Box.d.ts.map