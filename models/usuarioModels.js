import mongoose from "mongoose";


const tipo = ["Administrador", "Docente", "Acudiente"];

const UsuarioSchema = mongoose.Schema({
    nombre: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true, unique: true},
    password:{ type: String, required: true, trim: true},
    tipoUsuario:{ type: String, required: true, enum:tipo }, 
    estado:{default: "true", type:Boolean, required:true, trim:true},   
    registro: { type: Date, default: Date.now()},
});
//definir el modelo
export default mongoose.model("Usuario", UsuarioSchema)

