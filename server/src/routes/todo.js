const express = require("express")
const router = express.Router()

const ToDo = require('../controllers/ToDo')

router.get('/', ToDo.teste)
router.post('/todo/criar', ToDo.criar)
router.get('/todo/listar', ToDo.listar)
router.put('/todo/alterar/:id', ToDo.alterar)

module.exports = router