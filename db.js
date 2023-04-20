// Aqui se establece la conexión con la base de datos MongoDB usando Mongoose. 
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/registrohojadevida'

mongoose.connect(url, {// se llama al método connect() de Mongoose, que toma la URL y algunas opciones de configuración. 
useNewUrlParser: true,
useUnifiedTopology: true,
//useFindAndModify: false,
//useCreateIndex: true

})

const db = mongoose.connection
db.on('error',console. error.bind ( console, 'Error al conectar MongoDB'))
db.once( 'open', function callback() {
    console.log("¡Conectado a MongoDB!")

})

module.exports = db