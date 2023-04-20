//Aqui se define un router de Express para manejar las solicitudes de datos personales
const { Router } = require('express')
const  express = require('express')
const router = express.Router()
//definen cuatro rutas para manejar las solicitudes HTTP GET y POST:
const laboralcontroller = require('../controllers/laboralcontroller')

// Mostar todos los datos (Get)

router.get('/', laboralcontroller.mostrar)

//Crear producto (POST)
router.post('/crear',laboralcontroller.crear)

//Editar productos (POST)
router.post('/editar',laboralcontroller.editar)

//Eliminar productos (GET)
router.get('/borrar/:id', laboralcontroller.borrar)

module.exports = router