import * as React from 'react';

interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
declare function Button({ label, onClick }: ButtonProps): React.JSX.Element;

export { Button, ButtonProps };
