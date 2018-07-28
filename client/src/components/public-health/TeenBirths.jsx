// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql, compose } from 'react-apollo';

// Imports: Axios
import axios from 'axios';

// Imports: Apollo Queries


// Component: TeenBirths
class TeenBirths extends Component {

  constructor(props) {
    super(props);

    this.state = {
      TeenBirths: [] || {}
    };
  }

  // Retrieve Teen Births Data
  componentWillMount() {

  }

  // Render
  render() {
    return (
      <div>
        <p>Crime</p>
      </div>
    )
  }
}




// Exports (Binding the getAuthors query with the AddBook component)
// graphql(Query)(Component)
export default TeenBirths