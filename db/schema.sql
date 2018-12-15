DROP DATABASE IF EXISTS dezvous_db;

CREATE DATABASE dezvous_db;
USE dezvous_db;

DROP TABLE IF EXISTS caterers;
CREATE TABLE caterers
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    website varchar(255) NOT NULL,
    phone_number varchar(45) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS locations;
CREATE TABLE locations
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    website varchar(255) NOT NULL,
    phone_number varchar(45) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS decoration_services;
CREATE TABLE decoration_services
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    website varchar(255) NOT NULL,
    phone_number varchar(45) NOT NULL,
    PRIMARY KEY (id)
);

