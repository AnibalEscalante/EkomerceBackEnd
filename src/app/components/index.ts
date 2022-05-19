import { Express } from "express";
import feature from "./feature";
import category from "./category";
import product from "./product";
import user from "./user";
import subCategory from "./subCategory";

const components: Express[] = [
    feature,
    category,
    subCategory,
    product,
    user
];

export default components