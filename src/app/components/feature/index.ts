import express, { Express } from "express";
import router from "./feature.network"

const feature: Express = express();
feature.use('/feature', router);

export default feature;
