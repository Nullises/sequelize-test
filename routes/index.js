var express = require('express');
var router = express.Router();
var models = require('../server/models');



//Página inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
