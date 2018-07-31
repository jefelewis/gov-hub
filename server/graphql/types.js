// Imports: GraphQL
import { gql } from 'apollo-server-express';


// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    test: String
  }
`;


// Exports
export default TYPEDEFS;