import express, { Request, Response, Router } from "express";
import { Distribution } from "../../models/distribution.model";
import response from "../../modules/reponse.module";
import controller from "./distribution.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Distribution[] = await controller.getDistributions();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Distribution | null = await controller.getDistribution(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const distribution: Distribution = req.body;
  
  try {
    const result: Distribution = await controller.addDistribution(distribution);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const distribution: Partial<Distribution> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Distribution | null = await controller.updateDistribution(id, distribution);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Distribution | null = await controller.deleteDistribution(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;