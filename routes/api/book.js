const router = require('express').Router();
const bookController = require('../../controller/bookController');

router.route('/')
    .get(bookController.findAll)
    .post(bookController.create)

router.route('/:id')
    .delete(bookController.delete)

module.exports = router

