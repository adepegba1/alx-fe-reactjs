import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useState } from "react";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === id);

  const [formData, setFormData] = useState(recipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, formData);
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <label>
        Title:
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>

      <label>
        Description:
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>

      <label>
        Ingredients (comma separated):
        <input
          value={formData.ingredients.join(", ")}
          onChange={(e) =>
            setFormData({ ...formData, ingredients: e.target.value.split(",") })
          }
        />
      </label>

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
