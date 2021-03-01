
const {graphqlHTTP} = require('express-graphql')
const express = require('express') // import express
const bodyParser = require('body-parser') // import body-parser
const graphqlHttp = require('express-graphql') // import graphql to use as middleware
const { buildSchema } = require('graphql') // import the function to build our schema
const mongoose = require('mongoose') // impor the mongoose drivers
const graphQlSchema = require('./schema/movieSchema')
const graphQlResolvers = require('./resolvers/resolvers')
const cors = require('cors')

const app = express() // create express server

app.use(cors());
app.use(bodyParser.json()) // use body-parser middleware to parse incoming json

app.use('/graphql', graphqlHTTP({
     // set up our graphql endpoint with the express-graphql middleware
    // build a graphql schema
    schema:graphQlSchema,
    rootValue:graphQlResolvers,
    graphiql: true // enable the graphiql interface to test our queries
}))

// connect to our MongoDB server.
mongoose.connect(`mongodb+srv://admin:sachin@cluster0.xjexi.mongodb.net/movielib?retryWrites=true&w=majority`
).then(() => {

    app.listen(9000) // setup server to run on port 5000

}).catch(err => {
    console.log(err)
})
