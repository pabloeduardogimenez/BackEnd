import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require:true,
    },
    avatar: {
        type: String,
        require:true,
    },
    address:{
        city: {
        type: String,
        require:true,
        },
        state: {
        type: String,
        require:true,
        },
    }
})
/* Criar schemas no banco de Mongo Caso Não Existe na Base da Dados "user" */
export const User = mongoose.model("User", userSchema);