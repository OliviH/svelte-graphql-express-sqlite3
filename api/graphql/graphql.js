const express = require('express')
const { graphqlHTTP } = require('express-graphql') 
const { schemaPost } = require('../posts/postController')

const route = express.Router()

route.use('/graphql', graphqlHTTP({ schema: schemaPost, graphiql: true })) 


module.exports = route