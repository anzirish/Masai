import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import type { Task } from "./types";
import { useEffect, useState } from "react";
import type { RootState } from "./app/store";
import { addTask, markTaskCompleted } from "./features/taskSlice";

export enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

type filter = "all" | "completed" | "uncompleted";

function App() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  let [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const dispatch = useDispatch();

  const [desc, setDesc] = useState<string>("");
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
  const [filter, setFilter] = useState<filter>("all");

  const taskHandler = () => {
    if (!desc.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      desc,
      priority,
      completion: false,
    };
    dispatch(addTask(newTask));
    setDesc("");
    setPriority(Priority.LOW);
  };

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTasks(
          tasks.filter((task: Task) => task.completion === true)
        );
        break;
      case "uncompleted":
        setFilteredTasks(
          tasks.filter((task: Task) => task.completion === false)
        );
        break;
      default:
        setFilteredTasks(tasks);
    }
  }, [filter, tasks]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Task Manager</h1>

        <div className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter task description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />

          <select
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value) as Priority)}
            className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none"
          >
            <option value={Priority.LOW}>LOW</option>
            <option value={Priority.MEDIUM}>MEDIUM</option>
            <option value={Priority.HIGH}>HIGH</option>
          </select>

          <button
            onClick={taskHandler}
            className="bg-blue-500 text-white py-2 cursor-pointer px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Task
          </button>
        </div>

        {tasks.length > 0 && (
          <>
            <label>
              Filter tasks : { }
              <select
                onChange={(e) => setFilter(e.target.value as filter)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none"
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not completed</option>
              </select>
            </label>
          </>
        )}

        <div className="space-y-4">
          {filteredTasks.map((task: Task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <div>
                <p className="text-gray-800 font-medium">{task.desc}</p>
                <p
                  className={`text-sm font-semibold ${
                    task.priority === Priority.HIGH
                      ? "text-red-500"
                      : task.priority === Priority.MEDIUM
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Priority: {Priority[task.priority]}
                </p>
              </div>

              <input
                type="checkbox"
                checked={task.completion}
                onChange={() => dispatch(markTaskCompleted(task.id))}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
