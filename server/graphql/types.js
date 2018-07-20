// Imports: GraphQL Resolvers
import RESOLVERS from './resolvers';


// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    book(id: ID): Book
    books: [Book]
    author(id: ID): Author
    authors: [Author]
  }

  type Mutation {
    addAuthor(name: String!, age: Int!): Author 
    addBook(name: String!, genre: String!, authorId: ID!): Book
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
    authorId: ID!
    books: [Book!]
  }
`


// Exports
export default TYPEDEFS;