import { GraphQLServer} from 'graphql-yoga';

// Type definitions, application schema
const typeDefs = `
  type Query {
    me: User!
    post1: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: '123ABC',
        name: 'Leonoor Test',
        email: 'leonoor@testable.com'
      }
    },
    post1() {
      return {
        id: '456DEF',
        title: 'This is my title',
        body: 'This is the contents of my post.',
        published: false
      }
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