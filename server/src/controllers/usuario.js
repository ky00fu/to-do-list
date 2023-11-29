const con = require('../dao/connect')
const Usuario = require('../models/usuario')

const teste = (req, res) => {
    res.json("Funcionando").end()
}

const criar = (req, res) => {
    let usuario = new Usuario(req.body)

    con.query(usuario.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const logar = (req, res) => {
    let usuario = new Usuario(req.body)

    con.query(usuario.entrar(), (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                res.status(202).json(result).end()
            } else {
                res.status(404).json(result).end()
            }
        } else {
            res.status(500).json("Banco de dados não respondeu").end()
        }
    })
}

const listar = (req, res) => {
    let usuario = new Usuario(req.params)
    
    con.query(usuario.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    logar
}