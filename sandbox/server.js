const express = require('express')
const app = express() // aliasing
const morgan = require('morgan')

// constants
const PORT = 5000;

const arrayEx = [{}, {}]

// application level middleware
app.use(express.json())
app.use(morgan('dev'))

// routes
app.get('/home', (err, req, res, next) => {
     if (req) {
          // ...do code like normal
     } else {
          next(err)
     }
}) // 


// GET ALL
app.get('/home', (req, res, next) => {
     console.log('second')
     // res.status(200).send('goodbye nodemon')
}) // 

// error handling
function errorHandler(err, req, res, next) {
     if (res.headersSent) {
          return next(err)
     }
     res.status(500)
     res.render('error', { error: err })
}

// server startup logic
app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
})