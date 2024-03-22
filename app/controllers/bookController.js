// bookController.js
const Book = require('../models/Book');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.borrowBook = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    await Book.borrow(bookId, req.user.id);
    res.json({ message: 'Book successfully borrowed' });
  } catch (err) {
    next(err);
  }
};

exports.returnBook = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    await Book.return(bookId, req.user.id);
    res.json({ message: 'Book successfully returned' });
  } catch (err) {
    next(err);
  }
};