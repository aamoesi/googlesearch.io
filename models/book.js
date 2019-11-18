const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    authors: {
        type: [String],
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    url: {
        type: String
    }
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;