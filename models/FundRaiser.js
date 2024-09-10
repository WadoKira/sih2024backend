const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fundRaiserSchema = new Schema({
    your_name: {
        type: String,
        required: true
    },
    event_name: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
        required: true
    },
    approximate_amount: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

const FundRaiser = mongoose.model('FundRaiser', fundRaiserSchema);
module.exports = FundRaiser;
