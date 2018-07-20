// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql, compose } from 'react-apollo';

// Imports: Apollo Queries
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../graphql/queries.js';


// Component: BookList
class AddBook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }

  // Function: Display all authors
  displayAuthors() {
    let data = this.props.getAuthorsQuery;

    // Check to see if data is loading
    if(data.loading) {
      return(<option disabled>Loading Authors...</option>)
    }
    // Map authors to options list
    else{
      return data.authors.map((author) => {
        return(<option key={author.id} value={author.id}>{ author.name }</option>)
      })
    }
  }

  // Function: Submit Form
  submitForm(e) {
    // Prevents the page from reloading so the console data doesn't disappear
    e.preventDefault()

    // Check if all form fields are filled out
    if ((this.state.name || this.state.genre || this.state.authorId) !== '') {
      console.log('Submit Form State', this.state)
      this.props.addBookMutation({
        variables: {
          name: this.state.name,
          genre: this.state.genre,
          authorId: this.state.authorId
        },
        // Refetch query after book has been added to the database
        refetchQueries: [{ 
          query: getBooksQuery
        }]
      });
    }
    // Alert user to complete form fields
    else {
      alert('Please add a Book Title, Genre, and Author.');
    }
  }

  // Render
  render() {
    return (
      <form id="add-book" onSubmit={ this.submitForm.bind(this) }>

        <div className="field">
          <label>Book Title:</label>
          <input
            type="text"
            placeholder="Book Title"
            onChange={ (e) => this.setState({ name: e.target.value })}
          />
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            placeholder="Genre"
            onChange={ (e) => this.setState({ genre: e.target.value })}
          />
        </div>      
        
        <div className="field">
          <label>Author:</label>
          <select
            onChange={ (e) => this.setState({ id: e.target.value })}
          >
            <option>Select Author</option>
            { this.displayAuthors() }
          </select>
        </div>  

        <button>Add Book</button>

      </form>
    );
  }
}




// Exports (Binding the getAuthors query with the AddBook component)
// graphql(Query)(Component)
export default compose(
  graphql(getAuthorsQuery, { name:"getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)
 

