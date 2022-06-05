import express, { Request, Response, Router } from "express";
import { Address } from "../../models/address.model";
import { Auth } from "../../models/auth.model";
import { Distribution } from "../../models/distribution.model";
import { MethodPayment } from "../../models/methodPayment.model";
import { Shopping } from "../../models/shopping.model";
import { User } from "../../models/user.model";
import response from "../../modules/reponse.module";
import controller from "./user.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: User[] = await controller.getUsers();
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
    const result: any | null = await controller.getUser(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const user: Partial<User & Auth> = req.body;
  const id: string = req.params['id'];

  try {
    const result: any | null = await controller.updateUser(id, user);
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
    const result: User | null = await controller.deleteUser(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

///////////////////////////////////////////// Address on User /////////////////////////////////////////////

router.post('/:id/address', async (req: Request, res: Response) => {
  const address: Address = req.body;
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.addAddresOnUser(address, id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/myAddress', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.getMyAddress(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id/address', async (req: Request, res: Response) => {
  const idUser: string = req.params['id'];
  const idAddress: string = req.body;

  try {
    const result: Address | null = await controller.deleteAddressOnUser(idUser, idAddress);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Shopping on User ////////////////////////////////////////////

router.post('/:id/shopping', async (req: Request, res: Response) => {
  const shopping: Shopping = req.body.Shopping;
  const distributions: Distribution[] = req.body.distributions;
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.addShoppingOnUser(shopping, distributions, id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/myShoppins', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.getMyShoppings(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////// Basket on User /////////////////////////////////////////////

router.post('/:id/basket', async (req: Request, res: Response) => {
  const distribution: Distribution = req.body;
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.addDistributionOnMyBasket(distribution, id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/myBasket', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.getMyBasket(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id/basket', async (req: Request, res: Response) => {
  const idUser: string = req.params['id'];
  const idDistribution: string = req.body;

  try {
    const result: Distribution | null = await controller.deleteDistributionOnMyBasket(idUser, idDistribution);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// MethodPayment on User /////////////////////////////////////////

router.post('/:id/methodPayment', async (req: Request, res: Response) => {
  const methodPayment: MethodPayment = req.body;
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.addMethodPaymentOnUser(methodPayment, id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.get('/:id/myMethodPayment', async (req: Request, res: Response) => {
  const id: string = req.params['id'];

  try {
    const result: any[] | null = await controller.getMyMethodPayment(id);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.delete('/:id/methodPayment', async (req: Request, res: Response) => {
  const idUser: string = req.params['id'];
  const idMethodPayment: string = req.body;

  try {
    const result: MethodPayment | null = await controller.deleteMethodPaymentOnUser(idUser, idMethodPayment);
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export default router;