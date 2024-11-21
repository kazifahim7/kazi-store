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
const updateProductByID=async(id:string,data:Record<string,unknown>)=>{
  const result= await ProductModel.findByIdAndUpdate(id,data,{new:true})
  return result
}
const deleteProductByID = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id,{new:true})
  return result
}

export const productServices = {
  saveProductInDB,
  getAllProduct,
  getProductByID,
  updateProductByID,
  deleteProductByID
};
