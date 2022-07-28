import { useAppSelector } from "../hooks";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./TodosList.module.css";
const TodosList = () => {
  const allTodos = useAppSelector((state) => state.todos.allTodos);
  const shownType = useAppSelector((state) => state.todos.shownType);

  const todoIsValid = (todo: Todo) => {
    switch (shownType) {
      case "all":
        return true;
      case "active":
        return !todo.isDone;
      case "complited":
        return todo.isDone;
      default:
        return false;
    }
  };

  const shownTodos = allTodos.filter((todo: Todo) => {
    return todoIsValid(todo);
  });

  return (
    <ul className={classes.todosList}>
      {shownTodos.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default TodosList;
