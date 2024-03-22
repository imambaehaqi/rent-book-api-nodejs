// reviewController.js
const Review = require('../models/Review');

exports.addReview = async (req, res, next) => {
  try {
    const { bookId, rating, comment } = req.body;
    await Review.addReview(bookId, req.user.id, rating, comment);
    res.status(201).json({ message: 'Review added successfully' });
  } catch (err) {
    next(err);
  }
};