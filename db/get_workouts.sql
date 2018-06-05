SELECT * 
FROM workouts
LEFT JOIN users ON workouts.user_id = users.id
WHERE user_id = $1
ORDER BY date ASC;
