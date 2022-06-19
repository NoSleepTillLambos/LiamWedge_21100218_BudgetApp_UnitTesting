import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import Tax from "./components/Tax";
import Salary from "./components/Salary";
import Savings from "./components/Savings";
import ListSalary from "./components/ListSalary";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";

function App() {
  // tax bracket code and salary
  const [salary, setSalary] = useState([]);

  const addSalary = (newSalary) => {
    setSalary([...salary, newSalary]);
  };
  // end of code for tax bracket and salary

  // adding expenses
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income]);

  // ------------------------------------- code for adding expenses ------------------------------------------------- //
  const initialExpenses = [{ uuidv4: 1, charge: "rent", amount: 1600 }];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  // handling the alert
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount("");
      handleAlert({ type: "success", text: "Item added successfully" });
    } else {
      // handle alert
      handleAlert({ type: "danger", text: `charge cannot be an empty value` });
    }
  };

  // clear all items
  const clearItems = () => {
    setExpenses([]);
  };

  // handle delete
  const handleDelete = (id) => {
    console.log(`item deleted: ${id}`);
  };

  // handle edit
  const handleEdit = (id) => {
    console.log(`item edited: ${id}`);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <div className="App">
        <Header totalIncome={totalIncome} />
        <IncomeForm income={income} setIncome={setIncome} />
        <IncomeList income={income} setIncome={setIncome} />
        <div className="tax-div">
          <h3>Tax</h3>
          <Tax addSalary={addSalary} />
          <button />
          <Salary salary={salary} />
        </div>

        <div className="salary-expenses">
          <ExpenseForm
            handleSubmit={handleSubmit}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
          />
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />

          <h3>
            Total expenditure:{" "}
            <span className="total">
              ${" "}
              {expenses.reduce((acc, curr) => {
                return (acc += parseInt(curr.amount));
              }, 0)}
            </span>
          </h3>
        </div>
        <button className="button-one" />
      </div>
    </>
  );
}

export default App;
