const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.get('/list', controller.list);

router.post('/mine', controller.mine);

module.exports = router;