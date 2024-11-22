import { Schema, model } from 'mongoose';
import { Order } from './order.interface';
import validator from 'validator';

//  Create a Schema corresponding to the document interface.
const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'email field is required'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not valid',
      },
    },
    product: { type: String, required: [true, 'Product field is required'] },
    quantity: { type: Number, required: [true, 'Quantity field is required'] },
    totalPrice: {
      type: Number,
      required: [true, 'TotalPrice field is required'],
    },
  },
  {
    timestamps: true,
  },
);

// order model created
export const OrderModel = model<Order>('order', orderSchema);
