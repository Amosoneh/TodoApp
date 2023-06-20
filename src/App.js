import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      title: "love is beautiful",
      description: "dont know",
      completed: false
    },
    {
      title: "love is beautiful",
      description: "dont know",
      completed: false
    }
  ]);

  const addTask = (task) => {
    const newTask = { ...task };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("tasks");
    console.log(data);
    if (data !== null) setTasks(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  console.log(tasks);

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handleToggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      ) : (
        "No task found"
      )}
    </div>
  );
}
