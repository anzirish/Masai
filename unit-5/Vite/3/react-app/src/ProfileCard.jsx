import TruncatedText from "./TruncatedText";

function ProfileCard({ name, age, bio }) {
  return (
    <>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(255, 255, 255, 0.2) inset",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "20px",
        }}
      >
        <h3>{name}</h3>
        <h4>{age}</h4>
        <TruncatedText text={bio} maxLength={100}></TruncatedText>
      </div>
    </>
  );
}

export default ProfileCard;
