import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class FindProductController {
    async handle(request: Request, response: Response){
        const { id } = request.params;

        // const product = await prismaClient.product.findFirst({
        //     where: {
        //         id,   
        //     },
        //     include: {ProductCategory: true },
        //}
        const product = await prismaClient.$queryRaw`select * from products where id = ${id}`;
        return response.json(product);
    }
}

export { FindProductController };