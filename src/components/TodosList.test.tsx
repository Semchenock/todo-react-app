import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import TodosList from "./TodosList";

const render = (component: React.ReactNode) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};
describe("TodosList component", () => {
  test("renders default tasks properly", () => {
    render(<TodosList />);
    const task = screen.getByText("Тестовое задание");
    expect(task).toBeInTheDocument();
  });
  test("if toggle button was clicked task become complited", () => {
    render(<TodosList />);
    const btns = screen.getAllByRole("button");
    const imgsBefore = screen.getAllByAltText("not done");
    expect(imgsBefore[0]).toBeInTheDocument();
    userEvent.click(btns[0]);
    const img = screen.getByAltText("done");
    expect(img).toBeInTheDocument();
  });
});
