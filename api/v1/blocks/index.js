const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

// router.get('/current', middleware.authenticate, controller.current);

module.exports = router;