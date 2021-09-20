import fetchError from "../helper/customException";
import ax from "axios";

const axios = ax.create({
  baseURL: "http://localhost:5000/api/v1/article",
});

async function getTodos() {
  try {
    const response = await axios.get("/");
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function addTodo(data) {
  try {
    const response = await axios.post("/", data);
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function updateTodo(id, data) {
  try {
    const response = await axios.put(`/${id}`, data);
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function deleteTodo(id) {
  try {
    const response = await axios.delete(`/${id}`);
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

async function deleteTodos() {
  try {
    const response = await axios.get("/deleteAll");
    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (err) {
    if (typeof err.text === "function") {
      let errorMessage = await err.text();
      throw new fetchError(err.status, errorMessage);
    } else {
      throw new Error(err);
    }
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo, deleteTodos };
