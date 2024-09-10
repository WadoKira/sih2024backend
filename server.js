const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Import the fund raiser route
const FundRaiserRoute = require('./routes/fundRaiser');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Kishore:Kishore7!@practice.mbhzktk.mongodb.net/FundDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Error handling for DB connection
db.on('error', (err) => {
    console.log(err);
});

// Connection established message
db.once('open', () => {
    console.log('Database Connection Established');
});

const app = express();

// Use morgan for logging HTTP requests
app.use(morgan('dev'));

// Body-parser middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port for the server
const PORT = 3013;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});

// Use the FundRaiser API routes
app.use('/api/fundraiser', FundRaiserRoute);
