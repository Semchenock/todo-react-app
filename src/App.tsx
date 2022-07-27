import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";
import TodosNav from "./components/TodosNav";
function App() {
  return (
    <>
      <header className="App-header">
        <h1>todos</h1>
      </header>
      <main>
        <TodoForm />
        <TodosList />
        <TodosNav />
      </main>
    </>
  );
}
export default App;
