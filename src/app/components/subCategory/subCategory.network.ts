import express, { Request, Response, Router } from "express";
import { SubCategory } from "../../models/SubCategory.model";
import response from "../../modules/reponse.module";
import controller from "./subCategory.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: SubCategory[] = await controller.getSubCategories();
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
    const result: SubCategory | null = await controller.getSubCategory(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const SubCategory: SubCategory = req.body;
  
  try {
    const result: SubCategory = await controller.addSubCategory(SubCategory);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const SubCategory: Partial<SubCategory> = req.body;
  const id: string = req.params['id'];

  try {
    const result: SubCategory | null = await controller.updateSubCategory(id, SubCategory);
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
    const result: SubCategory | null = await controller.deleteSubCategory(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;