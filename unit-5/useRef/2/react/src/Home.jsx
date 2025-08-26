import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const currentPage = useRef(1);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    setData(result);
  };

  const slicePageData = () => {
    console.log(data);
    setPageData(
      data.slice(currentPage.current * 10 - 10, currentPage.current * 10)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    slicePageData();
  }, [data, page]);

  const totalPages = Math.ceil(data.length / 10);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "5px",
        }}
      >
        {pageData.map((item) => {
          return (
            <div style={{ border: "2px solid aqua" }}>
              <p>UserId : {item.userId}</p>
              <p>Title : {item.title}</p>
            </div>
          );
        })}
      </div>
      <button
        disabled={currentPage.current === 1}
        onClick={() => {
          currentPage.current -= 1;
          setPage(currentPage.current);
        }}
      >
        Prev
      </button>
      <span>
        Page {currentPage.current} of {totalPages}
      </span>
      <button
        disabled={currentPage.current === totalPages}
        onClick={() => {
          currentPage.current += 1;
          setPage(currentPage.current);
        }}
      >
        Next
      </button>
    </>
  );
};
export { Home };
