// plugins/graphql-client.ts
import { GraphQLClient } from 'graphql-request'

export default defineNuxtPlugin(() => {
    const client = new GraphQLClient('/api/graphql') // Simulated endpoint
    return {
        provide: {
            graphql: client
        }
    }
})
