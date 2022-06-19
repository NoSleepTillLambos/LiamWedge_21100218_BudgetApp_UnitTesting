import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">R{amount}</span>
      </div>
      <button
        className="edit-btn"
        aria-label="edit button"
        onClick={handleEdit()}
      >
        <MdEdit />
      </button>
      <button
        className="clear-btn"
        aria-label="clear button"
        onClick={() => handleDelete(id)}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default ExpenseItem;
