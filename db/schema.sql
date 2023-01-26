DROP TABLE IF EXISTS adventures;

CREATE TABLE adventures (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL,
    rating INT NOT NULL,
    CHECK (rating >= 0 AND rating <= 5),
    adrenaline_approved BOOLEAN NOT NULL,
    image TEXT NOT NULL
);


-- name - a string, required
-- description - a string
-- price - a number
-- rating - a number between 0 and 5
-- featured - a boolean