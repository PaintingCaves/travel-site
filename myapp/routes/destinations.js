var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Destination = require('../models/Destination');


/* SAVE Destinations. */

router.post('/', function (req, res, next) {

    let featuredImage = req.files.featuredImage;
    let galleryImage1 = req.files.galleryImage1;
    let galleryImage2 = req.files.galleryImage2;
    let galleryImage3 = req.files.galleryImage3;
    let galleryImage4 = req.files.galleryImage4;

    let filePath = __dirname.slice(0, -7);
    

    featuredImage.mv(filePath +'/public/images/'+ req.files.featuredImage.name, function(err){
        if (err)
            return res.status(500).send(err);
    })
    galleryImage1.mv(filePath +'/public/images/'+ req.files.galleryImage1.name, function(err){
        if (err)
            return res.status(500).send(err);
    })
    galleryImage2.mv(filePath +'/public/images/'+ req.files.galleryImage2.name, function(err){
        if (err)
            return res.status(500).send(err);
    })
    galleryImage3.mv(filePath +'/public/images/'+ req.files.galleryImage3.name, function(err){
        if (err)
            return res.status(500).send(err);
    })
    galleryImage4.mv(filePath +'/public/images/'+ req.files.galleryImage4.name , function(err){
        if (err)
            return res.status(500).send(err);
    })

    //get the fields sent to us
    //create a new model
    //save in the database
    var new_destination = new Destination({
        title: req.body.title,
        featuredImage: req.files.featuredImage.name,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        lat: req.body.lat,
        lng: req.body.lng,
        galleryImages: [req.files.galleryImage1.name, req.files.galleryImage2.name, req.files.galleryImage3.name, req.files.galleryImage4.name]
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
