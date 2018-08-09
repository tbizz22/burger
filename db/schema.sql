-- schema.sql 

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
ID int NOT NULL AUTO_INCREMENT,
BURGER VARCHAR(30) NOT NULL,
EATEN Boolean NOT NULL,
primary key (ID)
);