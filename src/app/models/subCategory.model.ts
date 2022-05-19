export interface SubCategory{
    _id: string;
    name: string;
    products: String[]; //Tipo product
    updatedAt?: Date;
    createdAt?: Date;
}