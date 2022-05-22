import express, { Express } from "express";
import router from "./address.network"

const address: Express = express();
address.use('/address', router);

export default address;
