const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array },
  description: { type: String},
  image:{ type: String},
  link : { type: String} ,
  date: { type: String},
  bookId :{type:String}
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;