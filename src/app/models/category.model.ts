export interface Category{
    _id: string;
    name: string;
    subCategories: string[];//tipo category
    updatedAt?: Date;
    createdAt?: Date;
}