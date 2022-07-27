import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todos";
import Todo from "../models/todo";

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  // TODO add styling togling
  const dispatch = useAppDispatch();
  const toggleTaskHandler = (id: string) => {
    dispatch(todosActions.toggleTask(id));
  };

  return (
    <li>
      <button onClick={toggleTaskHandler.bind(null, props.item.id)}>O</button>
      <p>{props.item.text}</p>
    </li>
  );
};
export default TodoItem;
