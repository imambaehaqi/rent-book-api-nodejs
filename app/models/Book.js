// Book.js
const db = require('../../database/connection');

class Book {
  static async getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Books', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async borrow(bookId, userId) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE Books SET availability = FALSE WHERE id = ?', [bookId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          db.query('INSERT INTO BorrowedBooks (book_id, user_id) VALUES (?, ?)', [bookId, userId], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }

  static async return(bookId, userId) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE Books SET availability = TRUE WHERE id = ?', [bookId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          db.query('UPDATE BorrowedBooks SET returned_at = CURRENT_TIMESTAMP WHERE book_id = ? AND user_id = ? AND returned_at IS NULL', [bookId, userId], (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }
}

module.exports = Book;