import React, {useState, useEffect} from 'react'

function Ue2() {
const [count, setCount] = useState(0);
//componentDidMount + ComponentDidUpdate
useEffect(() => {
  console.log("Use Effect is called");
  document.title = `Button Clicked ${count} times`;
},[])

console.log("render"); //first this will be called like in lifecycle method (render->componentdidmount->render->componentdidupdate->render->componentdidupdate->render->componentdidupdate)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        <div>--</div>
    </div>

  );
}

export default Ue2