import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("../src/data.json")
      .then((reponse) => reponse.json())
      .then(
        (data) => {
          const found = data.find((r) => r.id === parseInt(id));
          if (found) {
            setRecipe(found);
            setLoading(false);
          } else {
            setError("Recipe not found");
            setLoading(false);
          }
        },
        [id]
      );
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500 font-bold text-6xl text-center">{error}</p>
      ) : (
        <div className="mb-4">
          <h1 className="text-6xl mb-4 text-center font-bold">
            {recipe.title}
          </h1>
          <img
            className="w-80 h-80 object-cover rounded-md border-2 mb-4 ml-2"
            src={recipe.image}
            alt={recipe.title}
          />
          <h2 className="text-2xl font-bold ml-2">Ingredients</h2>
          <ul className="list-disc ml-10">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold">Instructions</h2>
          <ol className="ml-10 list-decimal">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}

export default RecipeDetail;
