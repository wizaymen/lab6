
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';
import NewTaskForm from './components/NewTaskForm';

function App() {
  return (
    <div className="container">
      <h1>Task List Lab</h1>
      <TaskList />
    </div>
   
  );
}

export default App;
