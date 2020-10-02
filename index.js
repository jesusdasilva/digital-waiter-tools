const express = require("express")
const morgan = require("morgan")

const app = express()

// Require routes
const route = require('./route')

// Settings
app.set('appName', 'Digital Waiter Tools')
app.set('port', 3000)


// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Rotes
app.use('/api',route)

app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log('Server on port', app.get('port') );
})
