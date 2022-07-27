class Todo {
  id: string;
  text: string;
  isDone: boolean;
  constructor(todoText: string) {
    this.id = Math.random().toString();
    this.text = todoText;
    this.isDone = false;
  }
}
export default Todo;
