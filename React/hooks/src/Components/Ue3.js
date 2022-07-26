import React, {useState, useEffect} from 'react'

function Ue3() {
const [count, setCount] = useState(0);
const [msg, setMsg] = useState({sayHi:"I am hooked"});
//componentDidMount + ComponentDidUpdate
useEffect(() => {
  console.log("Use Effect is called");
  document.title = `Button Clicked ${count} times`;
},[count]); //useEffect will run only when count is updated

let changeText = (e) => {
    msg.sayHi = e.target.value;
    console.log(msg);
    setMsg({...msg})
}

console.log("render"); //first this will be called like in lifecycle method (render->componentdidmount->render->componentdidupdate->render->componentdidupdate->render->componentdidupdate)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        <div>--</div>
        <input type="text" value={msg.sayHi} onChange = {(e)=>changeText(e)}></input>

    </div>

  );
}

export default Ue3