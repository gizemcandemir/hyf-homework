-- ## School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
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

-- Create an index on the name column of the student table.
CREATE INDEX `student_name` 
ON `student` (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;