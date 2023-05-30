import React from 'react';
export interface NumberInputProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string;
    hideLabel?: boolean;
    fullWidth?: boolean;
    value?: number;
    min?: number;
    max?: number;
    required?: boolean;
    disabled?: boolean;
    handleChange: (val: number) => void;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberInput.d.ts.map