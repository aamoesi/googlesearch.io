import axios from "axios";

export default {
  // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBookById: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  //https://www.googleapis.com/books/v1/volumes?q=Harry+Potter
  searchGoogleBooks(bookQuery){
    return axios.get('https://www.googleapis.com/books/v1/volumes',
    {
      params : {q : bookQuery}
    })
  }
};
