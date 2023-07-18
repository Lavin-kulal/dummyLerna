import * as React from "react";
export interface InputProps {
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    testId?: string;
}
export declare function Input({ value, defaultValue, onChange, testId }: InputProps): React.JSX.Element;
