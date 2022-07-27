import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todos";
import classes from "./TodoForm.module.css";
import icon from "../assets/img/down-chevron.png";
const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [taskInputValue, setTaskInputValue] = useState("");
  const isTaskInputValid = taskInputValue.trim() !== "";
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = taskInputValue.trim();
    dispatch(todosActions.add(enteredText));
    setTaskInputValue("");
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInputValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <button disabled={!isTaskInputValid} type="submit">
        <img src={icon} alt="Add" />
      </button>
      <input
        type="text"
        id="task"
        autoComplete="off"
        placeholder="What needs to be done?"
        onChange={changeHandler}
        value={taskInputValue}
      />
    </form>
  );
};
export default TodoForm;
