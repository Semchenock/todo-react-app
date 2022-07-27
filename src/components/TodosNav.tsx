import { useAppSelector, useAppDispatch } from "../hooks";
import { todosActions } from "../store/todos";
const TodosNav = () => {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.todos.allTodos);

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

  return (
    <nav>
      <span>{`${leftActive} items left`}</span>
      <div>
        <button onClick={changeShownHandler.bind(null, "all")}>All</button>
        <button onClick={changeShownHandler.bind(null, "active")}>
          Active
        </button>
        <button onClick={changeShownHandler.bind(null, "complited")}>
          Complited
        </button>
      </div>
      <button onClick={clearComplitedHandler}>Clear complited</button>
    </nav>
  );
};
export default TodosNav;
