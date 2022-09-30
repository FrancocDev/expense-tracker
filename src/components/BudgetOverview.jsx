import React from "react";
import budget from "../signals/budget";
import { formatToCurrency } from "../helpers";
import expenses from "../signals/expenses";
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

  return (
    <div className="bg-white h-72 rounded-lg mt-10 w-3/5 mx-auto items-center flex flex-row justify-between gap-12 shadow-lg p-20">
        <CircularProgressbarWithChildren
          className="h-52 w-52"
          value={spentValue}
          maxValue={budget.value}
          styles={buildStyles({ pathColor: "rgb(59 130 246)",
                trailColor: "#F5F5F5" })}
        >
          <span className="font-semibold text-2xl text-gray-500">{((spentValue * 100) / budget.value).toFixed(2)}%</span>
        </CircularProgressbarWithChildren>
      <div className="flex flex-col">
        <span className="flex items-end gap-2 text-lg text-gray-500 font-medium"><span className="font-bold text-blue-500 text-2xl">Budget: </span>{formatToCurrency(budget.value)}</span>
        <span className="flex items-end gap-2 text-lg text-gray-500 font-medium"><span className="font-bold text-blue-500 text-2xl">Spent:</span> {formatToCurrency(Number(spentValue))}</span>
        <span className="flex items-end gap-2 text-lg text-gray-500 font-medium"><span className="font-bold text-blue-500 text-2xl">Available:</span> {formatToCurrency(budget.value - Number(spentValue))}
        </span>
      </div>
    </div>
  );
}

export default BudgetOverview;
