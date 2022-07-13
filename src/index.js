import { GraphQLServer} from 'graphql-yoga';

// Type definitions, application schema
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query.';
    },
    name() {
      return 'Leonoor';
    },
    location() {
      return 'The Hague';
    },
    bio() {
      return `Hi, this is my bio`;
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