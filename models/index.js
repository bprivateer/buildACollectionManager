const mongoose = require('mongoose');
mongoose.promise = require('bluebird');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/candyDirectory");


const candySchema = new Schema({
  name:{type: String, required:true},
  company: {type: String},
  weight: {type: Number,  min: [1, "must have weight"]},
  flavors:[{
      color: {type:String},
      flavor: {type: String}
    }],



});

const Candy = mongoose.model('Candy', candySchema);

module.exports = Candy;
