SELECT goals.goal, goals.id
FROM goals
LEFT JOIN users ON goals.user_id = users.id
WHERE user_id = $1;