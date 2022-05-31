import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import Tax from './components/Tax';



function App() {


  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {

    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);

  }, [income]);


  return (
    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}/>
      <IncomeList income={income} setIncome={setIncome}/>
      <Tax/>
    </div>
  );
}

export default App;
