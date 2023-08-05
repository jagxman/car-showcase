import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    btnType?:'submit' | 'reset' | 'button' | undefined;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}


export interface FilterProps{
    title?: string;
}


export interface ManufacturerProps{
    manufacturer:string;
    setManufacturer: (manufacturer: string) => void;

}