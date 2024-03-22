// bookRoutes.js
const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.post('/borrow', authMiddleware, bookController.borrowBook);
router.post('/return', authMiddleware, bookController.returnBook);

module.exports = router;