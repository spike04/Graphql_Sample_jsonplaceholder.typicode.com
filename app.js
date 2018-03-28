const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const typeDefs = `
  type Query {
    hello(name: String): String!
    getPosts(id: Int): Post
    getUser(userId: Int): User
  }

  type User {
    id: Int,
    name: String
    username: String
    email: String
    phone: String
    website: String
    posts: [Post]
  }

  type Post {
    userId: User
    id: Int
    title: String
    body: String        
  }
`

const resolvers = {
    User: {
        posts: async parent => {
            const response = await fetch(
                `http://jsonplaceholder.typicode.com/posts?userId=${parent.id}`
            )
            return response.json()
        }
    },
    Post: {
        userId: async parent => {
            const reponse = await fetch(
                `http://jsonplaceholder.typicode.com/users/${parent.userId}`
            )
            return reponse.json()
        }
    },
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
        getPosts: async (_, { id }) => {
            const response = await fetch(
                `http://jsonplaceholder.typicode.com/posts/${id}`
            )
            return response.json()
        },
        getUser: async (_, { userId }) => {
            const response = await fetch(
                `http://jsonplaceholder.typicode.com/users/${userId}`
            )
            return response.json()
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))
