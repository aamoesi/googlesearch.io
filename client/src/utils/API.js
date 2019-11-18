const axios = require('axios');

module.exports = {
    getBooks: function(){
        return axios.get('/api/book/')
    },
    deleteBook: function(id){
        return axios.delete('/api/book/' + id)
    },
    createBook: function(bookData){
        return axios.post('/api/book/', bookData)
    }
};