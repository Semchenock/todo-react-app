import { FC } from "react";

import { TodoForm } from "@components/TodoForm";
import { TodoList } from "@components/TodoList";
import { TodoNav } from "@components/TodoNav";

import classes from "./App.module.css";

export const App: FC = () => (
  <>
    <header className={classes.header}>
      <h1>todos</h1>
    </header>
    <main className={classes.container}>
      <TodoForm />
      <TodoList />
      <TodoNav />
    </main>
  </>
);
