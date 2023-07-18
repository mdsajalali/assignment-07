import React, { useState } from "react";
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const todo = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };

      setTasks([...tasks, todo]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id !== id) return task;

        return {
          ...task,
          completed: !task.completed,
        };
      })
    );
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
            <div
              onClick={() => toggleCompleted(task.id)}
              className="flex gap-1 cursor-pointer"
            >
              <span className="mt-1">
                {task.completed ? <BsFillCheckCircleFill /> : <BsCircle />}
              </span>

              <span className={task.completed ? "line-through" : "none"}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
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
