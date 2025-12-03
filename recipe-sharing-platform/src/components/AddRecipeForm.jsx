function AddRecipeForm() {
  const submissionHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <form
        action=""
        method="post"
        className="border-2 m-4 p-4 rounded-lg max-w-md"
      >
        <fieldset>
          <legend className="text-center font-bold text-3xl ">
            Add a New Recipe
          </legend>
          <label htmlFor="title" className="block p-3 text-lg font-semibold">
            Recipe Title:
          </label>
          <input
            type="text"
            name="text"
            id="text"
            className="block w-full p-2 border-2 rounded"
          />
          <label
            htmlFor="ingredients"
            className="block p-3 text-lg font-semibold"
          >
            Ingredients:
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            className="block w-full p-2 border-2 rounded"
          ></textarea>
          <label
            htmlFor="instructions"
            className="block p-3 text-lg font-semibold"
          >
            Instructions:
          </label>
          <textarea
            name="instructions"
            id="instructions"
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
