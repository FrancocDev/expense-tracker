import React from 'react'
import {formatToCurrency, formatDate, capitalize} from '../helpers'
import SavingsIcon from '../assets/categoryIcons/piggy-bank.svg'
import FoodIcon from '../assets/categoryIcons/plate-utensils.svg'
import HouseIcon from '../assets/categoryIcons/house.svg'
import BillsIcon from '../assets/categoryIcons/file-invoice-dollar.svg'
import HealthIcon from '../assets/categoryIcons/user-doctor.svg'
import SubscriptionsIcon from '../assets/categoryIcons/credit-card.svg'
import ShoppingIcon from '../assets/categoryIcons/bag-shopping.svg'
import OthersIcon from '../assets/categoryIcons/sparkles.svg'

const categoryIcons = {
    savings: SavingsIcon,
    food: FoodIcon,
    house: HouseIcon,
    bills: BillsIcon,
    health: HealthIcon,
    subscription: SubscriptionsIcon,
    shopping: ShoppingIcon,
    others: OthersIcon
}

const categoryColors = {
    savings: "bg-emerald-500",
    food: "bg-lime-500",
    house: "bg-sky-500",
    bills: "bg-yellow-500",
    health: "bg-red-500",
    subscription: "bg-violet-500",
    shopping: "bg-pink-500",
    others: "bg-amber-500"
}

function ExpenseResume(props) {
  return (
    <article className='w-full rounded-md flex justify-between shadow-md p-6 items-center mb-6'>
        <div className='flex gap-4'>
        <div className={`rounded-full w-16 h-16 flex justify-center content-center ${categoryColors[props.category]}`}><img className="p-3 border-0" src={categoryIcons[props.category]} alt={props.category} /></div>
            <div className='flex flex-col'>
                <span className='uppercase text-sm font-semibold text-gray-500'>{props.category}</span>
                <span className='text-2xl font-medium'>{props.name}</span>
                <span className='text-sm font-light'>{formatDate(props.date)}</span>
            </div>
        </div>
        <span className='font-medium text-xl'>{formatToCurrency(props.amount)}</span>
    </article>
  )
}

export default ExpenseResume