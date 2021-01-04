const express = require('express') 
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
dotenv.config()
const app = express()
const port = process.env.PORT || 1337

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
const R = require('./graphql/graphql')

app.use('/r', R)

app.use(express.static(path.resolve(__dirname, '../front/public')))

app.listen(port, () => { 
    console.log(`GraphQL server running at http://localhost:${port}.`) 
}) 