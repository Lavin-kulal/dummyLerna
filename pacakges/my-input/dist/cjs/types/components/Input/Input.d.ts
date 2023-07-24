import * as React from "react";
import "./styles.css";
export type UpdaptInputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    testId?: string;
    InputOnChange?: <T>(e: React.ChangeEvent<HTMLInputElement>, ...arg: T[]) => void;
    inputValue?: any;
    inputDisabled?: boolean;
    isError?: boolean;
};
export declare function UpdaptInput({ testId, inputValue, InputOnChange, inputDisabled, isError, ...rest }: UpdaptInputProp): React.JSX.Element;
