import React from 'react'
import "../css/ListSalary.css"


// this is the listing component
function ListSalary({text}) {
  return (
    <>
    <div className='list-item'>
      <p>{text}</p>
      <input type="button"/>
    </div>
    </>
    
  )
}

export default ListSalary