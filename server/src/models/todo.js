class ToDo {
    constructor(i) {
        this.id = i.id
        this.description = i.description
        this.date = i.date
        this.status = i.status
    }

    create() {
        return `INSERT INTO tarefa VALUES(NULL, '${this.description}',NULL,'To Do')`
    }

    read() {
        return `SELECT * FROM tarefa`
    }

    update() {
        return `UPDATE tarefa SET status = 'Done' WHERE id = ${this.id}`
    }
}

module.exports = ToDo