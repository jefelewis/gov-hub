// Imports: React
import React, { Component } from 'react';


// Component: NavagationBar
class NavagationBar extends Component {

  // Render
  render() {
    return (
      <div class="navbar">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">GovHub</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Near Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Crime</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Employment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Environment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Energy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Public Health</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Politics</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}




// Exports (Binding the getAuthors query with the AddBook component)
// graphql(Query)(Component)
export default NavagationBar