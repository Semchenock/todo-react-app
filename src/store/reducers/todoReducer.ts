import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "models/todo";

import { initialState } from "./constants";

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /** add new task action */
    add(state, action: PayloadAction<string>) {
      const newTodo = new Todo(action.payload);
      state.allTodos = [newTodo, ...state.allTodos];
    },

    /** toggle task isDone action */
    toggleTask(state, action: PayloadAction<string>) {
      const selectedTodoIndex = state.allTodos.findIndex((item) => {
        return item.id === action.payload;
      });
      const newAllTodosState = [...state.allTodos];
      newAllTodosState[selectedTodoIndex].isDone =
        !newAllTodosState[selectedTodoIndex].isDone;
      state.allTodos = newAllTodosState;
    },

    /** delete all tasks with isDone === true action */
    deleteCompleted(state) {
      state.allTodos = state.allTodos.filter((todo) => !todo.isDone);
    },

    /** set filter for tasks action */
    changeShownType(state, action: PayloadAction<string>) {
      state.shownType = action.payload;
    },
  },
});
