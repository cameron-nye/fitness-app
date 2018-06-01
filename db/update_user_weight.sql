UPDATE users
SET user_weight = $1
WHERE id = $2;

SELECT user_weight
FROM users
WHERE id = $2;