import React from 'react'

function Number({num, moveCard}) {
  return (
    <div onClick={()=>moveCard(num)} className={`number ${num.value===num.index+1?'correct':''} ${num.value===16?'disabled':''} slot--${num.index}`}>
        {num.value===16?'':num.value}
      
    </div>
  )
}

export default Number
