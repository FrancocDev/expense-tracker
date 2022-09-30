import { signal } from "@preact/signals-react";

const budget = signal(Number(window.localStorage.getItem("budget")) || 0);
export default budget;