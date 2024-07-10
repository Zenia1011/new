const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const usersRouter = require('./routes/users');
const db = require('./db/connection');

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.send('Hello, World!');
});

// Users API route
app.use('/api/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
