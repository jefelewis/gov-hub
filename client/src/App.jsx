// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Imports: Components
import TestComponent from './components/TestComponent.jsx';

// Imports: CSS
import './css/styles.css';

// Setup: Apollo
const CLIENT = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <div id="main">
          <TestComponent />
        </div>
      </ApolloProvider>
    );
  }
}

// Exports
export default App;