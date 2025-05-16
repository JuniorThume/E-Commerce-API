import 'reflect-metadata';
import express from 'express';
import 'express-async-error';
import { errors } from 'celebrate';
import cors from 'cors';
import initialize from './config/initialize';


export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

initialize();

app.use(errors());
