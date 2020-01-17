var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ThingsINeedSchema = new Schema({
  full_name: {type: String, required: true, min: 3, max: 100},
  phone_number: {type: String, required: true, max: 10},
  address: {type: String, min: 3, max: 200},
  person_status: {type: String, min: 3, max: 100},
  food: [String],
  sanitary_toiletries: [String],
  electronics: [String],
  stationary: [String],
  first_aid: [String],
  survival: [String],
  bedding: [String],
  storage: [String],
  kids_items: [String],
  home_shelter_items: [String],
  kids_top: [String],
  men_top: [String],
  women_top: [String],
  men_footware_size: {type: String, min: 3, max: 100},
  women_footware_size: {type: String, min: 3, max: 100},
  kid_footware_size: {type: String, min: 3, max: 100},
  men_bottom_size: {type: String, min: 3, max: 100},
  women_bottom_size: {type: String, min: 3, max: 100},
  kid_bottom_size: {type: String, min: 3, max: 100},
  other: {type: String, min: 3, max: 500},

});

// Virtual for this genre instance URL.
ThingsINeedSchema
.virtual('url')
.get(function () {
  return '/thingsineed/'+this._id;
});

// Export model.
module.exports = mongoose.model('thingsineed', ThingsINeedSchema);