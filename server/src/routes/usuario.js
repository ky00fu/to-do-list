const express = require("express")
const router = express.Router()

const Usuario = require('../controllers/Usuario')

router.get('/', Usuario.teste)
router.post('/usuario/cadastrar', Usuario.criar)
router.post('/usuario', Usuario.logar)
router.get('/usuario', Usuario.listar)
router.get('/usuario/:id', Usuario.listar)

module.exports = router