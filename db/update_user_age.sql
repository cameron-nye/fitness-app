UPDATE users
SET user_age = $1
WHERE id = $2;

SELECT user_age
FROM users
WHERE id = $2;
