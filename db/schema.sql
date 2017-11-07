CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NULL,
devoured BOOLEAN default 0,
date TIMESTAMP,
PRIMARY KEY (id)
);