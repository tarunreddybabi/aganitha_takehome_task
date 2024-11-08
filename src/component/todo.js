import React, { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      if (isEdit) {
        const updateTodos=[...todoList]
        updateTodos[editIndex]=todo
        setTodoList(updateTodos)
        setEditIndex(null)
        setIsEdit(false)
      }
      else{
        setTodoList([...todoList,todo])
      }
      setTodo("")
    }
  };

  const handleDelete = (ind) => {
    const updateTodo = todoList.filter((_, index) => index !== ind);
    setTodoList(updateTodo);
  };

  const handleUpdate = (ind) => {
    setTodo(todoList[ind]);
    setIsEdit(true);
    setEditIndex(ind);
  };

  return (
    <div style={{ padding: "8px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            background: "#306bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "2px 4px 2px 4px",
          }}
        >
          {isEdit ? "Update Todo" : "Submit Todo"}
        </button>
      </form>
      <div>
        <ol>
          {todoList.map((todos, ind) => (
            <div style={{ display: "flex", gap: "6px", padding: "2px" }}>
              <li key={ind}>{todos}</li>
              <button
                onClick={() => {
                  handleUpdate(ind);
                }}
                style={{
                  background: "#306bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "2px 4px 2px 4px",
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  handleDelete(ind);
                }}
                style={{
                  background: "#306bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "2px 4px 2px 4px",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}
