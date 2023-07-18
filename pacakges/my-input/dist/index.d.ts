import * as React from 'react';

interface InputProps<Type extends string | number | readonly string[] = string> {
    value?: Type;
    defaultValue?: Type;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, ...arg: any[]) => void;
    testId?: string;
    isError?: boolean;
    placeholder?: string;
    disabled?: boolean;
}
declare function Input<Type extends string | number | readonly string[] = string>({ value, defaultValue, placeholder, onChange, testId, isError, disabled, }: InputProps<Type>): React.JSX.Element;

export { Input, InputProps };
