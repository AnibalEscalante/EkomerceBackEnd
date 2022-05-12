import { Express } from "express";
import feature from "./feature";
import category from "./category";
import product from "./product";
import user from "./user";

const components: Express[] = [
    feature,
    category,
    product,
    user
];

export default components