import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { container, } from "tsyringe";


const productController = new ProductController();
const router = Router();

router.get('/products', productController.list)

export default router;
