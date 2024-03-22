// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./app/routes/authRoutes');
const bookRoutes = require('./app/routes/bookRoutes');
const reviewRoutes = require('./app/routes/reviewRoutes');
const errorHandler = require('./app/middleware/errorHandler');
const app = express();

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));