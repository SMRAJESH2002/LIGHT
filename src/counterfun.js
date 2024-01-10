import React from "react";
import "./counterfun.css"
export default function Countfun(){
    const[value, setValue]=React.useState(0);
    const[val, setVal]=React.useState(5);
    const dif=()=>{
      setVal(10);
    
    }
    const add=()=>{
        setValue(value+1);
    }
    const min=()=>{
        if(value>0)
        setValue(value-1);
    }
    const reset=()=>{
        setValue(0);
    }
    return(
        <div className="box ">
            <h1>{value}</h1>
<div className="btn">
           <button onClick={add}>Plus</button>
           <button onClick={min}>min</button>
           <button onClick={reset}>Reset</button>
           
</div>


<h2> Rajesh is {val} times greater than vasanth</h2>
<button onClick={dif}>Change</button>
       </div>
    )
}; 