import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

export default function RecommendationsList() {
  // Subscribe only to the slice we need – the computed recommendations
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div className="recommendations">
      <h2>Recommended for you</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
