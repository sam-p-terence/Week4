CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR (50),
  email_address VARCHAR (50)
);

CREATE TABLE user_password (
  user_password_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (user_id),
  password VARCHAR (100)
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(user_id),
  post_text VARCHAR(1000),
  post_image TEXT,
  post_timestamp TIMESTAMP,
  posts_visibility BOOLEAN
);

CREATE TABLE recipes (
  recipe_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (user_id),
  post_id INTEGER NOT NULL REFERENCES posts (post_id),
  recipe_name VARCHAR (50),
  instructions VARCHAR (50),
  share_recipe BOOLEAN,
  time_cooking FLOAT
);

CREATE TABLE ingredients (
  ingredients_id SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts (post_id),
  recipe_id INTEGER NOT NULL REFERENCES recipes (recipe_id),
  user_id INTEGER NOT NULL REFERENCES users (user_id),
  ingredients_name VARCHAR (50)
);




