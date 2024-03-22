// User.js
const db = require('../../database/connection');

class User {
  static async create(username, password, email) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO Users (username, password, email) VALUES (?, ?, ?)', [username, password, email], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.insertId);
        }
      });
    });
  }

  static async findByUsername(username) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Users WHERE username = ?', [username], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            resolve(results[0]);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  static async findById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Users WHERE id = ?', [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            resolve(results[0]);
          } else {
            resolve(null);
          }
        }
      });
    });
  }
}

module.exports = User;