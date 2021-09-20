import React, { useState } from "react";

function AddForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: title.trim(),
      description: description.trim(),
      published: true,
    };
    props.addTodoHandler(todo);
    setTitle("");
    setDescription("");
    props.history.push("/");
  };

  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <h2 className="p-4">Tutorials</h2>
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                placeholder="enter title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                className="form-control"
                placeholder="enter description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-success btn-sm"
              disabled={
                title.trim().length === 0 || description.trim().length === 0
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddForm;
