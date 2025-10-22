const { useState } = React;

function ToggleButton({ text }) {
  const [state, setState] = useState(false);

  return (
    <>
      <button className={state ? "on" : "off"} onClick={() => setState(!state)}>
        {state ? "ON" : "OFF"}
      </button>
      <p>{text}</p>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <ToggleButton text="Toggle Button" />
);
