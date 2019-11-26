-- ## Working with tasks
USE hyf_db_lesson1;

-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task (
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
) VALUES (
    'Sing a song when you wake up',
    'get energized in the morning',
    DATE(NOW()),
    DATE(NOW()),
    '2019-12-31 00:00:00',
    1,
    11
    );

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task
SET title = 'Sing a song ASAP when you wake up'
WHERE id = 40;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task
SET due_date = '2019-12-31 23:59:59'
WHERE id = 40;

-- Change the task status with these attributes: taskID, newStatus
UPDATE task
SET status_id = 2
WHERE id = 40;

-- Mark a task as complete with this attribute: taskID
UPDATE task
SET status_id = 3
WHERE id = 40;

-- Delete task with this attribute: taskID
DELETE FROM task
WHERE id = 40;
