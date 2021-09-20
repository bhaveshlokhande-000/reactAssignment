import React, { useEffect, useState } from "react";

function UpdateForm(props) {
  const todo = props.location.state.todo;
  const id = todo.id;
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [published, setPublished] = useState(todo.published);

  useEffect(() => {
    changePublished();
  }, [published]);

  const updateTodo = () => {
    const updatedTodo = {
      title: title.trim(),
      description: description.trim(),
      published,
    };
    props.updateTodoHandler(id, updatedTodo);
    setTitle("");
    setDescription("");
    props.history.push("/");
  };

  const deleteTodo = () => {
    props.deleteTodoHandler(id);
    props.history.push("/");
  };

  const changePublished = () => {
    const updatedTodo = {
      published,
    };
    props.updateTodoHandler(id, updatedTodo);
  };

  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <h2 className="p-4">Tutorials</h2>
          <div className="p-4">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                placeholder="title"
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
                placeholder="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
            <span className="fw-bold">Status: </span>
            <span>{published ? "Published" : "Pending"}</span>
            <br></br>
            <br></br>
            {published ? (
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                  setPublished(false);
                }}
              >
                UnPublish
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-sm m-2 "
                onClick={() => {
                  setPublished(true);
                }}
              >
                Publish
              </button>
            )}

            <button
              type="button"
              className="btn btn-danger btn-sm  m-2"
              onClick={deleteTodo}
            >
              Delete
            </button>
            <button
              type="submit"
              className="btn btn-success btn-sm  m-2"
              disabled={
                title.trim().length === 0 || description.trim().length === 0
              }
              onClick={updateTodo}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;
