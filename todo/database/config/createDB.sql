CREATE DATABASE newnote;
CREATE USER newnoteuser
WITH superuser password '123abc';
ALTER DATABASE newnote OWNER TO newnoteuser;