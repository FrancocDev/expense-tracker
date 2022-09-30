import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatToCurrency, formatDate } from "../helpers";
import SavingsIcon from "../assets/categoryIcons/piggy-bank.svg";
import FoodIcon from "../assets/categoryIcons/plate-utensils.svg";
import HouseIcon from "../assets/categoryIcons/house.svg";
import BillsIcon from "../assets/categoryIcons/file-invoice-dollar.svg";
import HealthIcon from "../assets/categoryIcons/user-doctor.svg";
import SubscriptionsIcon from "../assets/categoryIcons/credit-card.svg";
import ShoppingIcon from "../assets/categoryIcons/bag-shopping.svg";
import OthersIcon from "../assets/categoryIcons/sparkles.svg";

import modal from "../signals/modal";
import editExpense from "../signals/editExpense"
import expenses from "../signals/expenses";

const categoryIcons = {
  savings: SavingsIcon,
  food: FoodIcon,
  house: HouseIcon,
  bills: BillsIcon,
  health: HealthIcon,
  subscriptions: SubscriptionsIcon,
  shopping: ShoppingIcon,
  others: OthersIcon,
};

const categoryColors = {
  savings: "bg-emerald-500",
  food: "bg-lime-500",
  house: "bg-sky-500",
  bills: "bg-yellow-500",
  health: "bg-red-500",
  subscriptions: "bg-violet-500",
  shopping: "bg-pink-500",
  others: "bg-amber-500",
};

function ExpenseResume(props) {
  function handleLeading() {
    function handleSwipe(){
      modal.value = true
      editExpense.value = props
    }
    return (
      <LeadingActions>
        <SwipeAction
          className="bg-blue-500 text-white mt-0 mb-6 rounded-md font-bold uppercase flex w-full"
          onClick={() => handleSwipe()}
        >
          <span className="self-center justify-self-end text-center mr-4 text-lg">
            Edit
          </span>
        </SwipeAction>
      </LeadingActions>
    );
  }
  function handleTrailing() {
    function handleSwipe(){
      expenses.value = expenses.value.filter(elem => elem.id !== props.id)
    }
    return (
      <TrailingActions className="">
        <SwipeAction
          className="bg-red-500 text-white mt-0 mb-6 rounded-md font-bold uppercase flex w-full"
          onClick={() => handleSwipe()}
        >
          <span className="self-center justify-self-end text-center ml-4 text-lg">
            Delete
          </span>
        </SwipeAction>
      </TrailingActions>
    );
  }

  return (
    <SwipeableList className="w-full">
      <SwipeableListItem
        className="w-full"
        leadingActions={handleLeading()}
        trailingActions={handleTrailing()}
      >
        <article className="w-full rounded-md flex justify-between shadow-md p-6 items-center mb-6 self-auto">
          <div className="flex gap-4">
            <div
              className={`rounded-full w-16 h-16 flex justify-center content-center ${
                categoryColors[props.category]
              }`}
            >
              <img
                className="p-3 border-0"
                src={categoryIcons[props.category]}
                alt={props.category}
              />
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-sm font-semibold text-gray-500">
                {props.category}
              </span>
              <span className="text-2xl font-medium">{props.name}</span>
              <span className="text-sm font-light">
                {formatDate(props.date)}
              </span>
            </div>
          </div>
          <span className="font-medium text-xl">
            {formatToCurrency(props.amount)}
          </span>
        </article>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default ExpenseResume;
