var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")

var fakeDatabase = {}
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(/* GraphQL */`
  input MessageInput {
    content: String
    author: String
  }
  
  type Message {
    id: ID!
    content: String
    author: String
  }
  
  type Query {
    getMessage(id: ID!): Message
  }
  
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`)
 
// The root provides a resolver function for each API endpoint
var root = {
  getMessage({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    return { id, ...fakeDatabase[id] }
  },
  createMessage({ input }) {
    // Create a random id for our "database".
    var id = require("crypto").randomBytes(10).toString("hex")
 
    fakeDatabase[id] = input
  
    return { id, ...input }
  },
  updateMessage({ id, input }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input
    
    return { id, ...input }
  },
}
 
var app = express()
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at localhost:4000/graphql")