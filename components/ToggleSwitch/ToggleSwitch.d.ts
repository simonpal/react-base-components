export type ToggleSwitchProps = {
    id: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    name?: string;
    optionLabels?: string[];
    small?: boolean;
    disabled?: boolean;
};
export declare const ToggleSwitch: ({ id, name, checked, onChange, optionLabels, small, disabled, }: ToggleSwitchProps) => JSX.Element;
//# sourceMappingURL=ToggleSwitch.d.ts.map