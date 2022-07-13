import { GraphQLServer} from 'graphql-yoga';

// Type definitions, application schema
const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!

  }
`

// Resolvers
const resolvers = {
  Query: {
    title() {
      return 'Leo, Trav, and their two cats';
    },
    price() {
      return 7.99;
    },
    releaseYear() {
      return 2021;
    },
    rating() {
      return 4.89;
    },
    inStock() {
      return true;
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