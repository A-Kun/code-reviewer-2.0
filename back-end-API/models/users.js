'use strict';

var mongoose = require('mongoose'),
    user_schema;

user_schema = mongoose.Schema({
    first_name: String,
    last_name: String,
    utorid: {
        type: String,           // data type
        required: true,
        unique: true            // avoid duplicates
    },
    student_number: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    },
    last_login : Date,
    contract_number: Number,    // number of contracts a TA has
    user_type: String           // one of  "ta", "student", "admin"
});

module.exports = mongoose.model('users', user_schema);