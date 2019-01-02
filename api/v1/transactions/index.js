const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.get('/', controller.list);

router.post('/create', controller.create);

module.exports = router;