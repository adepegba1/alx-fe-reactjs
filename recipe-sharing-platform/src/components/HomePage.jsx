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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((items) => (
          <div
            key={items.id}
            className="bg-red-200 border-2 max-w-md m-4 p-4 rounded-lg hover:scale-105 transition-transform shadow-lg"
          >
            <img
              className="w-full h-48 object-cover rounded-md"
              src={items.image}
              alt={items.title}
            />
            <h2 className="text-white font-bold text-3xl">{items.title}</h2>
            <p className="text-xl">{items.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomePage;
