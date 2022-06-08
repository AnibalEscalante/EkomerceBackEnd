export interface Product{
  id?: string;
  code: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  features: string[];
  updatedAt?: Date;
  createdAt?: Date;
}