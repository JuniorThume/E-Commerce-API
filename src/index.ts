import 'reflect-metadata';
import express from 'express';
import 'express-async-error';
import '@config/container';
import { errors } from 'celebrate';
import cors from 'cors';
import initialize from './config/initialize';
import productsRouter from '@products/infra/http/routes/products.route';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api', productsRouter);

initialize();

app.use(errors());

export default app;
