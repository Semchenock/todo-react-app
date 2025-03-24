/** Todo task entity */
export class Todo {
  /** task id */
  id: string;
  /** task text */
  text: string;
  /** task is done */
  isDone: boolean;
  /**
   * new task constructor
   *
   * @param todoText new task text
   * @returns new task entity
   */
  constructor(todoText: string) {
    this.id = `${Math.random()}?${Date.now()}`;
    this.text = todoText;
    this.isDone = false;
  }
}
