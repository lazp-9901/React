import React, {useState} from 'react'

function DemoState(props) {
    let [count, setCount] = useState(1)
    let changeStateHandles = (type) =>{
        if(type==='incre'){
            setCount(count + 1)
        }
        else{
            setCount(count - 1 )
        }
    }
  return (
    <div>
        <button onClick={()=>changeStateHandles('incre')}>Increment</button>
        <button onClick={()=>changeStateHandles('decre')}>Decrement</button>
        <h1>{count}</h1>
    </div>
  )
}

export default DemoState
