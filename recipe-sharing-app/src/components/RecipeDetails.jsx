// RecipeDetails component
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients?.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
    </div>
  );
};
export default RecipeDetails;
