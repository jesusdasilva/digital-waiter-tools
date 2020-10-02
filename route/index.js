const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.send('prueba')
})

router.get('/user',(req,res)=> {
    res.send({
        userName: 'Jesus Manuel',
        lastName: 'Dasilva Barreto'
    })
})

module.exports = router