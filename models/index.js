const mongoose = require('mongoose');
mongoose.promise = require("bluebird");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/recipeDirectory");


const candySchema = new Schema({
  name:{type: String, required:true,}
  company: String,
  weight: {type: Number, [ min:1, "must have weight"]},
  colors:[{
    red: { type:String, fruit: true},
    blue: { type:String, fruit:true},
    green: { type: String, fruit:true},
    brown: { type: String, fruit: false, chocolate: true},
  }],
  sour: {required: false, validate: function(val){
    if (sour === true){
      brown === 0;

    }
  }}
})

const Candy = mongoose.model("Candy", candySchema);

module.exports = Candy;
