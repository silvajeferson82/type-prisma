import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

class  CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, bar_code, price } = request.body;

        const product = await prismaClient.product.create({
            data: {
                bar_code,
                name,
                price,
            }
        })

        return response.json(product);
    }
}

export { CreateProductController };