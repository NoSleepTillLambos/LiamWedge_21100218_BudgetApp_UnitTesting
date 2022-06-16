import React from 'react'
import ListSalary from './ListSalary'
import "../css/Salary.css"

// salary is the to do list component
function Salary() {
  return (
    <div className='salary-list'>
      <ListSalary text="item 1" />
      <ListSalary text="item 2" />
      <ListSalary text="item 3" />
      
    </div>
  )
}

export default Salary