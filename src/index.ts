import Fastify from "fastify"

const fastify = Fastify({
    logger:true

})

fastify.get('/', (request, reply)=>{
    reply.send({message:"Helo word"})
})

fastify.listen({port:3000},(err,address)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    console.log("Aplicação rodando igual um foguete")
})

console.log("HELLO WORD");