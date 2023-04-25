import React from 'react'
import"../styling/hours.css"

function hours({day, open, close}) {
  return (
    <div className='hours'>
        <div className='days'>
          <h2>{day}</h2>
        </div>
        <div className='opening'>
          <h2>{open}</h2>
        </div>

        <div className='dash'>
          <h2>-</h2>
        </div>

        <div className='closing'>
          <h2>{close}</h2>
        </div>
    </div>
  )
}

export default hours