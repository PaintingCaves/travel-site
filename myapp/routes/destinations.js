var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Destination = require('../models/Destination');


/* SAVE Destinations. */

router.post('/', function (req, res, next) {



    //get the fields sent to us
    //create a new model
    //save in the database
    var new_destination = new Destination({
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription
    }
    );


    new_destination.save(function (err) {
        if (err) return handleError(err);


        res.redirect('/create')
    });





});


// Update a post

router.post('/edit', function(req, res, next){
    let destination_id = req.body.destinationId;
    console.log(req.body.title);
    console.log('this is wokring');
    
    Destination.findByIdAndUpdate(destination_id, req.body, { new: true }, (err, destination) =>{
        if (err) return res.status(500).send(err);
        res.redirect('/');
        }
)
})

//Delete a post
router.post('/delete', function (req, res, next) {
    let destination_id = req.body.destinationId;
    console.log('this is deleting');
    console.log(destination_id);
    console.log(req.body);
    
    Destination.findByIdAndRemove(destination_id, function(err, destination){
        if (err) return handleError(err);

        res.send('user deleted');

    });

})



module.exports = router;
