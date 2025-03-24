import { Todo } from "models/index";

/** placeholder for default state */
export const DUMMY_TODOS = [
  new Todo("Тестовое задание"),
  new Todo("Прекрасный код"),
  new Todo("Покрытие тестами"),
];

/** default state */
export const initialState = {
  allTodos: DUMMY_TODOS,
  shownType: "all",
};
