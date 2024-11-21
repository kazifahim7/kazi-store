import express from 'express';
import { productController } from './product.controler';

const router = express.Router();

//1. Create a Stationery Product
router.post('/products', productController.createProduct);

//2. Get All Stationery Products
router.get('/products', productController.getAllProduct);

//3. Get a Specific Stationery Product
router.get('/products/:productId', productController.getProductByID);


export const productRouter = router;
