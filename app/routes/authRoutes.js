// authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
  body('username').trim().notEmpty(),
  body('password').isLength({ min: 6 }),
  body('email').isEmail().normalizeEmail()
], authController.register);

router.post('/login', authController.login);

module.exports = router;