import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    btnType?:'submit' | 'reset' | 'button' | undefined;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}