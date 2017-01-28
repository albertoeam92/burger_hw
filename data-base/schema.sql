CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
	id int AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	devour tinyint(1), NOT NULL,
	PRIMARY KEY(id)
);




