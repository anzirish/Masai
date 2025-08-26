import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const currentPage = useRef(1);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = await response.json();
    setData(result.results);
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

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px",
        }}
      >
        {pageData.map((item) => {
          return (
            <img
              src={item.image}
              style={{ width: "100%", height: "100%" }}
            ></img>
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
      <button
        disabled={currentPage.current === 2}
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
