CREATE_TABLE goals (
  id SERIAL PRIMARY KEY,
  goal VARCHAR(300),
  user_id INTEGER REFERENCES users(id)
);
