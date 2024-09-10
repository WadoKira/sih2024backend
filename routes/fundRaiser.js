const express = require('express');
const router = express.Router();

const FundRaiserController = require('../controllers/FundRaiserController');

// Fetch all fund raisers
router.get('/', FundRaiserController.index);

// Fetch a specific fund raiser by ID
router.post('/show', FundRaiserController.show);

// Add a new fund raiser
router.post('/store', FundRaiserController.store);

// Update an existing fund raiser
router.post('/update', FundRaiserController.update);

// Delete a fund raiser
router.post('/destroy', FundRaiserController.destroy);

module.exports = router;
