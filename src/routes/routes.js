const connection = require('../databases/connection')
const express = require('express')
const router = express.Router();
const normasController = require('../controllers/normasController')

router.post('/v1/inserirNorma',normasController.inserirNorma)
router.get('/v1/exibirNormas',normasController.listarNormas)

module.exports = router