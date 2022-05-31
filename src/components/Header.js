import React from 'react'

export default function Header({totalIncome}) {
  return (
    <header>
        
        <h1>Budget buddy</h1>
        <div className='total-income'>R{totalIncome}</div>
        
    </header>
  )
}
