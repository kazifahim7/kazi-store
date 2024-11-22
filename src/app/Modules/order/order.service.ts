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



const totalRevenue = async () => {
  const result = await OrderModel.aggregate([
    // stage-1
    {$group:{
      _id:null,
      totalRevenue: { $sum:"$totalPrice"}
    }},

    // stage-2
    {$project:{totalRevenue:1, _id:0}}

  ])

  return result
}





export const orderServices = {
  createOrderInDB,
  totalRevenue
};
