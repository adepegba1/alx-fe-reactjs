function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <div>
        {todos.map((item) => (
          <div
            key={item.id}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(item.id)}
          >
            <h2>Task: {item.task}</h2>
            <p>Description: {item.description}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
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

export default TodoList;
