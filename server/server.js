// Imports: Express
import express from 'express';
const APP = express();

// Imports: GraphQL
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import SCHEMA from './graphql/schema.js';

// Imports: Mongoose
import mongoose from 'mongoose';
import mongoURI from '../config/mongo-uri.js';

// Imports: Middleware
import bodyParser from 'body-parser';
import cors from 'cors';


// Database: Connection
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true },
  // Error Handling
  (err) => {
    if(err) {
      console.log(`Unable to connect to the Database. Error: ${err}`);
    }
    else {
      console.log(`Connected to Database.`);
    }
  }
);


// Middleware: CORS
APP.use(cors());

// Middleware: GraphQL Endpoint
APP.use(
  `/graphql`,
  bodyParser.json(),
  graphqlExpress({ schema: SCHEMA })
);

// Middleware: Graphiql Visualizer
APP.use(
  `/graphiql`,
  graphiqlExpress({ endpointURL: `/graphql` })
);


// Use: Static Files



// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`)
  console.log(`http://localhost:${PORT}/graphql`)
});


// Exports
export default APP;