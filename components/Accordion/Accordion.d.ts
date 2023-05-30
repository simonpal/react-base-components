import React from 'react';
type AccordionCtx = {
    activeItems?: string[];
    handleChange?: any;
};
export declare const AccordionContext: React.Context<AccordionCtx>;
export type AccordionProps = {
    singleSelect?: boolean;
    defaultActiveKey?: string;
};
export declare const Accordion: React.FC<AccordionProps & React.HTMLAttributes<HTMLDivElement>>;
export type AccordionItemProps = {
    children: any;
    eventKey: string;
    title: string;
    maxHeight?: string;
    titleComponent?: JSX.Element;
    disabled?: boolean;
    onClick?: (key: string) => void;
};
export declare const AccordionItem: React.FC<AccordionItemProps>;
export {};
//# sourceMappingURL=Accordion.d.ts.map