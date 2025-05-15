import express from 'express';
import 'express-async-error';
import cors from 'cors';
import env from './config/env';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(env.SERVER_PORT, () => {
  console.log("🚀 - Server is running on port:", env.SERVER_PORT)
  
})
