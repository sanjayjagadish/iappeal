var express = require('express');
var router = express.Router();

// Require controller modules.
var thingsineed_controller = require('../controllers/thingsineedController');

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/create', thingsineed_controller.thingsineed_create_get);

// POST request for creating Genre.
router.post('/create', thingsineed_controller.thingsineed_create_post);


module.exports = router;
