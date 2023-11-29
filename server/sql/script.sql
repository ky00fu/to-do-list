DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist CHARSET=UTF8 COLLATE utf8_general_ci;
USE todolist;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE tarefa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuarioid INT NOT NULL,
    description TEXT NOT NULL,
    status INT NOT NULL,
    FOREIGN KEY (usuarioid) REFERENCES usuario(id)
);