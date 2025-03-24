import { ReactNode } from "react";
import { Provider } from "react-redux";
import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoList } from "components/TodoList";
import store from "store/index";

import { TodoNav } from "./TodoNav";

const render = (component: ReactNode) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};
describe("TodoNav component", () => {
  test("all tasks shown by default", () => {
    render(
      <>
        <TodoList />
        <TodoNav />
      </>
    );
    const tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(3);
  });
  test("completed tasks shown properly", () => {
    render(
      <>
        <TodoList />
        <TodoNav />
      </>
    );
    const btns = screen.getAllByTestId("complete toggler");
    const completedBtn = screen.getByText("Completed");
    const tasks = screen.getAllByTestId("task");
    userEvent.click(btns[0]);
    expect(tasks).toHaveLength(3);
    userEvent.click(completedBtn);
    const completedTasks = screen.getAllByTestId("task");
    expect(completedTasks).toHaveLength(1);
  });
  test("active tasks shown properly", () => {
    render(
      <>
        <TodoList />
        <TodoNav />
      </>
    );
    const activeBtn = screen.getByText("Active");
    userEvent.click(activeBtn);
    const activeTasks = screen.getAllByTestId("task");
    expect(activeTasks).toHaveLength(2);
  });
  test("left active shown properly", () => {
    render(
      <>
        <TodoList />
        <TodoNav />
      </>
    );
    const leftActive = screen.getByText("2 items left");
    expect(leftActive).toBeInTheDocument();
  });
  test("completed items deleted when button was clicked", () => {
    render(
      <>
        <TodoList />
        <TodoNav />
      </>
    );
    const cleanBtn = screen.getByText("Clear completed");
    const allBtn = screen.getByText("All");
    userEvent.click(cleanBtn);
    userEvent.click(allBtn);
    const leftTasks = screen.getAllByTestId("task");
    expect(leftTasks).toHaveLength(2);
  });
});
