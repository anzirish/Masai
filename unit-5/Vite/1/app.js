const { useState } = React;

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button
        disabled={count == 0}
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Counter initialValue={0} />
);
