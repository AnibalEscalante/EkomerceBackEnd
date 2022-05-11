import { Product } from "./product.model";

export interface Category{
    _id: string | number;
    name: string;
    products: String[]; //Tipo product
    categories: String[];//tipo category
    updatedAt?: Date;
    createdAt?: Date;
}