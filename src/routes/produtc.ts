import type { FastifyInstance } from "fastify";
import { Product } from "../model/productSchema";

export default async function usersRoutes(fastify: FastifyInstance) {
    fastify.get("/", async (request, reply) => {
        try{

        } catch (error){
            
        }

        const listProduts = await Product.find();
        reply.code(200);
        return listProduts; 
        //reply.send({ message: "Resposta de produtos" });
    });
    fastify.get("/", async (request, reply) => {




        reply.send({ message: "Resposta de produtos" });
    });
}
