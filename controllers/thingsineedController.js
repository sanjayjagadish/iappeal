var ThingsINeed = require('../models/thingsineed');
const validator = require('express-validator');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


exports.thingsineed_create_get = function(req, res, next) {
    res.render('thingsineed', { title: 'List the things i need' });
  };

// Form containing list of things i need to.
// Handle Genre create on POST.
exports.thingsineed_create_post = [

    // Validate that the name field is not empty.
    body('full_name', 'Full name required').isLength({ min: 1 }).trim(),
    body('phone_number', 'Phone number required').isLength({ min: 8 }).trim(),

    // Sanitize (trim) the name field.
    sanitizeBody('full_name').escape(),
    sanitizeBody('phone_number').escape(),
    sanitizeBody('address').escape(),
    sanitizeBody('person_status').escape(),
    sanitizeBody('food').escape(),
    sanitizeBody('SPnT').escape(),
    sanitizeBody('Stationary').escape(),
    sanitizeBody('Survival').escape(),
    sanitizeBody('First_aid').escape(),
    sanitizeBody('Electronics').escape(),
    sanitizeBody('Bedding').escape(),
    sanitizeBody('Storage').escape(),
    sanitizeBody('other_items').escape(),
    sanitizeBody('kids_item').escape(),
    sanitizeBody('k_top').escape(),
    sanitizeBody('m_top').escape(),
    sanitizeBody('w_top').escape(),
    sanitizeBody('Home_Shelter_Items').escape(),
    sanitizeBody('m_bottom_size').escape(),
    sanitizeBody('w_bottom_size').escape(),
    sanitizeBody('k_bottom_size').escape(),
    sanitizeBody('m_footware_size').escape(),
    sanitizeBody('w_footware_size').escape(),
    sanitizeBody('k_footware_size').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.

        const errors = validationResult(req);
        // Create a genre object with escaped and trimmed data.
         var thingsineed = new ThingsINeed({
        
          full_name: req.body.full_name ,
          phone_number: req.body.phone_number,
          address: req.body.address ,
          person_status: req.body.person_status ,
          food: req.body.food ,
          sanitary_toiletries: req.body.SPnT ,
          electronics: req.body.Electronics ,
          stationary: req.body.Stationary ,
          first_aid: req.body.First_aid ,
          survival: req.body.Survival ,
          bedding: req.body.Bedding ,
          storage: req.body.Storage ,
          kids_items: req.body.kids_item ,
          home_shelter_items: req.body.Home_Shelter_Items ,
          kids_top: req.body.k_top ,
          men_top: req.body.m_top ,
          women_top: req.body.w_top ,
          men_footware_size: req.body.m_footware_size ,
          women_footware_size : req.body.w_footware_size ,
          kid_footware_size: req.body.k_footware_size ,
          men_bottom_size: req.body.m_bottom_size ,
          women_bottom_size: req.body.w_bottom_size ,
          kid_bottom_size: req.body.k_bottom_size ,
          other: req.body.other
         }
         );
        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('thingsineed', { title: 'Create thingsineed', thingsineed: thingsineed, errors: errors.array()});
            res.redirect('/');
        }

      thingsineed.save(function (err) {
        if (err) { 
          return next(err)
        } 
        res.redirect('/');
      });
    }
];