import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";
import TodosNav from "./components/TodosNav";
import classes from "./App.module.css";
function App() {
  return (
    <>
      <header className={classes.header}>
        <h1>todos</h1>
      </header>
      <main className={classes.container}>
        <TodoForm />
        <TodosList />
        <TodosNav />
      </main>
    </>
  );
}
export default App;
