// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql, compose } from 'react-apollo';

// Imports: Apollo Queries
// import { getAllAlcoholBingeDrinking } from '/Users/jefflewis/Documents/Computer-Programming/Projects/gov-hub/server/graphql/resolvers.js';

// Imports: Chart.js
import { Line } from 'react-chartjs-2';


// Component: AlcoholBingeDrinking
class AlcoholBingeDrinking extends Component {

  constructor(props) {
    super(props);

  //   this.state = {
  //     AlcoholBingeDrinkingData: {
  //       labels: [],
  //       datasets: [],
  //       backgroundColor: []
  //     }
  //   };
  // }

  // // Retrieve Alcohol Bing Drinking Data
  // componentWillMount() {
  //   let response = getAllAlcoholBingeDrinking();


  //   Map

  //   let labels = response.data.locationdesc.map(function(e) {
  //     return e.state;
  //   });
  //   let data = response.data.map(function(e) {
  //     return e.age;
  //   });;


  }

  // Render
  render() {
    return (
      <div>

      </div>
    )
  }
}


// Exports (Binding the getAuthors query with the AddBook component)
// graphql(Query)(Component)
export default AlcoholBingeDrinking