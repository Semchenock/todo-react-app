import { Todo } from "@models/todo";
import { RootState } from "@store/types";

export const selectAllTodos = (state: RootState): Todo[] =>
  state.todos.allTodos;
