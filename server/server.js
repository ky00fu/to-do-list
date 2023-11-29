const express = require('express')
const cors = require('cors')

const PORT = 3000

const routerTodo = require('./src/routes/todo')
const routerUsuario = require('./src/routes/usuario')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', routerTodo)
app.use('/', routerUsuario)

app.listen(PORT, () => {
    console.log("Funcionando")
})