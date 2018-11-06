const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')


router.get('/nova', controller.novaForm)

router.post('/nova', controller.nova)

router.get('/categoria/:categoria', controller.get)

router.get('/excluir/:categoria/:id', controller.apagar)

router.get('/editar/:categoria/:id', controller.editarForm)

router.post('/editar/:categoria/:id', controller.editar)


module.exports = router