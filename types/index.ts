import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    btnType?:'submit' | 'reset' | 'button' | undefined;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}


export interface FilterProps{
    manufacturer?:string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
  }



export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}


export interface ManufacturerProps{
    manufacturer:string;
    setManufacturer: (manufacturer: string) => void;

}

export interface OptionProps{
    title: string;
    value: string;
}

export interface customFilterProps{
    title:string;
    options: OptionProps[];
}


export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}