import mongoose from 'mongoose';
import "dotenv/config";


export async function connectDatabase(){
    try {
        const mongoUri =
			process.env.MONGODB_URI || "mongodb://localhost:27017/CURSOBACKEND";
		console.log("Tentando conectar ao MongoDB...");
            await mongoose.connect(mongoUri)
            console.log('❤ Mongo DB conectado com sucesso!');
        

        mongoose.connection.on('error', (error)=>{
            console.log('Erro de conexão com o Mongo!', error)
        })

        mongoose.connection.on('disconnected', ()=>{
            console.log('Mongo foi desconectado!')
        })

        process.on('SIGINT', async ()=>{
            await mongoose.connection.close()
            console.log("Conexão com o Mongo fechada!")
            process.exit(0)
        })
        

        
    } catch (error) {
           console.log("Conexão com o Mongo MongoDB!",error)
            process.exit(1)
    }
}