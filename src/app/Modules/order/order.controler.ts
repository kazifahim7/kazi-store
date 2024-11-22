import { ProductModel } from './../product/product.model';
import { Request, Response } from 'express';
import config from '../../config';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const value = req.body;

    // find product by id

    const product = await ProductModel.findById(value.product);
    if (!product) {
         res.status(404).json({
            success: false,
            message: "Product not found",
        });
    } else if (product.quantity < value.quantity || product.inStock === false) {
      throw new Error('insufficient stock');
    }

    // value.totalPrice = product.price * value.quantity

    const result = await orderServices.createOrderInDB(value);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Something went wrong',
      success: false,
      error: error.details || error.name,
      stack: config.node_env === 'development' ? error.stack : undefined,
    });
  }
};

export const orderController = {
  createOrder,
};
