import React from 'react';
type InputType = 'text' | 'number' | 'email' | 'password' | 'date' | 'datetime-local' | 'time' | 'tel';
export type TextfieldProps = {
    label: string;
    hideLabel?: boolean;
    error?: string;
    defaultValue?: any;
    fullWidth?: boolean;
    icon?: JSX.Element;
    iconLeft?: boolean;
    type?: InputType;
    required?: boolean;
    requiredText?: string;
    disabled?: boolean;
    value?: string;
    maxLength?: number;
    name?: string;
    errorBox?: boolean;
};
export declare const TextField: React.ForwardRefExoticComponent<TextfieldProps & React.HTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextField.d.ts.map