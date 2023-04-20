//Aqui  define el esquema para el modelo de datos de "Productos" utilizando la biblioteca Mongoose de MongoDB.
const mongoose = require( 'mongoose')
const Schema = mongoose.Schema


const estudiosSchema = new Schema ({
    
    Título: String,
    Institución: String,
    Fecha: Date,


}, {versionKey:false})//El versionKey se establece en falso para que no se agregue un campo "__v" al documento.

module.exports = mongoose.model('Estudios',estudiosSchema)