const express = require('express');
const Recipe = require('../models/index');
const router = express.Router();
const Candy = require('../models/index');

let data = [];
let getCandy;
router.get('/', function(req, res){

  Candy.find({}).then(function(candies){
    console.log(candies);


res.render("view", {candyInfo: candies})
})
  // Candy.create({
  //   name: "Three Muskateers",
  //   company: "Nestle",
  //   weight: 6,
  //   flavors:[ {
  //       color: "brown",
  //       flavor: "chocolate"
  //     }]
  // })
  // .then(function(data){
  //   console.log(data);
  // })
//
//   let getData = function(db) {
//   let candies = db.collection('candies');
//
//  users.find({}).toArray().then(function(candies) {
//     data = candies;
//   });
// };

console.log("dataaaaaaaa!!!!!", data);

});

router.post('/create', function(req, res){
  Candy.create({
    name: req.body.name,
    company: req.body.company,
    weight: req.body.weight,
    flavors:{
      color: req.body.color,
      flavor:req.body.flavors
    }
  })
  .then(function(data){
    console.log(data);
  })
    res.redirect('/')
    let getData = function(db) {
    let candies = db.collection('candies');

    users.find({}).toArray().then(function(candies) {
      data = candies;

    });
  };
});

// router.post('/edit/:id', function(req, res){
//   let id= req.params.id;
//
// })
//
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
