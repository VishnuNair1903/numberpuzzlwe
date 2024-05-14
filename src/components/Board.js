import React from 'react'
import '../App.css';

function Board() {
  return (
    
        new Array(16).fill().map((_,i)=><div key={i} className='Board'></div>)
      

  )
}

export default Board

