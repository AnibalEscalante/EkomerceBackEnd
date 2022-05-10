import { Express } from "express";
import feature from "./feature";
import category from "./category";
import product from "./product";

const components: Express[] = [
    feature,
    category,
    product
];

export default components