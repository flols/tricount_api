const mongoose = require('mongoose')

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Tricount_API");
    //await mongoose.connect('mongodb://localhost/Tricount_API');
    console.log("Connexion mongoose ok")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB;