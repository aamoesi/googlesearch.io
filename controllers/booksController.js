const db = require("./../models");

// Defining methods for the booksController
module.exports = {
  findAll(req, res) {
    db.Books
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.json(err)
      });
  },
  findById(req, res) {
    db.Books
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.json(err)
      });
  },
  saveBook(req, res) {
    db.Books
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.json(err)
      });
  },
  /*update(req, res) {
    db.Books
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.json(err)
      });
  },*/
  deleteBook(req, res) {
    db.Books
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.json(err)
      });
  }
};
