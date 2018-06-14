const mongoose = require('mongoose');


//create schema for a quote
var destinationSchema = mongoose.Schema({
    title: String,
    featuredImage: String,
    shortDescription: String,
    longDescription: String,
    lat: Number,
    lng: Number,
    galleryImages: Array

});

//create a model from the schema
var Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;