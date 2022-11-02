import React from "react";

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
        <button style={NoteCardStyle.btn} onClick={() => editHandler(note)}>
          Edit
        </button>
        <button
          onClick={(e) => deleteHandler(id, note)}
          style={NoteCardStyle.btn}
        >
          Delete
        </button>
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
  heading: {
    textAlign: "center",
  },
  disc: {
    textAlign: "center",
  },
  btnContainer: {
    // border: "1px solid red",
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
  },
  btn: {
    padding: "2px 5px",
    fontSize: "0.8rem",
    margin: "0 0.5rem",
  },
};

export default NoteCard;
