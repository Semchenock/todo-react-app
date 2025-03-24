import { FC } from "react";
import { useSelector } from "react-redux";

import { selectAllTodos, selectShownType } from "@store/selectors";
import { ShownType } from "@store/types";
import { Todo } from "@models/todo";

import { TodoItem } from "./TodoItem";
import classes from "./TodosList.module.css";

export const TodoList: FC = () => {
  const allTodos = useSelector(selectAllTodos);
  const shownType = useSelector(selectShownType);

  const todoIsValid = (todo: Todo): boolean => {
    switch (shownType) {
      case ShownType.ALL:
        return true;
      case ShownType.ACTIVE:
        return !todo.isDone;
      case ShownType.COMPLETED:
        return todo.isDone;
      default:
        return false;
    }
  };

  const shownTodos = allTodos.filter((item: Todo): boolean =>
    todoIsValid(item)
  );

  return (
    <ul className={classes.todosList}>
      {shownTodos.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
