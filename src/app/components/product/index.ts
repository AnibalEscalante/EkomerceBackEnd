import express, { Express } from "express";
import router from "./product.network"

const product: Express = express();
product.use('/product', router);

export default product;
