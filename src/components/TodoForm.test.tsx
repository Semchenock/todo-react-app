import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("renders component", () => {
  render(<TodoForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
