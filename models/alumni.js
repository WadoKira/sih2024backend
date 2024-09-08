const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumniSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phno: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['Alumni', 'Student'],  // Limiting to Alumni or Student
        required: true
    },
    year_of_passing: {
        type: String,
        required: function () {
            return this.role === 'Alumni';  // Year of passing required only for Alumni
        }
    }
}, { timestamps: true });

const Alumni = mongoose.model('Alumni', alumniSchema);
module.exports = Alumni;
