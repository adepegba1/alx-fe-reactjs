import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({
    title: false,
    ingredients: false,
    instructions: false,
    steps: false,
  });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) {
      setErrors((prev) => ({ ...prev, title: false }));
    }
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
    if (errors.ingredients) {
      setErrors((prev) => ({ ...prev, ingredients: false }));
    }
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
    if (errors.instructions) {
      setErrors((prev) => ({ ...prev, instructions: false }));
    }
  };

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
    if (errors.steps) {
      setErrors((prev) => ({ ...prev, steps: false }));
    }
  };

  const validate = () => {
    const newErrors = {
      title: title.trim() === "",
      ingredients:
        ingredients.trim() === "" || ingredients.split(/[\n,]/).length < 2,
      instructions: instructions.trim() === "",
      steps: steps.trim() === "" || steps.split(/[\n.]/).length < 1,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(/[\n,]/).map((ing) => ing.trim()),
      instructions: instructions.split(/[\n.]/).map((inst) => inst.trim()),
      steps: steps.split(/[\n.]/).map((step) => step.trim()),
    };

    if (onAddRecipe) {
      onAddRecipe(newRecipe);
    }

    setTitle("");
    setIngredients("");
    setInstructions("");
    setSteps("");
    setErrors({
      title: false,
      ingredients: false,
      instructions: false,
      steps: false,
    });
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
            {errors.title && (
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
            {errors.ingredients && (
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
            {errors.instructions && (
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

          <label htmlFor="steps" className="block p-3 text-lg font-semibold">
            Cooking steps (one per line):
            {errors.steps && (
              <span className="text-red-500">Please provide steps.</span>
            )}
          </label>

          <textarea
            name="steps"
            id="steps"
            value={steps}
            onChange={handleStepsChange}
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
