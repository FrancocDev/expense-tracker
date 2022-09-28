import ExpenseResume from './ExpenseResume'
import expenses from '../signals/expenses'

function ExpensesList(){
    const renderExpenses = expenses.value.map(expense => {
        return <ExpenseResume 
        key={expense.id}
        name={expense.name}
        amount={expense.amount}
        category={expense.category}
        />
    })
    
    return(
        <section className="mt-28 w-3/5 mx-auto flex flex-col items-center gap-4">
            <h1 className='text-3xl self-start underline decoration-blue-500 mb-2'>Expenses</h1>
            {renderExpenses}
        </section>
    )
}

export default ExpensesList