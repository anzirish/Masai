function UserCard({ name, email, city }) {
  {
    console.log(name, email, city);
  }
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid aqua",
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
        backgroundColor: "white",
        marginBottom : '10px'
      }}
    >
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}
export default UserCard;
