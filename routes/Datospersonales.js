//Aqui se define un router de Express para manejar las solicitudes de datos personales
const { Router } = require('express')
const  express = require('express')
const router = express.Router()
//definen cuatro rutas para manejar las solicitudes HTTP GET y POST:
const datospersonalescontroller = require('../controllers/datospersonalescontroller')

// Mostar todos los datos (Get)

router.get('/', datospersonalescontroller.mostrar)

//Crear producto (POST)
router.post('/crear',datospersonalescontroller.crear)

//Editar productos (POST)
router.post('/editar',datospersonalescontroller.editar)

//Eliminar productos (GET)
router.get('/borrar/:id', datospersonalescontroller.borrar)

module.exports = router
