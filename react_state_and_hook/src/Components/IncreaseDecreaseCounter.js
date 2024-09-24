import React from 'react'

function IncreaseDecreaseCounter() {
    const[count,updater] = React.useState(0);
    const increase = () => {updater( count+1)}
    const decrease = () => {updater( count-1)}
    const reset = () => {updater(0)}

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default IncreaseDecreaseCounter