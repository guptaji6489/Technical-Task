var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res) {
  console.log("xyz......");
 
  var database = req.body.hits;
 db.collection("customers").insertOne(database, function(err, res) {
   if (err) throw err;
  console.log("1 document inserted");
  console.log(req.body.hits);
  res.send("successful");
});
 });


module.exports = router;
