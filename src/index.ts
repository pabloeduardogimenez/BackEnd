import Fastify from "fastify"
import usersRoutes from "./routes/users.ts";
import customersRoutes from "./routes/customers.ts";
import { connectDatabase } from "./config/databese.ts";
import productsRoutes from "./routes/products.ts";
import customerProductsRoutes from "./routes/customer-products.ts";
import authRoutes from "./routes/auth.ts";

async function start() {  
const fastify = Fastify({
    logger:true,
     ajv:{
        customOptions:{
            coerceTypes:false,        }
    }   
});

fastify.register(usersRoutes, { prefix: "/users" });
fastify.register(authRoutes, { prefix: "/auth" });
fastify.register(customerProductsRoutes, { prefix: "/customer-products" });
fastify.register(customersRoutes, { prefix: "/customers" });
fastify.register(productsRoutes, { prefix: "/products" });

await connectDatabase();

	const port = process.env.PORT || 4500;
	const host = process.env.HOST || '0.0.0.0';

fastify.listen({ port: Number(port), host }, (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	console.log("Aplicação rodando que nem um foguete! ✔");
})
}
start().catch((err) => {
    console.error("Erro ao iniciar a aplicação", err);
	process.exit(1);
})