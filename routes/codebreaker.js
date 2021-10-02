'use strict'

var express = require('express');
var codeController = require('../controllers/codeController');

var router = express.Router();

//Rutas de pruebas
router.get('/:guess', codeController.breaker);

module.exports = router;