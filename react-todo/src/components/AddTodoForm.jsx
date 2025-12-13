import { useState } from "react";
function AddTodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim() || !description.trim()) return;

    addTodo({
      id: Date.now(), // simple unique id
      task,
      description,
      completed: false,
    });

    setTask("");
    setDescription("");
  };

  return (
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
  );
}
export default AddTodoForm;
