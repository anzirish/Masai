import { useReducer } from "react";
import "./App.css";

const initialState = { email: "", password: "", submitted: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    case "SUBMITTED":
      return { ...state, submitted: true };
    default:
      return "Invalid action type";
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    dispatch({ type: "SUBMITTED" });
  };
  return (
    <>
      {state.submitted ? (
        <p>
          Email : {state.email}, Password : {state.password}
        </p>
      ) : (
        <p>No details found</p>
      )}
      <form  style={{ marginTop: "50px" }} onSubmit={handleSubmit}>
        <label>
          Input email :
          <input
            type="email"
            placeholder="Enter email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <br />
        <label>
          Input password :
          <input
            type="password"
            placeholder="Enter password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
            required
          ></input>
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </form>
    </>
  );
}

export default App;
