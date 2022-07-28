import { useAppSelector, useAppDispatch } from "../hooks";
import { todosActions } from "../store/todos";
import classes from "./TodosNav.module.css";
const TodosNav = () => {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.todos.allTodos);
  const shownType = useAppSelector((state) => state.todos.shownType);

  const leftActive = allTodos.reduce((left: number, todo) => {
    if (!todo.isDone) left++;
    return left;
  }, 0);

  const changeShownHandler = (shownType: string) => {
    dispatch(todosActions.changeShownType(shownType));
  };

  const clearComplitedHandler = () => {
    dispatch(todosActions.deleteComplited());
  };

  const allStyle = shownType === "all" ? classes.active : "";
  const activeStyle = shownType === "active" ? classes.active : "";
  const complitedStyle = shownType === "complited" ? classes.active : "";
  return (
    <nav className={classes.navigation}>
      <span>{`${leftActive} items left`}</span>
      <div className={classes.filter}>
        <button
          className={allStyle}
          onClick={changeShownHandler.bind(null, "all")}
        >
          All
        </button>
        <button
          className={activeStyle}
          onClick={changeShownHandler.bind(null, "active")}
        >
          Active
        </button>
        <button
          className={complitedStyle}
          onClick={changeShownHandler.bind(null, "complited")}
        >
          Complited
        </button>
      </div>
      <button className={classes.clear} onClick={clearComplitedHandler}>
        Clear complited
      </button>
    </nav>
  );
};
export default TodosNav;
