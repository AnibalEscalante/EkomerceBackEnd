import { Feature } from "./feature.model";

export interface Product{
    id: string;
    code?:string;
    brand: string;
    description: string;
    price: string;
    image: string;
    discount: string;
    features: string[]; ///tipo Feature///
    updatedAt?: Date;
    createdAt?: Date;
}