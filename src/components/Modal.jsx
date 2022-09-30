import { useState } from "react";
import modal from "../signals/modal";
import PlusIcon from "../assets/plus-icon.svg";
import Error from "./Error";
import expenses from "../signals/expenses";

function Modal() {
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const [nameExpense, amountExpense, categoryExpense] = event.target.elements;
    const expense = {
      id: window.crypto.randomUUID(),
      name: nameExpense.value,
      amount: Number(amountExpense.value),
      category: categoryExpense.value,
      date: new Date(),
    };

    if (!expense.name || !expense.amount || !expense.category) {
      setError(true);
    } else {
      setError(false);
      modal.value = false;
      expenses.value = [...expenses.value, expense];
    }
  }
  return (
    <div className="overflow-x-hidden overflow-y-auto fixed h-screen bg-black opacity-90 top-0 left-0 right-0 bottom-0">
      <div
        className="absolute right-3 top-3"
        onClick={() => (modal.value = false)}
      >
        <img className="rotate-45 h-12" src={PlusIcon} alt="X" />
      </div>
      <form
        className="flex flex-col text-white w-1/2 h-screen m-auto justify-center gap-6"
        onSubmit={handleSubmit}
      >
        <legend className="text-4xl text-center underline  decoration-blue-500">
          New Expense
        </legend>

        <section className="flex flex-col gap-1">
          <label htmlFor="nameExpense">Name of the expense</label>
          <input
            type="text"
            name="nameExpense"
            id="nameExpense"
            placeholder="Expense name"
            className="p-1 rounded-md pl-3 text-black"
          />
        </section>

        <section className="flex flex-col gap-1">
          <label htmlFor="amountExpense">Amount</label>
          <input
            type="number"
            name="amountExpense"
            id="amountExpense"
            placeholder="E.g. $120"
            className="p-1 rounded-md pl-3 text-black"
          />
        </section>

        <section className="flex flex-col gap-1">
          <label htmlFor="categoryExpense">Category</label>
          <select
            name="categoryExpense"
            id="categoryExpense"
            className="p-1 rounded-md pl-3 text-black"
          >
            <option value="">--- Select one ---</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="bills">Bills</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="shopping">Shopping</option>
            <option value="others">Others</option>
          </select>
        </section>

        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 p-2 mt-2 hover:bg-blue-600 rounded-lg text-white font-medium text-lg uppercase"
        />
        {error && (
          <Error type="error" customStyles="w-full text-center mt-0">
            All fields must be filled
          </Error>
        )}
      </form>
    </div>
  );
}

export default Modal;
