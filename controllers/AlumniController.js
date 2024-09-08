const Alumni = require('../models/alumni');

// Fetch all alumni or students
const index = (req, res, next) => {
    Alumni.find()
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

// Show specific profile by ID
const show = (req, res, next) => {
    let alumniID = req.body.alumniID;
    Alumni.findById(alumniID)
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

// Create a new alumni profile
const store = (req, res, next) => {
    let alumni = new Alumni({
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        phno: req.body.phno,
        role: req.body.role,
        year_of_passing: req.body.year_of_passing || null
    });

    alumni.save()
        .then(response => {
            res.json({
                message: 'Profile Added Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'Error occurred while saving the profile'
            });
        });
};

// Update alumni profile
const update = (req, res, next) => {
    let alumniID = req.body.alumniID;

    let updatedData = {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        phno: req.body.phno,
        role: req.body.role,
        year_of_passing: req.body.year_of_passing || null
    };

    Alumni.findByIdAndUpdate(alumniID, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'Profile Updated Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'Error occurred while updating the profile'
            });
        });
};

// Delete alumni profile
const destroy = (req, res, next) => {
    let alumniID = req.body.alumniID;
    Alumni.findByIdAndRemove(alumniID)
        .then(() => {
            res.json({
                message: 'Profile Deleted Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'Error occurred while deleting the profile'
            });
        });
};

module.exports = {
    index, show, store, update, destroy
};
