//const express = require('express');
const router = require('express').Router()
//const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights);

router.post("/", controller.createFlight);

module.exports = router;

