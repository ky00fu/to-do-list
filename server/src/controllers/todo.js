const con = require('../dao/connect')
const ToDo = require('../models/todo')

const teste = (req, res) => {
    res.json("Funcionando").end()
}

const criar = (req, res) => {
    let todo = new ToDo(req.body)
    
    con.query(todo.create(), (err, result) => {
        if (err == null)
            res.status(201).json(result.body).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let todo = new ToDo(req.params)

    con.query(todo.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const listarStatus = (req, res) => {
    let todo = new ToDo(req.params)

    con.query(todo.readStatus(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let todo = new ToDo(req.params)

    con.query(todo.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(201).end()
        else
            res.status(500).end()
    })
}

const excluir = (req, res) => {
    let todo = new ToDo(req.params)

    con.query(todo.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).json(req.body).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    listarStatus,
    alterar,
    excluir
}