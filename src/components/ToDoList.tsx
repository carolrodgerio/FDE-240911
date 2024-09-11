import { useState } from 'react';

interface ToDoListProps {
    tasks: Task[];
    setTasks: (task: Task[]) => void;
}

export interface Task {
    id: number;
    text: string;
    bgColor: string;
}

export function ToDoList({ tasks, setTasks }: ToDoListProps) {
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const newTaskObject: Task = {
                id: Date.now(),
                text: newTask,
                bgColor: '#ec185b'
            };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        } else {
            alert('Digite a tarefa a ser feita >:(')
        }
    };

    const handleRemoveTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">☆ Lista de tarefas ☆</h1>
            <div className="mb-4 flex flex-col items-center space-y-2">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="O que vamos fazer hoje?"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={handleAddTask}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                >
                    Adicionar tarefa
                </button>
            </div>
            <ul className="list-none p-0 flex gap-4 flex-wrap justify-start">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center rounded-md p-4 flex-col w-36 gap-5 text-white"
                        style={{ backgroundColor: task.bgColor }}
                    >
                        {task.text}
                        <button
                            onClick={() => handleRemoveTask(task.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
