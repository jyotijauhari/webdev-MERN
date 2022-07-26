//useState
import React, { useState } from 'react'

function Us() {
    //destructuring
    const [count, setCount] = useState(0);
    const [emoji, setEmoji] = useState('😶');
    const [msg, setMsg] = useState({sayHi:"I am Hooked"});
    // const [arr, setArray] = useState([]);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        <div>--</div>
        <p>{msg.sayHi}</p>
        <div>--</div>
        <button onClick={()=>setEmoji('🌻')}>Sunflower</button>
        <p>{emoji}</p>
        <button onClick={()=>setEmoji('🌼')}>Blossom</button>
        {/* <div>--Array--</div>
        <button onClick={()=>setArray(arr.push(count))}>Add to Array</button>
        <div></div> */}
    </div>
  )
}

export default Us