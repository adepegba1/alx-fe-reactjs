import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Link to={`/recipe/${items.id}`}>
              {" "}
              <img
                className="w-full h-48 object-cover rounded-md"
                src={items.image}
                alt={items.title}
              />
            </Link>

            <Link to={`/recipe/${items.id}`}>
              <h2 className="text-white font-bold text-3xl">{items.title}</h2>
            </Link>

            <Link to={`/recipe/${items.id}`}>
              <p className="text-xl">{items.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default HomePage;
