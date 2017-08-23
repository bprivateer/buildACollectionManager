const express = require('express');
const Recipe = require('../models/index');
const router = express.Router();

router.get('/', function(req, res){

  console.log("hello");
})

module.exports = router;
