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


    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        console.log('body', JSON.stringify(req.body));
        const errors = validationResult(req);
        // Create a genre object with escaped and trimmed data.
         var thingsineed = new ThingsINeed({
        
          "Full Name": req.body.full_name,
          "Phone Number": req.body.phone_number,
          "Address": req.body.address ,
          "Person Status": req.body.person_status ,
          "Food": filter(req.body.food),
          "Sanitary products and Toiletries": filter(req.body.SPnT) ,
          "Electronics": filter(req.body.Electronics) ,
          "Stationary": filter(req.body.Stationary) ,
          "First Aid": filter(req.body.First_aid) ,
          "Survival": filter(req.body.Survival) ,
          "Bedding": req.body.bedding ,
          "Storage": req.body.Storage ,
          "Kids Items": req.body.kids_items ,
          "Home Shelter Items": req.body.Home_Shelter_Items ,
          "Kids Clothing": req.body.k_clothing ,
          "Men Clothing": req.body.m_clothing ,
          "Women Clothing": req.body.w_clothing ,
          "Men Footware Size": req.body.m_footware_size ,
          "Women Footware Size" : req.body.w_footware_size ,
          "Kid Footware Size": req.body.k_footware_size ,
          "Other": req.body.other
         }
         );

         function filter(el) {
           var oldArray = [];
           var oldArray = el;
           var newArray = oldArray && oldArray.filter(function (el) {
                         return el != null && el != '';
          });
          return newArray;
         }

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