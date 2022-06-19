import React from "react";
import { MdCreditCard } from "react-icons/md";

export default function Header({ totalIncome }) {
  return (
    <header>
      <h1 aria-label="title">
        Budget buddy <MdCreditCard className="btn-icon" />
      </h1>
      <div className="total-income">R{totalIncome}</div>
    </header>
  );
}
