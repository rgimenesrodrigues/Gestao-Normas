const connection = require('../databases/connection')
const express = require('express')
const router = express.Router();
const normasController = require('../controllers/normasController')

router.post('/v1/inserirNorma',normasController.inserirNorma)
router.put('/v1/atualizarNorma',normasController.atualizarNorma)
router.get('/v1/exibirNormas',normasController.listarNormas)
router.get('/v1/exibirNorma/:codigo',normasController.listarNorma)


module.exports = router