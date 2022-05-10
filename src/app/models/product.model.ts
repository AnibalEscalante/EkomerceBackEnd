import { Feature } from "./feature.model";

export interface Product{
    id: string;
    code?:string;
    brand: string;
    description: string;
    price: string;
    image: string;
    discount?: string;
    features?: Feature[];
    updatedAt?: Date;
    createdAt?: Date;
}