import React from "react";
import "./task.css";
import Img3 from "./image/youtube-background-7633639_1280.jpg" 

function Task(){
    const[value,setValue]=React.useState({name:"Not Eligible",high:4995});
   console.log(value);
    const add=()=>{
        if(value.high<5000)
       
        setValue({name:value.name,high:value.high+1});
    if(value.high===4999)
    setValue({name:"Eligible",high:"5k Subscribe"})

    }
 return(
       
           <div src={Img3} className="box">
            
            <div className="na">you are {value.name} for silver button</div>
            <h1>{value.high}</h1>
            <div>
            <button className="btn" onClick={add} >SUBSCRIBE</button>
            </div>
        </div>
        
    )
};

 export default Task;