import { configureStore } from "@reduxjs/toolkit";

import { todosSlice } from "./reducers";

const store = configureStore({
  reducer: { todos: todosSlice.reducer },
});

export default store;
