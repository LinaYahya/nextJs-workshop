const connection = require("../config/connection");

const getNotes = () => connection.query("SELECT * FROM notes");

const addNote = (title, desc) =>
  connection.query({
    text: "INSERT INTO notes (title, description) VALUES ($1, $2)",
    values: [title, desc],
  });

module.exports = {
  getNotes,
  addNote,
};
