import { signal } from "@preact/signals-react";

const expenses = signal(JSON.parse(window.localStorage.getItem("expenses"))||[]);
export default expenses;

