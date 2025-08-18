const { useState } = React;

function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);

  const decrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));

  const reset = () => setValue(0);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {value === 10 && <div className="goal">Goal Reached!</div>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
