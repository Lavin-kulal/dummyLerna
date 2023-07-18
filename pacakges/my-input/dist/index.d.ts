import * as React from 'react';

interface InputProps {
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    testId?: string;
}
declare function Input({ value, defaultValue, onChange, testId }: InputProps): React.JSX.Element;

export { Input, InputProps };
