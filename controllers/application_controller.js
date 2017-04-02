var db  = require('../models');
var express = require('express');
var router  = express.Router();

router.get("/", function(req, res) {
    db.Person.findAll({}).then(function(dbPerson){
      //res.json(dbProduct);
    var hbsObject = {Person: dbPerson};

    console.log(hbsObject);

    res.render('index', hbsObject);
    });
  });

router.get('/', function(req, res) {
  res.redirect('/people');
});

module.exports = router;
