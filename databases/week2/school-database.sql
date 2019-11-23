-- ## School database
CREATE DATABASE school;
USE school;

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
);