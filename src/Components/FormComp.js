import React from "react";
import "./Form.css";

const FormComp = ({
  postHandler,
  title,
  setTitle,
  description,
  setDescription,
  isEdit,
  updateNote,
}) => {
  return (
    <>
      <div className="form-container">
        <div>
          <input
            className="heading"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="company"
            placeholder="Heading.."
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="discription..."
            rows="4"
            col="8"
          ></textarea>
          {isEdit ? (
            <button onClick={() => updateNote()}>Save</button>
          ) : (
            <button onClick={() => postHandler()}>Add</button>
          )}
        </div>
      </div>
    </>
  );
};

export default FormComp;
