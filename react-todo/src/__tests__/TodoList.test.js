import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Cleaning/i)).toBeInTheDocument();
  expect(screen.getByText(/Drawing/i)).toBeInTheDocument();
  expect(screen.getByText(/Coding/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Task name/i), {
    target: { value: "New Task" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), {
    target: { value: "New Desc" },
  });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Cleaning/i).closest("div");
  expect(todo).not.toHaveStyle("text-decoration: line-through");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteBtn = screen.getByText(/Delete/i);
  fireEvent.click(deleteBtn);
  expect(screen.queryByText(/Cleaning/i)).not.toBeInTheDocument();
});
