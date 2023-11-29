const express = require("express")
const router = express.Router()

const ToDo = require('../controllers/ToDo')

router.get('/', ToDo.teste)
router.post('/todo', ToDo.criar)

router.get('/todo', ToDo.listar)
router.get('/todo/:status', ToDo.listarStatus)
router.get('/todo/:status', ToDo.listarStatus)
router.get('/todo/user/:usuarioid', ToDo.listar)

router.put('/todo/:id', ToDo.alterar)

router.delete('/todo', ToDo.excluir);
router.delete('/todo/:id', ToDo.excluir);

module.exports = router