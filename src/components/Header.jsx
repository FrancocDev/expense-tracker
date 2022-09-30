import NewExpense from "./NewExpense";
import BudgetOverview from "./BudgetOverview";
import budget from "../signals/budget";

function Header() {
  return (
    <header className="pt-8 bg-blue-500  text-center h-80">
      <span className="pt-10 tracking-wide text-white font-semibold uppercase text-3xl">
        Expense tracker
      </span>
      {budget.value ? <BudgetOverview /> : <NewExpense />}
    </header>
  );
}

export default Header;
