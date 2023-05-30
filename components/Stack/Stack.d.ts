import React from 'react';
import { AlignItems, Justify, Spacings } from '../../types';
type WrapperProps = {
    alignItems?: AlignItems;
    justifyContent?: Justify;
};
export interface StackProps extends WrapperProps {
    spacing: Spacings;
    children: React.ReactNode;
}
export declare const Stack: React.FunctionComponent<StackProps & React.HTMLAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Stack.d.ts.map