import React from 'react';
import "../css/Tax.css";


function Tax(props) {
  return (
    <>
    <div className='tax-div'>
      <h3>Tax brackets</h3>
    </div>

    <div className='salary-expenses' onSubmit={props.AddIncome}>
    <h3>Salary and expenses</h3>
    </div>
    </>
    
  )
}

export default Tax;