import React from 'react'
import '../App.css';

function NewGame({reset}) {
  return (
    <div className='newgame'>
        <button onClick={reset}>New Game</button>
      
    </div>
  )
}

export default NewGame
