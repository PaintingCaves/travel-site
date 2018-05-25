var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./pages/index', { title: 'Home' });
});

// GET create page
router.get('/create', function(req,res,next){
  res.render('./pages/create', {title: 'Create'})
});

//GET view page
router.get('/view', function (req, res, next) {
  res.render('./pages/view', { title: 'View' })
});


module.exports = router;
