import React from "react";
import budget from "../signals/budget";
import { formatToCurrency } from "../helpers";
import expenses from "../signals/expenses";
import EditPenIcon from "../assets/pen-to-square.svg";
import DeleteIcon from "../assets/trash-can.svg";
import { computed } from "@preact/signals-react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BudgetOverview() {
  const spentValue = computed(() =>
    expenses.value.reduce((prev, curr) => prev + curr.amount, 0)
  );

  function resetApp() {
    if (window.confirm("Are you sure you want to reset the app?")) {
      expenses.value = [];
      budget.value = 0;
    } else {
      return;
    }
  }

  return (
    <div className="relative">
      <img
        src={DeleteIcon}
        alt="Reset application"
        className="w-4 absolute pt-5 right-0 mr-72 cursor-pointer opacity-70 hover:opacity-100"
        onClick={resetApp}
      />
      <div className="bg-white h-72 rounded-lg mt-10 w-3/5 mx-auto items-center flex flex-row justify-between gap-12 shadow-lg p-20">
        <CircularProgressbarWithChildren
          className="h-52 w-52"
          value={spentValue}
          maxValue={budget.value}
          styles={buildStyles({
            pathColor: "rgb(59 130 246)",
            trailColor: "#F5F5F5",
          })}
        >
          <span className="font-semibold text-2xl text-gray-500">
            {((spentValue * 100) / budget.value).toFixed(2)}%
          </span>
        </CircularProgressbarWithChildren>
        <div className="flex flex-col">
          <span className="flex items-end gap-2 text-lg text-gray-500 font-medium">
            <span className="font-bold text-blue-500 text-2xl">Budget: </span>
            {formatToCurrency(budget.value)}
            <img
              onClick={() => (budget.value = 0)}
              className="w-4 h-4 self-center text-blue-500 cursor-pointer"
              src={EditPenIcon}
              alt="Edit budget"
            />
          </span>
          <span className="flex items-end gap-2 text-lg text-gray-500 font-medium">
            <span className="font-bold text-blue-500 text-2xl">Spent:</span>{" "}
            {formatToCurrency(Number(spentValue))}
          </span>
          <span className="flex items-end gap-2 text-lg text-gray-500 font-medium">
            <span className="font-bold text-blue-500 text-2xl">Available:</span>{" "}
            {formatToCurrency(budget.value - Number(spentValue))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BudgetOverview;
