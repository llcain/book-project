
import React, { Component } from 'react';
import BookList from './BookList';
import SearchArea from './searchArea';
import request from 'superagent';



class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ''
    };
  }

  // Search book method
  searchBook = (e) => {
    e.preventDefault();
    request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField })
        .then((data) => {
          // console.log(data);
          this.setState({ books: [...data.body.items]})
        })
  }

  // Handle search method
  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value })
  }
  
  render() { 
    return (
      <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}
 
export default Books;