import React from "react";
import { Link } from "react-router-dom";

function TodoDescription(props) {
  const { title, description, published, id } = props.todo;
  return (
    <>
      <h2 className="">Tutorials</h2>
      <span className="fw-bold">Title: </span>
      <span>{title}</span>
      <br></br>
      <span className="fw-bold">Description: </span>
      <span>{description}</span>
      <br></br>
      <span className="fw-bold">Status: </span>
      <span>{published ? "Published" : "Pending"}</span>
      <br></br>
      <Link to={{ pathname: `/update/${id}`, state: { todo: props.todo } }}>
        <button type="button" className="btn btn-warning btn-sm mt-2">
          Edit
        </button>
      </Link>
    </>
  );
}
export default TodoDescription;
