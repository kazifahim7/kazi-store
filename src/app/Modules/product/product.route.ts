import express from 'express';
import { productController } from './product.controler';

const router = express.Router();

//1. Create a Stationery Product
router.post('/products', productController.createProduct);

//2. Get All Stationery Products
router.get('/products', productController.getAllProduct);

//3. Get a Specific Stationery Product
router.get('/products/:productId', productController.getProductByID);

//4. Update a Stationery Product
router.put('/products/:productId', productController.updateProductByID);

// 5. Delete a Stationery Product

router.delete('/products/:productId', productController.deleteProductByID);

export const productRouter = router;
