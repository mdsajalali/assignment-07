import React, { useState } from "react";

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Create a new todo..."
          value={newTask}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border border-gray-300 mb-3"
          >
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
