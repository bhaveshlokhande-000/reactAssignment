import React, { useState, useRef } from "react";
import TodoDescription from "./TodoDescription";

function TodoList(props) {
  const [selectedTodo, setSelectedTodo] = useState();
  const ref = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { todos, deleteTodosHandler, search } = props;
  return (
    <>
      <div className="row m-4 p-2">
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            ></input>
            <button
              type="button"
              className="input-group-text bg-white"
              onClick={() => {
                setSelectedTodo(null);
                search(searchKeyword);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-5">
          <h2 className="p-1">Tutorials List</h2>
          <ul className="list-group">
            {todos.map((todo, key) => (
              <li
                key={key + searchKeyword}
                className="list-group-item p-3"
                onClick={(e) => {
                  ref.current?.classList.remove("active");
                  e.target.classList.add("active");
                  setSelectedTodo(todo);
                  ref.current = e.target;
                }}
              >
                {todo.title}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-danger btn-sm mt-2"
            onClick={() => {
              setSelectedTodo(null);
              deleteTodosHandler();
            }}
            disabled={todos.length === 0}
          >
            Remove All
          </button>
        </div>
        <div className="col-6 p-1 offset-1">
          {selectedTodo && <TodoDescription todo={selectedTodo} />}
        </div>
      </div>
    </>
  );
}

export default TodoList;
