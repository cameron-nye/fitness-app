UPDATE goals
SET goal = $1
WHERE id = $2;

SELECT *
FROM goals
WHERE user_id = $3
ORDER BY id;