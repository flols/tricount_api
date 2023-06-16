const mongoose = require("mongoose")

// Define the operation schema
const operationSchema = mongoose.Schema(
  {
    // Field: depense
    depense: {
      type: Number,
      required: true,
    },
    // Field: categorie
    categorie: {
      type: String,
      required: true,
    },
    // Embedded object: utilisateur
    utilisateur: {
      // Field: nom
      nom: {
        type: String,
        required: true,
      },
      // Field: prenom
      prenom: {
        type: String,
        required: true,
      },
      // Field: email
      email: {
        type: String,
        required: true,
        unique: true
      },
    },
  },
  {
    // Enable timestamps for createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create and export the "Depense" model
module.exports = mongoose.model("Depense", operationSchema);