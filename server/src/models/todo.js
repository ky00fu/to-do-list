class ToDo {
    constructor(i) {
        this.id = i.id
        this.usuarioid = i.usuarioid
        this.description = i.description
        this.status = i.status
    }

    create() {
        return `INSERT INTO tarefa VALUES(NULL, '${this.usuarioid}', '${this.description}', 1)`
    }

    read() {
        if (this.usuarioid == undefined)
            return `SELECT * FROM tarefa`
        else
            return `SELECT * FROM tarefa WHERE usuarioid = ${this.usuarioid}`
    }

    readStatus() {
        if (this.status == undefined)
            return `SELECT * FROM tarefa`
        if (this.status == 1)
            return `SELECT * FROM tarefa WHERE status = 1`
        if (this.status == 0)
            return `SELECT * FROM tarefa WHERE status = 0`
    }

    update() {
        return `UPDATE tarefa SET status = 0 WHERE id = ${this.id}`
    }

    delete() {
        if (this.id == undefined)
            return `DELETE FROM tarefa WHERE status = 0`
        else
            return `DELETE FROM tarefa WHERE id = '${this.id}'`
    }
}

module.exports = ToDo