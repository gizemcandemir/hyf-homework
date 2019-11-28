-- Create all the sql for creating this data model: 
-- https://dbdiagram.io/d/5d5bff66ced98361d6ddc18c
CREATE SCHEMA meal_sharing;
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
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `number_of_guests` INT UNSIGNED NOT NULL,
    `meal_id` INT UNSIGNED, 
    `created_date` DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES `meal` (id)
);

CREATE TABLE `review` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `meal_id` INT UNSIGNED,
    `stars` INT UNSIGNED,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES `meal` (id)
);

-- [MEAL]
-- Get all meals
SELECT * from meal;

-- Add a new meal
INSERT INTO `meal` (
	`title`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Turkish brunch",
    "Nørrebro",
    "2019-12-01",
    4,
    25,
    NOW()
);

-- Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. 
-- Update any attribute fx the title or multiple attributes
UPDATE meal
SET description = "Including 'sucuklu yumurta' and 'börek'", price = 119
WHERE id = 1;

-- Delete a meal with any id, fx 1
-- DELETE FROM meal
-- WHERE id = 1;

-- [RESERVATION]
-- Get all reservations
SELECT * from reservation;

-- Add a new reservation
INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    3,
    1,
    NOW()
);

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. 
-- Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 4
WHERE id = 1;

-- Delete a reservation with any id, fx 1
-- DELETE FROM reservation
-- WHERE id = 1;

-- [REVIEW]
-- Get all reviews
SELECT * from review;

-- Add a new review
INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
    "Delicious",
    "Amazing brunch with a great selection of Turkish cuisine",
    1,
    5,
    NOW()
);

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. 
-- Update any attribute fx the title or multiple attributes
UPDATE review
SET title = "Delicious food!!"
WHERE id = 1;

-- Delete a review with any id, fx 1
-- DELETE FROM review
-- WHERE id = 1;

-- [ADDITIONAL QUERIES]
INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Danish brunch",
    "Sausages, omlette and pancakes",
    "Østerbro",
    "2019-12-05",
    4,
    120,
    NOW()
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Vegan brunch",
    "Oatmeal grød with almond milk",
    "Vesterbro",
    "2019-12-05",
    4,
    99,
    NOW()
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Danish brunch",
    "Sausages, omlette and pancakes",
    "Østerbro",
    "2019-11-25",
    4,
    120,
    "2019-11-25"
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Turkish brunch",
    "Including 'sucuklu yumurta' and 'börek'",
    "Nørrebro",
    "2019-11-26",
    4,
    119,
    "2019-11-26"
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Vegan brunch",
    "Oatmeal grød with almond milk",
    "Vesterbro",
    "2019-11-27",
    2,
    99,
    "2019-11-27"
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Turkish brunch",
    "Including 'sucuklu yumurta' and 'börek'",
    "Nørrebro",
    "2019-12-03",
    4,
    119,
    "2019-11-26"
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Turkish brunch",
    "Including 'sucuklu yumurta' and 'börek'",
    "Nørrebro",
    "2019-12-02",
    4,
    119,
    "2019-11-25"
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Vegan brunch",
    "Oatmeal grød with almond milk",
    "Vesterbro",
    "2019-12-02",
    4,
    99,
    "2019-11-25"
);

INSERT INTO `meal` (
	`title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
) VALUES (
	"Danish brunch",
    "Sausages, omlette and pancakes",
    "Østerbro",
    "2019-12-04",
    4,
    120,
    "2019-11-25"
);

INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    2,
    2,
    "2019-11-27"
);

INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    2,
    3,
    "2019-11-27"
);

INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    4,
    1,
    "2019-11-25"
);

INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    2,
    2,
    NOW()
);

INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    4,
    2,
    "2019-12-01"
);

INSERT INTO `reservation` (
    `number_of_guests`,
    `meal_id`,
    `created_date`
) VALUES (
    4,
    3,
    "2019-12-01"
);

INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
    "Expensive",
    "Taste was ok but they charge too much for an oat meal",
    3,
    2,
    NOW()
);

INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
    "Nice",
    "We liked the taste of everything",
    2,
    4,
    NOW()
);

INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
    "Amazing",
    "The best brunch I have ever had",
    1,
    5,
    NOW()
);

INSERT INTO `review` (
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
) VALUES (
    "Average",
    "It was alright but maybe I had bigger expectations and it couldn't fulfill them.",
    2,
    3,
    NOW()
);

-- [FUNCTIONALITY]
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 100;

-- Get meals that still has available reservations
SELECT * FROM meal
WHERE `when` > "2019-11-27";

-- Get meals that partially match a title. 
-- Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE `title` LIKE "%vegan%";

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date between "2019-11-26" and CURDATE()
ORDER BY created_date;

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
WHERE created_date between "2019-11-26" and CURDATE()
ORDER BY created_date
LIMIT 5;

-- Get the meals that have good reviews
SELECT meal.title, meal.description, meal.location, meal.when, meal.max_reservations, meal.price, review.stars
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars >= 3;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.title, meal.when, reservation.created_date AS reservation_created_date
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.title = "Turkish Brunch"
ORDER BY reservation_created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title AS `meal`, AVG(review.stars) AS `average_rating`
FROM meal
JOIN review
ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average_rating DESC;