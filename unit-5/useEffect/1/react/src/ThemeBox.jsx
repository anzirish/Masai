export default function ThemeBox({ theme }) {
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "#333" : "white",
          height: "100px",
          width: "100px",
        }}
      >
        Hello i'm div
      </div>
    </>
  );
}
