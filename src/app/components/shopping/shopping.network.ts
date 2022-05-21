import express, { Request, Response, Router } from "express";
import { Shopping } from "../../models/shopping.model";
import response from "../../modules/reponse.module";
import controller from "./shopping.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Shopping[] = await controller.getShoppings();
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
    const result: Shopping | null = await controller.getShopping(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const shopping: Shopping = req.body;
  
  try {
    const result: Shopping = await controller.addShopping(shopping);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const shopping: Partial<Shopping> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Shopping | null = await controller.updateShopping(id, shopping);
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
    const result: Shopping | null = await controller.deleteShopping(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;