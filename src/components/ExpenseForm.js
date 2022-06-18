import React from "react";
import { MdSend } from "react-icons/md";
import "../css/ExpenseForm.css";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge" className="charge-text">
            charge
          </label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="charge-text">
            amount
          </label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g 1000"
          ></input>
        </div>
      </div>

      <button type="submit" className="btn">
        submit <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
