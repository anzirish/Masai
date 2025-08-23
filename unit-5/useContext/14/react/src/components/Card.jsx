export const Card = ({ product }) => {
  return (
    <>
      <div
        style={{
          width: "100px",
          height: "auto",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid aqua",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.5)",
        }}
      >
        {product}
      </div>
    </>
  );
};
