import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import TodosList from "./TodosList";
import TodosNav from "./TodosNav";

const render = (component: React.ReactNode) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};
describe("TodosNav component", () => {
  test("all tasks shown by default", () => {
    render(
      <>
        <TodosList />
        <TodosNav />
      </>
    );
    const tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(3);
  });
  test("complited tasks shown properly", () => {
    render(
      <>
        <TodosList />
        <TodosNav />
      </>
    );
    const btns = screen.getAllByTestId("complite togler");
    const complitedBtn = screen.getByText("Complited");
    const tasks = screen.getAllByTestId("task");
    userEvent.click(btns[0]);
    expect(tasks).toHaveLength(3);
    userEvent.click(complitedBtn);
    const complitedTasks = screen.getAllByTestId("task");
    expect(complitedTasks).toHaveLength(1);
  });
  //   test("active tasks shown properly", () => {
  //     render(
  //       <>
  //         <TodosList />
  //         <TodosNav />
  //       </>
  //     );
  //     const btns = screen.getAllByTestId("complite togler");
  //     const activeBtn = screen.getByText("Active");
  //     const tasks = screen.getAllByTestId("task");
  //     userEvent.click(btns[0]);
  //     expect(tasks).toHaveLength(3);
  //     userEvent.click(activeBtn);
  //     const activeTasks = screen.getAllByTestId("task");
  //     expect(activeTasks).toHaveLength(2);
  //   });
});
