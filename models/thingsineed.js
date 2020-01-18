var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ThingsINeedSchema = new Schema({
  "Full Name" : {type: String, required: true, min: 3, max: 100},
  "Phone Number": {type: String, required: true, max: 10},
  "Address": {type: String, min: 3, max: 200},
  "Person Status": {type: String, min: 3, max: 100},
  "Food": [String],
  "Sanitary products and Toiletries": [String],
  "Electronics": [String],
  "Stationary": [String],
  "First Aid": [String],
  "Survival": [String],
  "Bedding": [String],
  "Storage": [String],
  "Kids Items": [String],
  "Home Shelter Items": [String],
  "Kids Clothing": [String],
  "Men Clothing": [String],
  "Women Clothing": [String],
  "Men Footware Size": {type: String, min: 3, max: 100},
  "Women Footware Size": {type: String, min: 3, max: 100},
  "Kid Footware Size": {type: String, min: 3, max: 100},
  "Other": {type: String, min: 3, max: 500},

});

// Virtual for this genre instance URL.
ThingsINeedSchema
.virtual('url')
.get(function () {
  return '/thingsineed/'+this._id;
});

// Export model.
module.exports = mongoose.model('thingsineed', ThingsINeedSchema);