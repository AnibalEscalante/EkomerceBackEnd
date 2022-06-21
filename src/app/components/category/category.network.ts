import express, { Request, Response, Router } from "express";
import { Category } from "../../models/category.model";
import response from "../../modules/reponse.module";
import controller from "./category.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Category[] = await controller.getCategories();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/all/name', async (req: Request, res: Response) => {
  try {
    const result: Category[] | null = await controller.getCategoriesName();
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
    const result: Category | null = await controller.getCategory(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const category: Category = req.body;
  
  try {
    const result: Category = await controller.addCategory(category);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const category: Partial<Category> = req.body;
  const id: string = req.params['id'];

  try {
    const result: Category | null = await controller.updateCategory(id, category);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/name/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];
  try {
    const result: any | null = await controller.getCategoryName(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:name', async (req: Request, res: Response) => {
  const name: string = req.params['name'];
  try {
    const result: Category[] | null = await controller.getAllProductCategoryName(name);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: Category | null = await controller.deleteCategory(id);
    response.success(req, res, result, 200);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});


export default router;