import React from 'react'
import {formatToCurrency} from '../helpers'

function ExpenseResume(props) {
  return (
    <article className='w-full rounded-md flex justify-between shadow-md p-6 items-center'>
        <div className='flex flex-col'>
            <span className='uppercase text-sm font-semibold text-gray-500'>{props.category}</span>
            <span className='text-2xl font-medium'>{props.name}</span>
        </div>
        <span className='font-medium text-xl'>{formatToCurrency(props.amount)}</span>
    </article>
  )
}

export default ExpenseResume