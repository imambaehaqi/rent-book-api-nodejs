// Review.js
const db = require('../../database/connection');

class Review {
  static async addReview(bookId, userId, rating, comment) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Reviews (book_id, user_id, rating, comment) VALUES (?, ?, ?, ?)', [bookId, userId, rating, comment], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = Review;