import { Request, Response } from 'express';
import config from '../../config';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const value = req.body;

    const result = await productServices.saveProductInDB(value);

    res.status(200).json({
      message: 'Product created successfully',
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


const getAllProduct = async (req: Request, res: Response)=>{
  try {
    

    const result = await productServices.getAllProduct();

    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
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


}
const getProductByID = async (req: Request, res: Response)=>{
  try {

    const value = req.params.productId
    

    const result = await productServices.getProductByID(value);

    res.status(200).json({
      message: 'Products retrieved successfully',
      status: true,
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


}
const updateProductByID = async (req: Request, res: Response)=>{
  try {

    const value = req.params.productId ;
    const data = req.body;
    

    const result = await productServices.updateProductByID(value,data);

    res.status(200).json({
      message: 'Product updated successfully',
      status: true,
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


}
const deleteProductByID = async (req: Request, res: Response)=>{
  try {

    const value = req.params.productId ;
    
    

     await productServices.deleteProductByID(value);

    res.status(200).json({
      message: 'Product deleted successfully',
      status: true,
      data:{},
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


}





export const productController = {
  createProduct,
  getAllProduct,
  getProductByID,
  updateProductByID,
  deleteProductByID
};
