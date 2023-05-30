import React from 'react';
export type RadiobuttonProps = {
    fullWidth?: boolean;
    id: string;
    label: string | JSX.Element;
    value?: string;
    hideLabel?: boolean;
    name?: string;
};
export type StyledRadiobuttonProps = {
    $fullWidth: boolean;
};
export declare const Radiobutton: React.ForwardRefExoticComponent<RadiobuttonProps & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Radiobutton.d.ts.map