import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { todosActions } from "store/actions";
import icon from "assets/img/down-chevron.png";

import classes from "./TodoForm.module.css";

/** Component Create New Task */
export const TodoForm: FC = () => {
  const dispatch = useDispatch();

  const [taskInputValue, setTaskInputValue] = useState<string>("");
  const isTaskInputValid = taskInputValue.trim() !== "";

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const enteredText = taskInputValue.trim();
    dispatch(todosActions.add(enteredText));
    setTaskInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTaskInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <button disabled={!isTaskInputValid} type="submit" data-testid="add">
        <img src={icon} alt="Add" />
      </button>
      <input
        className={classes.foolText}
        type="text"
        id="task"
        autoComplete="off"
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={taskInputValue}
      />
      <input
        className={classes.shortText}
        type="text"
        id="task"
        autoComplete="off"
        placeholder="New todo..."
        onChange={handleChange}
        value={taskInputValue}
      />
    </form>
  );
};
