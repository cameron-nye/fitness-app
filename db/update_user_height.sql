UPDATE users
SET user_height = $1
WHERE id = $2;

SELECT user_height
FROM users
WHERE id = $2;