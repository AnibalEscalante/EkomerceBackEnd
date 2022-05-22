import express, { Express } from "express";
import router from "./distribution.network"

const distribution: Express = express();
distribution.use('/distribution', router);

export default distribution;
