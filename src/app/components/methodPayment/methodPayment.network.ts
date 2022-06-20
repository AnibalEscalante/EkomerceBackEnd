import express, { Request, Response, Router } from "express";
import { MethodPayment } from "../../models/methodPayment.model";
import response from "../../modules/reponse.module";
import controller from "./methodPayment.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: MethodPayment[] = await controller.getMethodsPayment();
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
    const result: MethodPayment | null = await controller.getMethodPayment(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const methodPayment: MethodPayment = req.body;
  
  try {
    const result: MethodPayment = await controller.addMethodPayment(methodPayment);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const methodPayment: Partial<MethodPayment> = req.body;
  const id: string = req.params['id'];

  try {
    const result: MethodPayment | null = await controller.updateMethodPayment(id, methodPayment);
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
    const result: MethodPayment | null = await controller.deleteMethodPayment(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;