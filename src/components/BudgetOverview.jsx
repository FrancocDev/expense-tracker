import React from 'react'
import budget from '../signals/budget'
import {formatToCurrency} from '../helpers'

function BudgetOverview() {
  return (
    <div className="bg-white h-72 rounded-lg mt-10 w-3/5 mx-auto items-center flex flex-row shadow-lg justify-between px-60">
        <div>Grafico</div>
        <div className='flex flex-col'>
            <span>Budget: {formatToCurrency(budget.value)}</span>
            <span>Spent: {formatToCurrency(budget.value)}</span>
            <span>Available: {formatToCurrency(budget.value)}</span>
        </div>
    </div>
  )
}

export default BudgetOverview