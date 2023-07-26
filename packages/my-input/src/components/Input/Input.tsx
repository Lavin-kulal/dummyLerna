import * as React from "react";
import "./styles.css";

export type UpdaptInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: any;
  className?: string;
};

export function UpdaptInput({ type, className, ...rest }: UpdaptInputProp) {
  return (
    <>
      <input {...rest} className={className ?? "input"} type={type} />
    </>
  );
}
