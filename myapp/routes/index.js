var express = require('express');
var router = express.Router();
var Destination = require('../models/Destination')

/* GET home page. */
router.get('/', function(req, res, next) {
  Destination.find({}, function(err, destinations){
    if (err) throw err;
    
    res.render('./pages/index', { title: 'Home', destinations:destinations });

  });
});

// GET create page
router.get('/create', function(req,res,next){
  res.render('./pages/create', {title: 'Create'})
});

//GET edit page
router.get('/edit/:destination_id', function (req, res) {

  let destination_id = req.params.destination_id;
  Destination.findById(destination_id, function (err, destination) {
    if (err) {
      res.send(err);
    }
    else {
      res.render('./pages/edit', {
        title : 'Edit',
        destination:destination
      })
    }
  })

});

//GET view page
router.get('/view/:destination_id', function (req, res) {

  let destination_id = req.params.destination_id;
  Destination.findById(destination_id, function (err, destination) {
    if (err) {
      res.send(err);
    }
    else {
      res.render('./pages/view', {
        title: 'View',
        destination: destination
      })
    }
  })

});



module.exports = router;
