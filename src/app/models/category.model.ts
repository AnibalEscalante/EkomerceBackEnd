export interface Category{
    _id: string;
    name: string;
    subCategories: String[];//tipo category
    updatedAt?: Date;
    createdAt?: Date;
}