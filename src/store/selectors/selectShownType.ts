import { RootState } from "store/types";

export const selectShownType = (state: RootState): string =>
  state.todos.shownType;
