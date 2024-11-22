import express from 'express';
import { orderController } from './order.controler';

const router = express.Router();

//Order a Stationery Product
router.post('/orders', orderController.createOrder);


//Calculate Revenue from Orders (Aggregation)

router.get("/orders/revenue",orderController.getTotalRevenue)


export const orderRoutes = router;
