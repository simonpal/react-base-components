import React from 'react';
import { AlignItems, Justify, Spacings } from '../../types';
export type InlineStackProps = {
    spacing: Spacings;
    children: React.ReactNode;
    justifyContent?: Justify;
    alignItems?: AlignItems;
};
export declare const InlineStack: React.FunctionComponent<InlineStackProps & React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=InlineStack.d.ts.map