var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(/* GraphQL */`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`)

const randomDie = function (numSides) {
  const rollOnce = () => {
    return 1 + Math.floor(Math.random() * numSides)
  };
  return {
    numSides,
    rollOnce,
    roll: ({ numRolls }) => {
      var output = []
      for (var i = 0; i < numRolls; i++) {
        output.push(rollOnce())
      }
      return output
    }
  };
};
 
// The root provides a resolver function for each API endpoint
var root = {
  getDie({ numSides }) {
    return randomDie(numSides)
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