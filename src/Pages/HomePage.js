import React, { useEffect, useState } from "react";
import NoteCard from "../Components/NoteCard";
import { Container } from "@mui/material";
import FormComp from "../Components/FormComp";
import { serverLink } from "../Components/common";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { openNotificationWithIcon } from "../Components/AlertComp";

const HomePage = () => {
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const [idOfUpdateNote, setIdOfUpdateNote] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  // clear all inputes
  const clearInputs = () => {
    setTitle("");
    setDescription("");
  };

  const postNewNote = async () => {
    const newNote = {
      title: title,
      description: description,
    };

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${serverLink}note/`, newNote, config);
      setNotesData([data, ...notesData]);

      clearInputs();
      openNotificationWithIcon("success", "Created Successfully");
      setLoading(false);
    } catch (error) {}
  };
  const deleteNote = async (id) => {
    try {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.delete(`${serverLink}note/${id}`, config);
      const filterNote = notesData.filter((note) => note._id !== data._id);

      setNotesData(filterNote);
      openNotificationWithIcon("success", "Delete Successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(alertMsg);

  const updateNote = async (note) => {
    const id = idOfUpdateNote;

    const dataForUpdate = {
      title: title,
      description: description,
    };
    try {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const { data } = await axios.put(
        `${serverLink}note/${id}`,
        dataForUpdate,
        config
      );

      const newArray = notesData
        .filter((obj) => obj._id !== data._id)
        .concat(data);

      setNotesData(newArray);
      clearInputs();

      setLoading(false);
      openNotificationWithIcon("success", "Update Note Successfully");
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      setLoading(true);
      const { data } = await axios.get(`${serverLink}note/`, config);
      // console.log(data);
      setNotesData(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  const deleteHandler = (id, note) => {
    deleteNote(id);
  };
  const editHandler = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setIdOfUpdateNote(note._id);
    setIsEdit(true);
  };
  return (
    <div>
      <Container>
        <FormComp
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          postHandler={postNewNote}
          isEdit={isEdit}
          updateNote={updateNote}
        />
        {loading ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div style={coustemStyle.container}>
            {notesData.map((item, idx) => {
              return (
                <NoteCard
                  note={item}
                  key={idx}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                />
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

const coustemStyle = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default HomePage;
