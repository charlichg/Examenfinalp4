//Aqui se define un router de Express para manejar las solicitudes de datos personales
const { Router } = require('express')
const  express = require('express')
const router = express.Router()
//definen cuatro rutas para manejar las solicitudes HTTP GET y POST:
const Estudioscontroller = require('../controllers/Estudioscontroller')

// Mostar todos los datos (Get)

router.get('/', Estudioscontroller.mostrar)

//Crear producto (POST)
router.post('/crear',Estudioscontroller.crear)

//Editar productos (POST)
router.post('/editar',Estudioscontroller.editar)

//Eliminar productos (GET)
router.get('/borrar/:id', Estudioscontroller.borrar)

module.exports = router