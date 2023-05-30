import React from 'react';
export type Option = {
    value: string;
    text: string;
    key: string;
};
export type DropdownItemProps = {
    option: Option;
    focus: boolean;
    index: number;
    handleClick: (e: any, option: Option, index: number) => void;
};
export declare const DropdownItem: React.FunctionComponent<DropdownItemProps & React.HTMLAttributes<HTMLLIElement>>;
//# sourceMappingURL=DropdownItem.d.ts.map