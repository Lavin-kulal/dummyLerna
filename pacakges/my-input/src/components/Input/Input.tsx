import * as React from "react";
import "./styles.css";
export interface InputProps<
  Type extends string | number | readonly string[] = string
> {
  value?: Type;
  defaultValue?: Type;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, ...arg: any[]) => void;
  testId?: string;
  isError?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export function Input<
  Type extends string | number | readonly string[] = string
>({
  value,
  defaultValue,
  placeholder,
  onChange,
  testId,
  isError,
  disabled,
}: InputProps<Type>) {
  return (
    <input
      className={isError ? "error" : "no-error"}
      type="text"
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      data-testid={testId}
    />
  );
}
