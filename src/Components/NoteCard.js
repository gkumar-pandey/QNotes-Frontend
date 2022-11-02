import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackspace,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const NoteCard = ({ note, deleteHandler, editHandler }) => {
  const id = note._id;
  return (
    <div style={NoteCardStyle.container}>
      <div style={NoteCardStyle.heading}>
        <h2>{note.title} </h2>
      </div>
      <div style={NoteCardStyle.disc}>
        <p>{note.description}</p>
      </div>
      <div style={NoteCardStyle.btnContainer}>
        <FontAwesomeIcon
          style={NoteCardStyle.editIcon}
          onClick={() => editHandler(note)}
          icon={faPenToSquare}
        />

        <FontAwesomeIcon
          onClick={() => deleteHandler(id)}
          style={NoteCardStyle.deleteIcon}
          icon={faTrash}
        />
      </div>
    </div>
  );
};

const NoteCardStyle = {
  container: {
    border: "1px solid black",
    margin: "0.5rem",
    minWidth: "300px",
    padding: "0.3rem",
    borderRadius: "8px",
  },
  editIcon: {
    color: "green",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  heading: {
    textAlign: "center",
  },
  disc: {
    textAlign: "center",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
  },
  btn: {
    padding: "2px 5px",
    fontSize: "0.8rem",
    margin: "0 0.5rem",
  },
  deleteIcon: {
    color: "red",
    fontSize: "1.5rem",
    cursor: "pointer",
    margin: "0 1rem",
  },
};

export default NoteCard;
