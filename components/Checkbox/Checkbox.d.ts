import React from 'react';
export type CheckboxProps = {
    fullWidth?: boolean;
    id: string;
    label: string | JSX.Element;
    value?: string;
    hideLabel?: boolean;
    name?: string;
};
export type StyledCheckboxProps = {
    $fullWidth: boolean;
};
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map