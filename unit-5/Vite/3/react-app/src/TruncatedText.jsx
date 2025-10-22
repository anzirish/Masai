import { useState } from "react";

function TruncatedText({ text, maxLength }) {
  const [Expanded, setExpanded] = useState(false);

  if (text.length <= maxLength) return <p>{text}</p>;

  return (
    <>
      <p>
        {Expanded ? <p>{text}</p> : text.slice(0, maxLength)}...
        <button onClick={() => setExpanded(!Expanded)}>
          {Expanded ? "read less" : "read more"}
        </button>
      </p>
    </>
  );
}
export default TruncatedText;
