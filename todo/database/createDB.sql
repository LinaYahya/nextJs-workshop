CREATE DATABASE newNote;
CREATE USER newNoteUser
WITH superuser password '123abc';
ALTER DATABASE newNote OWNER TO newNoteUser;