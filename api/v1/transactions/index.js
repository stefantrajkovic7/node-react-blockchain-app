const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.get('/pool-map', controller.poolMapList);

router.post('/create', controller.create);

module.exports = router;