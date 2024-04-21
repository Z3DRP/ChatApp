import React, { MouseEvent } from 'react';

interface ButtonProps {
    btnName: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ btnName, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}>{btnName}</button>
    );
}

export default Button;