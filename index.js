const express = require("express")
const morgan = require("morgan")

const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Setting

// Routhes

app.get('/user',(req,res)=> {
    res.send({
        userName: 'Jesus Manuel',
        lastName: 'Dasilva Barreto'
    })
})

app.listen(3000, () => {
    console.log("Server on port 3000");
})
