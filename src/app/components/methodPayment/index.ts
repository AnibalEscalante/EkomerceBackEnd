import express, { Express } from "express";
import router from "./methodPayment.network"

const methodPayment: Express = express();
methodPayment.use('/methodPayment', router);

export default methodPayment;
