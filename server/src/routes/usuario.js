const express = require("express")
const router = express.Router()

const Usuario = require('../controllers/ToDo')

router.get('/', ToDo.teste)
router.post('/todo', ToDo.criar)
router.get('/todo', ToDo.listar)
router.put('/todo/:id', ToDo.alterar)

module.exports = router