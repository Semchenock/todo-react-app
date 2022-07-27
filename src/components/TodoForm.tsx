import { useRef } from "react";
import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todos";
const TodoForm = () => {
  const dispatch = useAppDispatch();
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = taskInputRef.current!.value.trim();
    if (enteredText === "") {
      // TODO add animation
      console.log("Wrong task!");
      return;
    }
    dispatch(todosActions.add(enteredText));
    taskInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <button type="submit">{/* TODO add icon */}Add</button>
      <input
        type="text"
        id="task"
        autoComplete="off"
        placeholder="What needs to be done?"
        ref={taskInputRef}
      />
    </form>
  );
};
export default TodoForm;
