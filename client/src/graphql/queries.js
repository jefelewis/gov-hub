// Imports: Apollo
import { gql } from 'apollo-boost';

// Query: Retrieve a single book
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      id
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

// Query: Retrieve all Books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

// Query: Retrieve all Authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// Mutation: Add Book
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

// Exports
export { 
  getBookQuery,
  getBooksQuery,
  getAuthorsQuery,
  addBookMutation
};