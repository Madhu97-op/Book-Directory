const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getBooks);
router.get('/getById', bookController.getBookById);
router.post('/create', bookController.createBook);
router.put('/update', bookController.updateBook);
router.delete('/delete/:id', bookController.deleteBook);


module.exports = router;
