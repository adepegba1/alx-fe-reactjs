import { render, screen, fireEvent } from "@testing-library/react";
import { TodoApp } from "../components/AddTodoForm"; // adjust the import to your file location

// ⿡  Initial render test
test("renders the initial list of todos", () => {
  render(<TodoApp />);

  // The three demo todos from initialTodos
  expect(screen.getByText(/Cleaning/i)).toBeInTheDocument();
  expect(screen.getByText(/Drawing/i)).toBeInTheDocument();
  expect(screen.getByText(/Coding/i)).toBeInTheDocument();
});

// ⿢  Adding a todo test
test("adds a new todo when the form is submitted", () => {
  render(<TodoApp />);

  const taskInput = screen.getByPlaceholderText(/Task name/i);
  const descInput = screen.getByPlaceholderText(/Description/i);
  const submitBtn = screen.getByText(/Add Todo/i);

  // Fill the form
  fireEvent.change(taskInput, { target: { value: "New Task" } });
  fireEvent.change(descInput, { target: { value: "New Description" } });

  // Submit
  fireEvent.click(submitBtn);

  // Verify the new todo appears
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  expect(screen.getByText(/New Description/i)).toBeInTheDocument();
});

// ⿣  Toggling a todo test
test("toggles a todo between completed / not completed", () => {
  render(<TodoApp />);

  // Grab the first demo todo element (you can target by text or role)
  const firstTodo = screen.getByText(/Cleaning/i).closest("div");

  // Initially not completed – no line‑through
  expect(firstTodo).not.toHaveStyle("text-decoration: line-through");

  // Click to mark as completed
  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveStyle("text-decoration: line-through");

  // Click again to un‑complete
  fireEvent.click(firstTodo);
  expect(firstTodo).not.toHaveStyle("text-decoration: line-through");
});

// ⿤  Deleting a todo test
test("deletes a todo when the delete button is clicked", () => {
  render(<TodoApp />);

  // There are three items initially
  const todosBefore = screen.getAllByRole("button", { name: /Delete/i });
  expect(todosBefore).toHaveLength(3);

  // Click the delete button of the second todo (Drawing)
  const secondTodoDeleteBtn = screen
    .getByText(/Drawing/i)
    .closest("div")
    .querySelector("button");
  fireEvent.click(secondTodoDeleteBtn);

  // Now only two delete buttons remain
  const todosAfter = screen.getAllByRole("button", { name: /Delete/i });
  expect(todosAfter).toHaveLength(2);

  // Ensure the removed todo is gone from the DOM
  expect(screen.queryByText(/Drawing/i)).not.toBeInTheDocument();
});
