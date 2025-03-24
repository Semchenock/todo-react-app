import { FC } from "react";
import { useDispatch } from "react-redux";

import { todosActions } from "@store/actions";
import { Todo } from "@models/index";

import { DoneButton } from "./DoneButton";
import classes from "./TodoItem.module.css";

export const TodoItem: FC<{ item: Todo }> = ({ item }) => {
  const dispatch = useDispatch();

  const { id, isDone, text } = item;

  const handleToggleTask = (): void => {
    dispatch(todosActions.toggleTask(id));
  };

  const todoItemStyle = `${classes.todoItem} ${isDone ? classes.done : ""}`;

  return (
    <li className={todoItemStyle}>
      <DoneButton isDone={isDone} clickHandler={handleToggleTask} />
      <p data-testid="task">{text}</p>
    </li>
  );
};
