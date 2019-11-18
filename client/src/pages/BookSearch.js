import React, { Component } from 'react';
import Search from './../components/Search';
import Result from './../components/Result';
import API from './../utils/API';
import { Heading } from "react-bulma-components/full";


class BookSearch extends Component {
  state = {
    bookInput : '',
    bookList :[]
  }

  componentDidMount =() => {
    //this.searchGoogleBooks();
  }

  searchGoogleBooks = bookQuery =>{
    API.searchGoogleBooks(bookQuery)
      .then(res => {
        const bookList  = res.data.items.map(book => {
          return{
            bookId : book.id,
            authors : book.volumeInfo.authors,
            title : book.volumeInfo.title,
            date : book.volumeInfo.publishedDate,
            description : book.volumeInfo.description,
            image :book.volumeInfo.imageLinks?
              book.volumeInfo.imageLinks.thumbnail:
              'http://bulma.io/images/placeholders/128x128.png',
            link : book.volumeInfo.infoLink
          }
        })
        this.setState({bookList})
      })

    }
        
  

  handleInput = (event) =>{
    const {name, value} = event.target;

    this.setState({
      [name] : value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();

    if(!this.state.bookInput){
      return false;
    }
    this.searchGoogleBooks(this.state.bookInput);
    
  }

  saveBook = (bookId) => {
    const bookPicked = this.state.bookList.find(book => book.bookId === bookId);
    API.saveBook(bookPicked)
      .then(dbBook => console.log('Saved'))
  }

  render() {
    return (
        <React.Fragment>
        <Search handleInput={this.handleInput} handleSubmit={this.handleSubmit} 
        bookInput={this.state.bookInput}/>
        {this.state.bookList.length > 0 ? 
          <Result from="API" bookData={this.state.bookList}/> :
          <Heading subtitle size={4}>Start Searching ... </Heading>}
        </React.Fragment>
    );
  }
}

export default BookSearch;