USE hyf_db_lesson1;

-- 1. Find out how many tasks are in the task table
SELECT COUNT(id) AS 'total number of tasks'
FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) AS 'total number of tasks without due date'
FROM task
WHERE due_date IS NULL;

-- 3. Find all the tasks that are marked as done
SELECT title, status_id
FROM task
WHERE status_id = 3;

-- 4. Find all the tasks that are not marked as done
SELECT title, status_id
FROM task
WHERE status_id != 3;

-- 5. Get all the tasks, sorted with the most recently created first
SELECT title, created
FROM task
ORDER BY created DESC;

-- 6. Get the single most recently created task
SELECT title, created
FROM task
ORDER BY created DESC
LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE title LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT title, s.name AS status
FROM task t
JOIN status s
	ON t.status_id = s.id;
    
-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT s.name AS status, COUNT(t.title) AS 'number of tasks'
FROM status s
JOIN task t
	ON s.id = t.status_id
GROUP BY s.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT s.name AS status, COUNT(t.title) AS task_count
FROM status s
JOIN task t
	ON s.id = t.status_id
GROUP BY s.name
ORDER BY task_count DESC;
