const { useState } = React;

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({
    title: "",
    priority: "",
    completed: false,
    id: Date.now(),
  });
  const [filterData, setFilterData] = useState({
    priority: "High",
    completion: "",
  });

  const addTask = () => {
    if (!input.title.trim() || !input.priority) {
      alert("Invalid task");
      return;
    }
    setTasks([...tasks, input]);
    setInput({ ...input, title: "", priority: "", id: Date.now() }); // passed id again to update previous one
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const priorities = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filterData.completion) {
        if (filterData.completion === "true" && !task.completed) return false;
        if (filterData.completion === "false" && task.completed) return false;
      }
      return true;
    })
    .sort((a, b) => priorities[b.priority] - priorities[a.priority]);

  const onCheck = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Task title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        ></input>
        <select
          value={input.priority}
          onChange={(e) => setInput({ ...input, priority: e.target.value })}
        >
          <option value="">Select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>Add task</button>
        <div>
          <label>Sort tasks by priority :</label>
          <select
            value={filterData.priority}
            onChange={(e) =>
              setFilterData({ ...filterData, priority: e.target.value })
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <label>Filter tasks by completion status :</label>
          <select
            value={filterData.completion}
            onChange={(e) =>
              setFilterData({ ...filterData, completion: e.target.value })
            }
          >
            <option value="">All</option>
            <option value="true">Complete</option>
            <option value="false">Not complete</option>
          </select>
        </div>
      </div>
      {filteredTasks.map((task) => {
        return (
          <>
            <div key={task.id} style={{ display: "flex", gap: "50px" }}>
              <h3>{task.title}</h3>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onCheck(task.id)}
              ></input>
              <p className={task.priority}>{task.priority}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo />);
