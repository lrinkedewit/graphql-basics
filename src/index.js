import { GraphQLServer} from 'graphql-yoga';

// Type definitions, application schema
const typeDefs = `
  type Query {
    add(numbers: [Float!]!): Float!
  }
`

// Resolvers
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0
      }

      return args.numbers.reduce((a,b) => a + b)
    }
  }
}

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.start(() => {
  console.log(`The server is running.`)
})