import React from 'react'
import "./Chart.css"
import { useState } from 'react'

const Chart = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState((add)=>add + 1);
    }

    const decrement = () => {
        setState((subtract) => subtract - 1);
    }

    const clear = () => {
        setState(0);
    }

    const appleImages = [];

    for (let index = 0; index < state; index++){
        appleImages.push(<img className="apple" src="https://t3.ftcdn.net/jpg/05/57/44/36/360_F_557443691_Y2TnUPcxqAWpzj3PucB3eO2dSy29VyEN.jpg" alt="apple"/>)
    }


  return (
    <div className='a-container'>
        <p>Total Apples: {state}</p>
        <div className='applebox'>
            {appleImages}
        </div>
        <div className='a-button'>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={clear}>clear</button>
        </div>
        </div>
  )
}

export default Chart;