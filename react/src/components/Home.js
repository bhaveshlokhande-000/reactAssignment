import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import TodoList from "./TodoList";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  deleteTodos,
} from "../services/todoService";

function Home() {
  const filter = useRef(false);
  const [todos, setTodos] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function get() {
      let response;
      try {
        response = await getTodos();
        if (response.success) {
          setTodos(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    get();
  }, []);

  const searchArticles = (keyword) => {
    let result;
    if (keyword !== "") {
      result = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(keyword.trim().toLowerCase());
      });
      filter.current = true;
      setSearchResult(result);
    } else {
      filter.current = false;
      setSearchResult();
    }
  };

  const addTodoHandler = async (todo) => {
    let response;
    try {
      response = await addTodo(todo);
      if (response.success) {
        const id = response.data.id;
        setTodos([...todos, { ...todo, id }]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodoHandler = async (id, updatedTodo) => {
    let response;
    try {
      response = await updateTodo(id, updatedTodo);
      if (response.success) {
        const result = todos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        );
        setTodos(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodoHandler = async (id) => {
    let response;
    try {
      response = await deleteTodo(id);
      if (response.success) {
        const result = todos.filter((todo) => todo.id !== id);
        setTodos(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodosHandler = async () => {
    let response;
    try {
      response = await deleteTodos();
      if (response.success) {
        setTodos([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <TodoList
                {...props}
                todos={filter.current ? searchResult : todos}
                deleteTodosHandler={deleteTodosHandler}
                search={searchArticles}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddForm {...props} addTodoHandler={addTodoHandler} />
            )}
          />

          <Route
            path="/update/:id"
            render={(props) => (
              <UpdateForm
                {...props}
                updateTodoHandler={updateTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
