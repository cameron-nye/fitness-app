CREATE TABLE users(
id SERIAL PRIMARY KEY,
user_name VARCHAR(40),
picture TEXT,
user_age INTEGER,
user_height INTEGER,
user_weight INTEGER,
auth_id TEXT
);