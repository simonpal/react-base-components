import React from 'react';
import { AlignItems, Justify } from '../../types';
import { OverlayProps } from '../Overlay/Overlay';
export interface ModalProps extends OverlayProps {
    visible: boolean;
    width?: string;
    alignItems?: AlignItems;
    justifyContent?: Justify;
    onClose: () => void;
}
export declare const Modal: React.FunctionComponent<ModalProps & React.HTMLAttributes<HTMLDivElement>>;
//# sourceMappingURL=Modal.d.ts.map