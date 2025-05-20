import ListProductService from "@products/services/ListProductService";
import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { container } from 'tsyringe';

export class ProductController {
    public async list(request: Request, response: Response) {
      const listProductsService = container.resolve(ListProductService);

      const products = await listProductsService.execute();

      response.status(200).json(instanceToInstance(products))
      return
    }
}
