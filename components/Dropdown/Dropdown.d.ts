import React from 'react';
import { Option } from './DropdownItem';
export type DropdownProps = {
    placeholder: string;
    options?: Option[];
    search?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    handleChange?: (val: Option | null) => void;
    icon?: JSX.Element;
    value?: string;
    clearable?: boolean;
    maxHeight?: string;
};
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLUListElement>>;
//# sourceMappingURL=Dropdown.d.ts.map