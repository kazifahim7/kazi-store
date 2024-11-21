import { Product } from './product.interface';
import { ProductModel } from './product.model';

const saveProductInDB = async (data: Product) => {
  const result = await ProductModel.create(data);
  return result;
};


const getAllProduct=async()=>{
  const result= await ProductModel.find()
  return result
}
const getProductByID=async(id:string)=>{
  const result= await ProductModel.findById(id)
  return result
}

export const productServices = {
  saveProductInDB,
  getAllProduct,
  getProductByID
};
