// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Imports: CSS + Components
import './css/styles.css';

// import AlcoholBingeDrinking from './components/public-health/AlcoholBingeDrinking';
// import CardiovascularDisease from './components/public-health/CardiovascularDisease';
// import ChildhoodMortalityRate from './components/public-health/ChildhoodMortalityRate';
// import DeathsPerYear from './components/public-health/DeathsPerYear';
// import FatalOccupationalInjuries from './components/public-health/FatalOccupationalInjuries';
// import LeadingCausesOfDeath from './components/public-health/LeadingCausesOfDeath';
// import LifeExpectancy from './components/public-health/LifeExpectancy';
// import SmokingUsers from './components/public-health/SmokingUsers';
// import TeenBirths from './components/public-health/TeenBirths';
// import TobaccoUsers from './components/public-health/TobaccoUsers';
// import UnmarriedBirths from './components/public-health/UnmarriedBirths';


// Setup: Apollo
const CLIENT = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <div id="main">
          <h1>Title</h1>

        </div>
      </ApolloProvider>
    );
  }
}

// Exports
export default App;