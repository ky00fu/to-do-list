class Usuario {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.email = i.email;
    this.senha = i.senha;
  }

  create() {
    return `INSERT INTO usuario VALUE (NULL,'${this.nome}', '${this.email}', PASSWORD('${this.senha}'))`;
  }

  read() {
    if (this.id == undefined) return `SELECT * FROM usuario`;
    else return `SELECT * FROM usuario WHERE id = '${this.id}'`;
  }

  entrar() {
    return `SELECT * FROM usuario WHERE email = '${this.email}' AND senha = PASSWORD('${this.senha}')`;
  }
}

module.exports = Usuario;
