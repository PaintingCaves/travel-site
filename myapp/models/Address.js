const mongoose = require('mongoose');


//create schema for a quote
var addressSchema = mongoose.Schema({
    email: String
});

//create a model from the schema
var Address = mongoose.model('Address', addressSchema);

module.exports = Address;