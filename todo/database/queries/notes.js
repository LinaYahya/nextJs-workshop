const connection = require("../config/connection");

const getNotes = () => connection.query("SELECT * FROM notes");

const addNote = (title, desc) =>
  connection.query({
    text: "INSERT INTO notes (title, description) VALUES ($1, $2) RETURNING *",
    values: [title, desc],
  });

const getNoteByID = (id) =>
  connection.query({
    text: "SELECT * FROM notes WHERE id =$1",
    values: [id],
  });

module.exports = {
  getNotes,
  addNote,
  getNoteByID,
};
