const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(morgan('dev'))

// SETTING

// ROUTES

//



app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
})

app.get('/', function (req, res) {
    res.send('Saludos desde express')
})

app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});