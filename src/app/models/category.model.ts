import { Product } from "./product.model";

export interface Category{
    _id: string | number;
    name: string;
    products?: Product[];
    categories?: Category[];
    updatedAt?: Date;
    createdAt?: Date;
}