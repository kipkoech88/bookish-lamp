const express = require('express');
const route = express.Router();
const homeController = require('../controllers/home');

route.get("/", homeController.getIndex);

module.exports = route;