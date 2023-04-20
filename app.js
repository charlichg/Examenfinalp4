const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const datospersonales= require('./routes/datospersonales')
const estudios = require('./routes/Estudios')
const laboral = require('./routes/laboral')

app.use(datospersonales)
app.use(estudios)
app.use(laboral)

app.get('/',(req, res)=>{
    res.send('hola mundo')
})

app.listen(3000,() => {//se inicia escuchando en el puerto 3000.
    console.log('¡Server UP!  en http://localhost:3000')
})
