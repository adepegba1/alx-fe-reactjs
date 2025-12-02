import React, { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../src/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      <div>
        {data.map((items) => (
          <div
            key={items.id}
            className="flex flex-col bg-red-200 border-2 max-w-md m-4 p-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            <img src={items.image} alt={items.title} />
            <h2 className="text-white font-bold text-3xl">{items.title}</h2>
            <p className="text-xl">{items.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomePage;
