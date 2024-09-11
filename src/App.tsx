import { useState } from 'react';
import { Task, ToDoList } from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;