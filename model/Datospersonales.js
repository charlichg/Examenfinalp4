//Aqui  define el esquema para el modelo de datos de "Productos" utilizando la biblioteca Mongoose de MongoDB.
const mongoose = require( 'mongoose')
const Schema = mongoose.Schema


const personalesSchema = new Schema ({
    
    nombre: String,
    apellido: String,
    telefono: Number,
    email: String,
    Título: String,
    Institución: String,
    empresa: String,
    fecha: String,


}, {versionKey:false})//El versionKey se establece en falso para que no se agregue un campo "__v" al documento.

module.exports = mongoose.model('datospersonales',personalesSchema)