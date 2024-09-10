const FundRaiser = require('../models/FundRaiser');

// Fetch all fund raisers
const index = (req, res, next) => {
    FundRaiser.find()
        .then(response => {
            res.json({
                response
            });
        })
        .catch(error => {
            res.json({
                message: 'An Error Occurred!'
            });
        });
};

// Show specific fund raiser by ID
const show = (req, res, next) => {
    let fundRaiserID = req.body.fundRaiserID;
    FundRaiser.findById(fundRaiserID)
        .then(response => {
            res.json({
                response
            });
        })
        .catch(error => {
            res.json({
                message: 'An Error Occurred!'
            });
        });
};

// Create a new fund raiser
const store = (req, res, next) => {
    let fundRaiser = new FundRaiser({
        your_name: req.body.your_name,
        event_name: req.body.event_name,
        event_description: req.body.event_description,
        approximate_amount: req.body.approximate_amount,
        email: req.body.email
    });

    fundRaiser.save()
        .then(response => {
            res.json({
                message: 'Fund Raiser Created Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'Error occurred while creating the fund raiser'
            });
        });
};

// Update fund raiser
const update = (req, res, next) => {
    let fundRaiserID = req.body.fundRaiserID;

    let updatedData = {
        your_name: req.body.your_name,
        event_name: req.body.event_name,
        event_description: req.body.event_description,
        approximate_amount: req.body.approximate_amount,
        email: req.body.email
    };

    FundRaiser.findByIdAndUpdate(fundRaiserID, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'Fund Raiser Updated Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'Error occurred while updating the fund raiser'
            });
        });
};

// Delete fund raiser
const destroy = (req, res, next) => {
    let fundRaiserID = req.body.fundRaiserID;
    FundRaiser.findByIdAndRemove(fundRaiserID)
        .then(() => {
            res.json({
                message: 'Fund Raiser Deleted Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'Error occurred while deleting the fund raiser'
            });
        });
};

module.exports = {
    index, show, store, update, destroy
};
