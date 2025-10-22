import "./App.css";
import useForm from "./hooks/useForm";

function App() {
  const [formData, handleChange, resetForm] = useForm();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
          onSubmit={submitHandler}
        >
          <label>
            Enter email :{" "}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email || ""}
            />{" "}
          </label>
          <label>
            Enter password :{" "}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password || ""}
            />{" "}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
