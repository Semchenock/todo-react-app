import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import Todo from "../models/todo";
const DUMMY_TODOS = [
  new Todo("Тестовое задание"),
  new Todo("Прекрасный код"),
  new Todo("Покрытие тестами"),
];
const initialState = {
  allTodos: DUMMY_TODOS,
  shownType: "all",
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      const newTodo = new Todo(action.payload);
      state.allTodos = [newTodo, ...state.allTodos];
    },
    toggleTask(state, action: PayloadAction<string>) {
      const selectedTodoIndex = state.allTodos.findIndex((item) => {
        return item.id === action.payload;
      });
      const newAllTodosState = [...state.allTodos];
      newAllTodosState[selectedTodoIndex].isDone =
        !newAllTodosState[selectedTodoIndex].isDone;
      state.allTodos = newAllTodosState;
    },
    deleteComplited(state) {
      state.allTodos = state.allTodos.filter((todo) => !todo.isDone);
    },
    changeShownType(state, action: PayloadAction<string>) {
      state.shownType = action.payload;
    },
  },
});
export const todosActions = todosSlice.actions;
export const selectAllTodos = (state: RootState) => state.todos.allTodos;
export default todosSlice.reducer;
