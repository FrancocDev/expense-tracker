import budget from "./signals/budget";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import modal from "./signals/modal";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import expenses from "./signals/expenses";
import { effect } from "@preact/signals-react";

function App() {
  effect(() => {
    window.localStorage.setItem("expenses", JSON.stringify(expenses.value));
    window.localStorage.setItem("budget", budget.value);
  });

  return (
    <main className="bg-gray-100">
      <Header />
      {Boolean(budget.value) && <AddExpense />}
      {Boolean(modal.value) && <Modal />}
      {Boolean(expenses.value.length) && <ExpensesList />}
    </main>
  );
}

export default App;
