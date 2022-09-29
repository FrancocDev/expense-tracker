import React, {useMemo} from 'react'
import budget from '../signals/budget'
import {formatToCurrency} from '../helpers'
import expenses from '../signals/expenses'
import { computed } from "@preact/signals-react";

function BudgetOverview() {
  const spentValue = computed(() => expenses.value.reduce((prev, curr) => prev + curr.amount,0))
  
  console.log(expenses.value)

  return (
    <div className="bg-white h-72 rounded-lg mt-10 w-3/5 mx-auto items-center flex flex-row shadow-lg justify-between px-60">
        <div>Grafico</div>
        <div className='flex flex-col'>
            <span>Budget: {formatToCurrency(budget.value)}</span>
            <span>Spent: {formatToCurrency(Number(spentValue))}</span>
            <span>Available: {formatToCurrency(budget.value - Number(spentValue))}</span>
        </div>
    </div>
  )
}

export default BudgetOverview