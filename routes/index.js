var express = require('express');
var router = express.Router();

var titleOfSite = "Solar's Node Test 2";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Home - " + titleOfSite });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: "About - " + titleOfSite });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact - " + titleOfSite });
});

module.exports = router;
