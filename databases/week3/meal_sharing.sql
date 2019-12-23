-- CREATE SCHEMA meal_sharing;
USE meal_sharing;

CREATE TABLE `meal` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT UNSIGNED NOT NULL,
    `price` DECIMAL NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `reservation` (
	`id` INT UNSIGNED NOT NULL,
    `number_of_guests` INT UNSIGNED NOT NULL,
    `meal_id` INT UNSIGNED AUTO_INCREMENT,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (meal_id)
);

CREATE TABLE `review` (
	`id` INT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `meal_id` INT UNSIGNED AUTO_INCREMENT,
    `stars` INT UNSIGNED,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (meal_id)
);

