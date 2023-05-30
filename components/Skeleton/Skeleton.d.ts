import React from 'react';
export type SkeletonProps = {
    animation?: boolean | 'wave' | 'pulse';
    height?: number | string;
    width?: number | string;
    variant?: 'circular' | 'rounded' | 'rectangular';
    dark?: boolean;
};
export declare const Skeleton: React.FunctionComponent<SkeletonProps & React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=Skeleton.d.ts.map