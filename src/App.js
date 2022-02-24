import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="create react app"/> 
      <Todo text="develop the todo app"/> 
      <Todo text="build react app"/> 
    </div>
  );
}

export default App;
