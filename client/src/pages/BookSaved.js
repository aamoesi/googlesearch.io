import React, { Component } from 'react';
import API from '../utils/API';
import Result from './../components/Result';
import {Heading} from 'react-bulma-components';

class BookSaved extends Component {
  state = {
    bookList : []
  }

  componentDidMount =() =>{
    this.getBooks();
  }

  getBooks =() =>{
    API.getSavedBooks()
      .then(res => this.setState({bookList:res.data}))
      .catch(err => console.log(err))
  }

  deleteBook = bookId => {
    API.deleteBook(bookId)
    .then(this.getBooks)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        {this.state.bookList.length > 0 ? 
          <Result from="DB" getBooks={this.getBooks} bookData={this.state.bookList}/> :
          <Heading subtitle size={4}>No Saved Books ... </Heading>}
        </React.Fragment>
    );
  }
}

export default BookSaved;