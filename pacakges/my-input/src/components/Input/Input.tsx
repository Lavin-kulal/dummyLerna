import * as React from "react";
import "./styles.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  testId?: string;
  InputOnChange?: <T>(
    e: React.ChangeEvent<HTMLInputElement>,
    ...arg: T[]
  ) => void;
  inputValue?: any;
  inputDisabled?: boolean;
  isError?: boolean;
};

export function UpdaptInput({
  testId,
  inputValue,
  InputOnChange,
  inputDisabled,
  isError,
  ...rest
}: UpdaptInputProp) {
  return (
    <input
      {...rest}
      className={`input ${isError ? "error" : "no-error"}`}
      type="text"
      disabled={inputDisabled}
      onChange={InputOnChange}
      data-testid={"testId"}
      value={inputValue}
    />
  );
}
