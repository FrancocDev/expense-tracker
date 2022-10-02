import ExpenseResume from "./ExpenseResume";
import expenses from "../signals/expenses";
import CategoryFilter from "./CategoryFilter";
import filtered from "../signals/filtered";

function ExpensesList() {
  const renderExpenses = expenses.value.map((expense) => {
    if (filtered.value === expense.category || filtered.value === "") {
      return (
        <ExpenseResume
          key={expense.id}
          id={expense.id}
          name={expense.name}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
        />
      );
    }
  });

  return (
    <section className="mt-52 lg:mt-28 w-4/5 lg:w-3/5 mx-auto flex flex-col items-center">
      <CategoryFilter />
      <h1 className="text-3xl self-start underline decoration-blue-500 mb-4">
        Expenses
      </h1>
      {renderExpenses}
    </section>
  );
}

export default ExpensesList;
