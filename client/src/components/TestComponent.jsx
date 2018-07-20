// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql, compose } from 'react-apollo';

// Imports: Apollo Queries


// Component: BookList
class TestComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // Render
  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    )
  }
}




// Exports (Binding the getAuthors query with the AddBook component)
// graphql(Query)(Component)
export default TestComponent