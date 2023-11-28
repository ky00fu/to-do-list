DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist CHARSET=UTF8 COLLATE utf8_general_ci;
USE todolist;

CREATE TABLE usuario (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    telefone VARCHAR(20),
    email VARCHAR(30),
    senha VARCHAR(20)
);

CREATE TABLE tarefa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    status VARCHAR(10) NOT NULL
);