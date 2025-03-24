import { useDispatch, useSelector } from "react-redux";

import { selectAllTodos, selectShownType } from "@store/selectors";
import { todosActions } from "@store/actions";

import classes from "./TodoNav.module.css";
import { ShownType } from "@store/types";

/** Component filter tasks */
export const TodoNav = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(selectAllTodos);
  const shownType = useSelector(selectShownType);

  const leftActive = allTodos.reduce((left: number, todo) => {
    if (!todo.isDone) left++;
    return left;
  }, 0);

  const handleChangeShown = (shownType: string): void => {
    dispatch(todosActions.changeShownType(shownType));
  };

  const handleClearCompleted = (): void => {
    dispatch(todosActions.deleteCompleted());
  };

  const allStyle = shownType === ShownType.ALL ? classes.active : "";
  const activeStyle = shownType === ShownType.ACTIVE ? classes.active : "";
  const completedStyle =
    shownType === ShownType.COMPLETED ? classes.active : "";

  return (
    <nav className={classes.navigation}>
      <span>{`${leftActive} items left`}</span>
      <div className={classes.filter}>
        <button
          className={allStyle}
          onClick={() => handleChangeShown(ShownType.ALL)}
        >
          All
        </button>
        <button
          className={activeStyle}
          onClick={() => handleChangeShown(ShownType.ACTIVE)}
        >
          Active
        </button>
        <button
          className={completedStyle}
          onClick={() => handleChangeShown(ShownType.COMPLETED)}
        >
          Completed
        </button>
      </div>
      <button className={classes.clear} onClick={handleClearCompleted}>
        <label className={classes.foolText}>Clear completed</label>
        <label className={classes.shortText}>Clear</label>
      </button>
    </nav>
  );
};
