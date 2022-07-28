import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todos";
import Todo from "../models/todo";
import DoneBtn from "./DoneBtn";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  const dispatch = useAppDispatch();
  const toggleTaskHandler = () => {
    dispatch(todosActions.toggleTask(props.item.id));
  };
  const todoItemStyle = `${classes.todoItem} ${
    props.item.isDone ? classes.done : ""
  }`;

  return (
    <li className={todoItemStyle}>
      <DoneBtn isDone={props.item.isDone} clickHandler={toggleTaskHandler} />
      <p data-testid="task">{props.item.text}</p>
    </li>
  );
};
export default TodoItem;
