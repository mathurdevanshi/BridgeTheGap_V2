CREATE DATABASE users_db;

USE users_db;

CREATE TABLE users
(
    id int AUTO_INCREMENT,
    username varchar(30) NOT NULL,
    password varchar(10) NOT NULL,
    PRIMARY KEY (id)
)