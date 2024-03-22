// connection.js
const mysql = require('mysql');
const { dbConfig } = require('../config/config');

const db = mysql.createConnection(dbConfig);

db.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = db;