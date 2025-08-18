const { useState } = React;

function Todo() {
  const [tasks, updateTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) {
      alert("Invalid task");
      return;
    }
    updateTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addTask}>Add task</button>
      <button onClick={() => updateTasks([])}>Clear All</button>

      {tasks.length == 0 ? (
        <p>No taks are available</p>
      ) : (
        tasks.map((task, idx) => {
          return <p key={idx}>{task}</p>;
        })
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo />);
