const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Books
            .find()
            .then(response => { res.json(response) })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Books
            .create({
                title: req.body.title,
                authors: req.body.authors,
                description: req.body.description,
                image: req.body.image,
                url: req.body.url
            })
            .then(response => { res.json(response) })
            .catch(err => res.status(422).json(err))

    },
    delete: function (req, res) {
        db.Books
            .remove({ _id: req.params.id })
            .then(response => { res.json(response) })
            .catch(err => res.status(422).json(err))
    }
};