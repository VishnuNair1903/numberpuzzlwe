import React from 'react'
import '../App.css'

function Winner({number}) {
    if(!number.every(n => n.value===n.index+1)){
        return null;
    }
  return (
    <div className='winner'>
        <p>You Won</p>
        

        
      
    </div>
  )
}

export default Winner
