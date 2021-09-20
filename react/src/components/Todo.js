import React, { useEffect, useRef } from "react";

function Todo(props) {
  const { todo, setTodo } = props;
  const ref = useRef(null);
  console.log(ref.current?.classList, 1);

  useEffect(() => {
    console.log("todo first chla");
  }, []);

  useEffect(() => {
    console.log("todo chla");
  });

  return (
    <>
      <li
        className="list-group-item p-3"
        onClick={(e) => {
          ref.current?.classList.pop();
          e.target.classList.add("active");
          setTodo(todo);
          ref.current = e.target;
        }}
      >
        {todo.title}
      </li>
    </>
  );
}

export default Todo;
