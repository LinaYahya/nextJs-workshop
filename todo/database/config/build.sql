BEGIN;
    DROP TABLE IF EXISTS notes
    CASCADE;

CREATE TABLE notes
(
    id SERIAL PRIMARY KEY NOT NULL,
    title text NOT NULL,
    description text NOT NULL
);

  INSERT INTO notes
        (title,description)
    VALUES
        ('meeting', 'meeting with client' ),
        ('study', 'styding nextJS'),
        ('have a dinner', 'with freinds');
    COMMIT;
