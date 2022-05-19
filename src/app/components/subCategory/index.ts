import express, { Express } from "express";
import router from "./subCategory.network"

const subCategory: Express = express();
subCategory.use('/subCategory', router);

export default subCategory;
