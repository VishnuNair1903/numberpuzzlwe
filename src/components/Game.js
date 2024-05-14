import React from 'react'
import Board from './Board'
import '../App.css';
import { useState } from 'react';
import Number from './Number';
import Winner from './Winner';
import NewGame from './NewGame';

function Game() {

    function gridNumber(){
        return new Array(16).fill().map((_,i)=>i+1).sort(()=>Math.random()-0.5).map((num,i)=>({value:num,index:i}));
        

    }
    const [number, setNumber]=useState(gridNumber());
    
    function moveTile(tile){
 
        const i16=number.find(num=>num.value===16).index;
        
        if(![i16-1, i16+1, i16-4, i16+4].includes(tile.index)){
            return;
        }

        const newCard=[...number].map((number)=>{
            if(number.value===16){
                return {value:number.value, index:tile.index};
            }
            else if(number.index===tile.index){
                return {value:number.value, index:i16};
            }
            else{
                return number;
            }
        });


        setNumber(newCard);
    }

    function reset(){
        setNumber(gridNumber());
    }

    
  return (
    <div className='game'>
        <div className='Board1'>
            <Board />
            {number.map((num,i)=><Number key={i} num={num} moveCard={moveTile} />)}
            
        </div>
        <Winner number={number} />
        <NewGame reset={reset} />
        
      
    </div>
  )
}

export default Game
