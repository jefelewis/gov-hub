// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql, compose } from 'react-apollo';

// Imports: Apollo Queries


// Component: LifeExpectancy
class LifeExpectancy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      LifeExpectancy: [] || {}
    };
  }

  // Retrieve Life Expectancy Data
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
export default LifeExpectancy