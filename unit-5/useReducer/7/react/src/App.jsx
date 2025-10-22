import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button
        disabled={state.count === 0}
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
