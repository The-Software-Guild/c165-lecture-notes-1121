const express = require('express')
const app = express()
const morgan = require('morgan')

// constants
const PORT = 5000;


// application level middleware
app.use(express.json())
app.use(morgan('dev'))


// :wildcard = propertyValue
https://www.example.com/routePath/wildCardPlaceholder
// req.params = wildCardPlaceholder

// routes
app.get('/home/:wildCard', (req, res, next) => {
     // req.params = :wildcard
     // req.params = ' an idea i will want to use to filter, or interact with or delte'
}) // 



// server startup logic
app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
})