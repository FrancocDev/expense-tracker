import budget from './signals/budget'
import Header from './components/Header'
import AddExpense from './components/AddExpense'
import modal from './signals/modal'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'

function App() {

  return (
    <>
      <Header />
      {Boolean(budget.value) && <AddExpense/>}
      {Boolean(modal.value) && <Modal/>}
      {Boolean(budget.value) && <ExpensesList/>}
    </>
  )
}

export default App
