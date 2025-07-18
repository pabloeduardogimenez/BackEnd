import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    description: {
        type: String,
        require:true,
        unique : true,
    },
    price: {
        type: Number,      
    },
    category: {
        type: String,
        require:true,       
    },
    createdAt: {
		type: Date,
		required: true,
		default: Date.now, // O campo "createdAt" será preenchido com a data atual por padrão
	},    
})
/* Criar schemas no banco de Mongo Caso Não Existe na Base da Dados "user" */
export const Product = mongoose.model("Product", productSchema);