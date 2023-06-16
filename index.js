const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

// Connect to the database
connectDB();

// Middleware to parse request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Utilisez le middleware cors
app.use(cors());

// Route for the home page
app.get('/', (req, res) => {
  res.json({ message: "🏠" });
});

// Use the router for operations
app.use("/operations", require("./routes/operations.route"))

// API listening port
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});