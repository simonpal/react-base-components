import { Dispatch, SetStateAction } from 'react';
export declare const useRoveFocus: (size: number, enabled: boolean) => [number, Dispatch<SetStateAction<number>>];
export declare const useOutsideClick: (ref: any, cb: () => void) => void;
export declare const useDebouncedValue: (value: any | undefined, delay: number) => any;
export declare const useWindowSize: () => {
    width: number | undefined;
    height: number | undefined;
};
export declare const useScript: (url: string) => void;
type CookieOptions = {
    expires?: Date | number | string;
    path?: string;
    domain?: string;
    secure?: boolean;
};
export declare const setCookie: (name: string, value: any, options: CookieOptions) => void;
export declare const getCookie: (name: string, initialValue?: string) => string;
export declare const useCookie: (key: string, initialValue: string) => (string | ((value: string, options: CookieOptions) => void))[];
export {};
//# sourceMappingURL=hooks.d.ts.map