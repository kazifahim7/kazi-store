import express from 'express'
import { productController } from './product.controler';


const router = express.Router()

router.post('/products',productController.createProduct)



export const productRouter = router ;