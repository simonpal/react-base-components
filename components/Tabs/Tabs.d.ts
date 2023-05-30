import React from 'react';
export type TabProps = {
    children: React.ReactNode[];
    defaultActiveIndex?: number;
    onTabChange?: (idx: number) => void;
    className?: string;
};
export declare const Tabs: ({ children, onTabChange, defaultActiveIndex, className }: TabProps) => JSX.Element | null;
export type TabItemProps = {
    children: any;
    eventKey: string;
    title: string;
    disabled?: boolean;
    visible?: boolean;
};
export declare const TabItem: ({ children, visible, eventKey, title }: TabItemProps) => JSX.Element | null;
//# sourceMappingURL=Tabs.d.ts.map