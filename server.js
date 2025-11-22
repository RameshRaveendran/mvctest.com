// requires
const express = require('express');

// created instance 
const app = express();

// middeware to parse json to js object
app.use(express.json());

// Mount routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
