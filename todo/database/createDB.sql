CREATE DATABASE notes;
CREATE USER noteUser
WITH superuser password '123abc';
ALTER DATABASE notes OWNER TO noteUser;