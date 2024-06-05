import { join } from 'node:path'
import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import express from "express"
import { createHandler } from "graphql-http/lib/use/express"
import expressPlayground from "graphql-playground-middleware-express"

import users from './handlers/users'
import resolvers from './resolvers'

async function main() {
    const schema = await loadSchema(join(__dirname, './schema.graphql'), {
        loaders: [new GraphQLFileLoader()]
    })
    
    const schemaWithResolvers = addResolversToSchema({ schema, resolvers })
    
    const app = express()
    
    app.get(
        '/playground',
        expressPlayground({
            endpoint: '/graphql',
        }),
    )
    
    app.use(
        "/graphql",
        createHandler({
            schema: schemaWithResolvers,
            rootValue: {
                ...users
            },
        })
    )
    
    const PORT = 4000
    
    app.listen(PORT, () => {
        console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)
    });
}

main();