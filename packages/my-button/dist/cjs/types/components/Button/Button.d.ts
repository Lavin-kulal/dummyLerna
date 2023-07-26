import * as React from "react";
export interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare function Button({ label, onClick }: ButtonProps): React.JSX.Element;
