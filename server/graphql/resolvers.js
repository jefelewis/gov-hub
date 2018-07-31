// Imports: Axios
import axios from 'axios';

// Imports: Node.js File System
import fs from 'fs';

// Imports: API Key



// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    test: (parent, args) => {
      return axios.get(``)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
};

// Exports
export default RESOLVERS;