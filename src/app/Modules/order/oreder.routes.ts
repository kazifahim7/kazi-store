import express from 'express';
import { orderController } from './order.controler';

const router = express.Router();

router.post('/orders', orderController.createOrder);

export const orderRoutes = router;
