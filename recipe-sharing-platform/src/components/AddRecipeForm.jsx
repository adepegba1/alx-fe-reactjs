import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState({
    title: false,
    ingredients: false,
    instructions: false,
  });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) {
      setError((prev) => ({ ...prev, title: false }));
    }
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
    if (errors.ingredients) {
      setError((prev) => ({ ...prev, ingredients: false }));
    }
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
    if (errors.instructions) {
      setError((prev) => ({ ...prev, instructions: false }));
    }
  };

  const validationHandler = () => {
    const newErrors = {
      title: title.trim() === "",
      ingredients:
        ingredients.trim() === "" || ingredients.split(/[\n,]/).length < 2,
      instructions: instructions.trim() === "",
    };
    setError(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validationHandler()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(/[\n,]/).map((ing) => ing.trim()),
      instructions: instructions.split(/[\n.]/).map((inst) => inst.trim()),
    };

    if (onAddRecipe) {
      onAddRecipe(newRecipe);
    }

    setTitle("");
    setIngredients("");
    setInstructions("");
    setError({ title: false, ingredients: false, instructions: false });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 m-4 p-4 rounded-lg max-w-md"
      >
        <fieldset>
          <legend className="text-center font-bold text-3xl ">
            Add a New Recipe
          </legend>
          <label htmlFor="title" className="block p-3 text-lg font-semibold">
            Recipe Title:
            {error.title && (
              <span className="text-red-500">Please provide a title.</span>
            )}
          </label>

          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="block w-full p-2 border-2 rounded"
          />
          <label
            htmlFor="ingredients"
            className="block p-3 text-lg font-semibold"
          >
            Ingredients:
            {error.ingredients && (
              <span className="text-red-500">
                Please provide at least two ingredients.
              </span>
            )}
          </label>

          <textarea
            name="ingredients"
            id="ingredients"
            value={ingredients}
            onChange={handleIngredientsChange}
            className="block w-full p-2 border-2 rounded"
          ></textarea>

          <label
            htmlFor="instructions"
            className="block p-3 text-lg font-semibold"
          >
            Instructions:{" "}
            {error.instructions && (
              <span className="text-red-500">Please provide instructions.</span>
            )}
          </label>

          <textarea
            name="instructions"
            id="instructions"
            value={instructions}
            onChange={handleInstructionsChange}
            className="block w-full p-2 border-2 rounded"
          ></textarea>
          <input
            type="button"
            value="Add Recipe"
            className="block w-full p-2 border-2 rounded bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600 mt-4"
          />
        </fieldset>
      </form>
    </>
  );
}

export default AddRecipeForm;
