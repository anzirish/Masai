import "./App.css";
import { decremnet, increment } from "./features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <p>Current count : {count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decremnet())}>decrement</button>
    </>
  );
}

export default App;
