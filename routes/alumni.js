const express = require('express');
const router = express.Router();

const AlumniController = require('../controllers/AlumniController');

// Fetch all alumni or students
router.get('/', AlumniController.index);

// Fetch a specific profile by ID
router.post('/show', AlumniController.show);

// Add a new alumni profile
router.post('/store', AlumniController.store);

// Update an existing alumni profile
router.post('/update', AlumniController.update);

// Delete an alumni profile
router.post('/destroy', AlumniController.destroy);

module.exports = router;
