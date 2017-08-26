const express = require('express');
const Recipe = require('../models/index');
const router = express.Router();
const Candy = require('../models/index');

let data = [];
let getCandy;

router.get('/', function(req, res){

  Candy.find({}).then(function(candies){
    // console.log(candies);

res.render("view", {candyInfo: candies})
})
// console.log("dataaaaaaaa!!!!!", data);
});

//this creates

router.post('/create', function(req, res){
  Candy.create({
    name: req.body.name,
    company: req.body.company,
    weight: req.body.weight,
    flavors:{
      color: req.body.color,
      flavor:req.body.flavors,
    },
    type:req.body.type,
  })
  .then(function(data){
    // console.log(data);
  })
    res.redirect('/')
    let getData = function(db) {
    let candies = db.collection('candies');

    users.find({}).toArray().then(function(candies) {
      data = candies;

    });
  };
});

//this edits

router.get('/edit/:id', function(req, res){
  Candy.findOne({_id: req.params.id})
  .catch(function(user){
    console.log("USERRRRRRR", id);
      res.render('edit' )
  })
  .then(function(err){
    console.log(err);

  })
  console.log("log");
  res.render('edit', {_id: req.params.id} )
})

router.post('/edit/:id', function(req, res){
  console.log("AM i here");
let id = req.params.id

  Candy.update({_id: id}, {
    name: req.body.name,
    company: req.body.company,
    weight: req.body.weight,
    flavors:{
      color: req.body.color,
      flavor:req.body.flavors,
    },
    type:req.body.type,
  }).then(function(data){
    // console.log(data);
   res.redirect('/')
  })
  .catch(function(err){
    console.log(err);
  })
console.log("Am i in here?");
})



//this deletes

router.post('/delete', function(req, res){
  let nameC = req.body.btn;
  console.log(nameC);

  Candy.deleteOne({_id:nameC})
  .then(function(data){
    console.log('Deleted!');
    res.redirect('/')
  })
  console.log(nameC);

  res.redirect('/')
})
module.exports = router;
