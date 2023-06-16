const OperationModel = require('../models/operations.model')

// Get all operations
module.exports.getOperations = async (req, res) => {
  const operations = await OperationModel.find();
  res.status(200).json(operations);
};

// Create a new operation
module.exports.setOperations = async (req, res) => {
  if (!req.body.depense) {
    res.status(400).json({ depense: "Merci d'ajouter une Operation" });
  }

  const { depense, categorie, utilisateur } = req.body;
  const { nom, prenom, email } = utilisateur;

  // Check if the email is already in use
  const existingOperation = await OperationModel.findOne({ "utilisateur.email": email });

  if (existingOperation) {
    return res.status(400).json({ message: "Cette adresse e-mail est déjà utilisée." });
  }

  // Create a new operation
  const operation = new OperationModel({
    depense,
    categorie,
    utilisateur: {
      nom,
      prenom,
      email,
    },
  });

  await operation.save();

  res.status(200).json(operation);
}

// Edit an existing operation
module.exports.editOperation = async (req, res) => {
  const operation = await OperationModel.findById(req.params.id);

  if (!operation) {
    res.status(400).json({ message: "Cette opération n'existe pas" });
  }

  const updateOperation = await OperationModel.findByIdAndUpdate(operation, req.body, {
    new: true,
  });

  res.status(200).json(updateOperation);
};

// Delete an operation
module.exports.deleteOperation = async (req, res) => {
  const operation = await OperationModel.findById(req.params.id);

  if (!operation) {
    res.status(400).json({ message: "Cette peration n'existe pas" });
  }
  await operation.deleteOne({ _id: operation })
  res.status(200).json({ message: "Operation supprimé " + req.params.id });
};
