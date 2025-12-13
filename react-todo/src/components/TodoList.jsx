import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Cleaning",
      description: "Cleaning the house for 30 minutes",
      completed: false,
    },
    {
      id: 2,
      task: "Drawing",
      description: "Draw my favourite dog on A4 paper",
      completed: false,
    },
    {
      id: 3,
      task: "Coding",
      description: "Code for 1 hour to learn more about Python",
      completed: false,
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim() || !description.trim()) return;
    addTodo({ id: Date.now(), task, description, completed: false });
    setTask("");
    setDescription("");
  };

  return (
    <>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ display: "block", marginBottom: "0.5rem" }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ display: "block", marginBottom: "0.5rem" }}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {todos.map((item) => (
          <div
            key={item.id}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "0.5rem",
            }}
            onClick={() => toggleTodo(item.id)}
          >
            <h2>Task: {item.task}</h2>
            <p>Description: {item.description}</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle when clicking delete
                deleteTodo(item.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
