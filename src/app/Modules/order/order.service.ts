import { ProductModel } from '../product/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderInDB = async (value: Order) => {
  const result = await OrderModel.create(value);
  const product = await ProductModel.findById(value.product);

  if (result) {
    await ProductModel.findByIdAndUpdate(
      value.product,
      {
        $inc: { quantity: -value.quantity },
        inStock: product?.quantity === 0 ? true : false,
      },
      { new: true },
    );
  }

  return result;
};

export const orderServices = {
  createOrderInDB,
};
