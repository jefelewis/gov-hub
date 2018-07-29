// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Imports: CSS
import './css/styles.css';

// Imports: React Components
import NavagationBar from './components/NavigationBar.jsx'
// import AlcoholBingeDrinking from './components/public-health/AlcoholBingeDrinking.jsx';
// import CardiovascularDisease from './components/public-health/CardiovascularDisease.jsx';
// import ChildhoodMortalityRate from './components/public-health/ChildhoodMortalityRate.jsx';
// import DeathsPerYear from './components/public-health/DeathsPerYear.jsx';
// import FatalOccupationalInjuries from './components/public-health/FatalOccupationalInjuries.jsx';
// import LeadingCausesOfDeath from './components/public-health/LeadingCausesOfDeath.jsx';
// import LifeExpectancy from './components/public-health/LifeExpectancy.jsx';
// import SmokingUsers from './components/public-health/SmokingUsers.jsx';
// import TeenBirths from './components/public-health/TeenBirths.jsx';
// import TobaccoUsers from './components/public-health/TobaccoUsers.jsx';
// import UnmarriedBirths from './components/public-health/UnmarriedBirths.jsx';


// Setup: Apollo
const CLIENT = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <div id="main">
          <h1>Gov Hub</h1>
          <NavagationBar />

        </div>
      </ApolloProvider>
    );
  }
}

// Exports
export default App;