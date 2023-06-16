const express = require('express');
const { getOperations, setOperations, editOperation, deleteOperation } = require('../controllers/operations.controller');
const router = express.Router();

// GET request to retrieve all operations
router.get('/', getOperations);

// POST request to create a new operation
router.post('/', setOperations);

// PUT request to update an existing operation by ID
router.put('/:id', editOperation);

// DELETE request to delete an operation by ID
router.delete('/:id', deleteOperation);


module.exports = router;