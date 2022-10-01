import budget from "../signals/budget";
import { useState } from "react";
import Error from "./Error";

function NewExpense() {
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit Budget")
    const budgetValue = Number(event.target["budgetValue"].value);

    if (budgetValue === 0) {
      setError("Budget can't be 0");
    } else if (Number.isNaN(budgetValue)) {
      setError("Budget must be a number");
    } else if (budgetValue < 0) {
      setError("Budget must be a positive value");
    } else {
      setError(null);
      budget.value = budgetValue;
    }
  }

  return (
    <div className="bg-white h-72 rounded-lg mt-10 w-3/5 mx-auto flex flex-col justify-center  shadow-lg">
      <h2 className="text-blue-500 text-3xl mb-6 font-semibold">
        Define budget
      </h2>
      <form
        className="flex items-center flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="budgetValue"></label>
        <input
          type="number"
          className="bg-gray-200 w-1/2 p-2 rounded-lg text-center font-medium text-md placeholder:text-gray-500"
          name="budgetValue"
          id="budgetValue"
          placeholder="Add your budget"
        />
        <button
          type="submit"
          className="bg-blue-500 w-1/2 rounded-lg p-2 text-white font-medium text-lg uppercase"
        >
          Set budget
        </button>
      </form>
      {error && <Error type="error">{error}</Error>}
    </div>
  );
}

export default NewExpense;
