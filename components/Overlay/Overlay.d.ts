import React from 'react';
export type OverlayProps = {
    zIndex?: number;
    visible?: boolean;
    transparent?: boolean;
    disableClick?: boolean;
    blur?: boolean;
    onClose?: () => void;
};
export declare const Overlay: React.FunctionComponent<OverlayProps & React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=Overlay.d.ts.map