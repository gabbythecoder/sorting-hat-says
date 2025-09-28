CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_name TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS quiz_result (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    sorting_house TEXT NOT NULL CHECK (
        sorting_house IN ('gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff')
    ),
    user_id INT REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
)

INSERT INTO users (user_name) 
VALUES ('Gabby'), ('Sarah');

INSERT INTO quiz_result (sorting_house, user_id)
VALUES ('hufflepuff', 1), ('ravenclaw', 2);

SELECT sorting_house FROM quiz_result;

SELECT id, user_name FROM users WHERE user_name = 'Gabby';

SELECT quiz_result.sorting_house, users.id, users.user_name FROM users JOIN quiz_result ON users.id = quiz_result.user_id
ORDER BY quiz_result.created_at DESC;