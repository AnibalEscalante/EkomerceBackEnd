import express, { Express } from "express";
import router from "./shopping.network"

const shopping: Express = express();
shopping.use('/shopping', router);

export default shopping;
