// Imports: Axios
import axios from 'axios';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    sampleFunction: (parent, args) => {
      return axios.get(``)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
}

// Exports
export default RESOLVERS;