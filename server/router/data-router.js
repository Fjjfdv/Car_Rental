const express = require("express");
const router = express.Router();
const data = require('../controllers/data-controller');

router.route('/data').post(data);

module.exports = router;
