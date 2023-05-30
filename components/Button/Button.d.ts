import React from 'react';
export type ButtonProps = {
    priority?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    children: React.ReactNode;
    iconLeft?: boolean;
};
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.HTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map