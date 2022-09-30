import React from "react";
import PlusIcon from "../assets/plus-icon.svg";
import modal from "../signals/modal";

function AddExpense() {
  function openModal() {
    modal.value = true;
  }

  return (
    <div
      onClick={openModal}
      className="fixed right-4 bottom-4  bg-blue-500 rounded-full p-3 text-center  stroke-white fill-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="#FFF"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
}

export default AddExpense;
