class Usuario {
    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        // this.telefone = i.telefone
        this.status = i.status
    }

    create() {
        return `INSERT INTO tarefa VALUES(NULL, '${this.nome}',NULL,'To Do')`
    }

    read() {
        return `SELECT * FROM tarefa`
    }

    update() {
        return `UPDATE tarefa SET status = 'Done' WHERE id = ${this.id}`
    }
}

module.exports = Usuario