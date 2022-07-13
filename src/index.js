import { GraphQLServer} from 'graphql-yoga';

// Demo user data
const users = [{
  id: '1',
  name: 'Leonoor',
  email: 'leonoor@example.com',
  age: 27
}, {
  id: '2',
  name: 'Sara',
  email: 'sara@example.com'
}, {
  id: '3',
  name: 'Mike',
  email: 'mike@example.com'

}]

// Type definitions, application schema
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    me: User!
    post: Post!
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
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase())
      })
    },
    me() {
      return {
        id: '123ABC',
        name: 'Leonoor Test',
        email: 'leonoor@testable.com'
      }
    },
    post() {
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