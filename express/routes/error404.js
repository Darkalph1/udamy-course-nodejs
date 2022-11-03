const express = require('express');
const router = express.Router();

const errorController = require('../controller/errorController');

router.use(errorController.get404Page);

module.exports = router;