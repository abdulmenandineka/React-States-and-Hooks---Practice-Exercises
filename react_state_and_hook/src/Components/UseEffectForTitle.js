import React,{useState,useEffect} from 'react'

function UseEffectForTitle() {
    const [count,updater] = useState(0)
    const [color,colorUpdater] = useState('black')
//    const increase = () =>{updater(prevstate=>{
//     const newcount = prevstate+1;
//     document.title=newcount
//     return newcount
//    })}

//     const decrease = () =>{updater(prevstate=>{
//     const newcount = prevstate-1;
//     document.title=newcount
//     return newcount
//    })}

//    const reset = () =>{
//     updater(0)
// document.title=count}

    const increase = () =>{updater(count+1);colorUpdater('green')};
    const decrease = () =>{updater(count-1);colorUpdater('red')};
    const reset = () =>{updater(0);colorUpdater('black')}
    useEffect (()=>{alert('Component is mounted')},[])
    useEffect(()=>{document.title=count},[count])
    
  return (
    <div>
        <h1 style={{ color: color }}>{count}</h1>
        <button className='green' onClick={increase}>increase</button>
        <button className='red' onClick={decrease}>decrease</button>
        <button className='black' onClick={reset}>reset</button>
    </div>
  )
}

export default UseEffectForTitle