import React from "react";
import ListSalary from "./ListSalary";
import "../css/Salary.css";

// salary is the to do list component
function Salary({ salary }) {
  return (
    <div className="salary-list">
      {salary.map((salary, idx) => {
        return <ListSalary text={salary} key={idx} />;
      })}
    </div>
  );
}

export default Salary;
