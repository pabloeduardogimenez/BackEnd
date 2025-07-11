import Fastify from "fastify"

const fastify = Fastify({
    logger:true

})

fastify.get('/', (request, reply)=>{
       reply.send({message: "Hello World"})
})

fastify.listen({port: 3000}, (err, address)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    console.log("Aplicação rodando que nem um foguete! ✔")
})