import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import Tax from './components/Tax';
import Salary from './components/Salary';


function App() {

  // tax bracket code and salary 
  const [salary, setSalary] = useState([]);
  
  const addSalary = (newSalary) => {

    setSalary([...salary, newSalary])

  }
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
  // end of code for adding expenses

  return (
    <>

    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}/>
      <IncomeList income={income} setIncome={setIncome}/>
      <div className='tax-div'>
      <h3>Tax</h3>
      <Tax addSalary={addSalary}/>
      <Salary/>
      </div>

      <div className='salary-expenses'>
      <h3>Expenses</h3>
      </div>
    </div>
    
    </>
    
  );
}

export default App;
