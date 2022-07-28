import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

const render = (component: React.ReactNode) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};
describe("TodoForm component", () => {
  test("button is disebled with no input", () => {
    render(<TodoForm />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("disabled");
  });
  test("button is disabled with wrong input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByRole("button");
    userEvent.type(input, "  ");
    expect(button).toHaveAttribute("disabled");
  });
  test("button is clickable with right input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByRole("button");
    userEvent.type(input, "Test");
    expect(button).not.toHaveAttribute("disabled");
  });
  test("task added when form submited", () => {
    render(
      <>
        <TodoForm />
        <TodosList />
      </>
    );
    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByTestId("add");
    userEvent.type(input, "Test");
    userEvent.click(button);
    const task = screen.getByText("Test");
    expect(task).toBeInTheDocument();
  });
});
