import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { productRouter } from './app/Modules/product/product.route';
import { orderRoutes } from './app/Modules/order/oreder.routes';

// parser
app.use(express.json());
app.use(cors());
//application routes

app.use('/api', productRouter);
app.use('/api', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to kazi store ');
});

export default app;
