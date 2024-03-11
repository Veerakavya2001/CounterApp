import { useState } from "react";
export default function Counter(){
    const [counter,setcounter]=useState(0);
    const incrementfn=()=>{
        setcounter((prev)=>prev+1)
        
        
    }
    const resetfn=()=>{
        setcounter(0)
    }
    const decreasefn=()=>{
       
        setcounter((prev)=>prev-1)
       
    }
    function getcolor (){
        if(counter>0){
            return "getgreen"
        }
        else if(counter<0){
            return "getred"
        }
        else 
        return ""
    }
    
    
    return(
        <div className="counter-containter">
            <div className={`count-value ${getcolor()}`} >{counter}</div>
            <div className="counter-all-btns">
                <button onClick={decreasefn} className="counter-btn">Decrement</button>
                <button onClick={resetfn}className="counter-btn">Reset</button>
                <button onClick={incrementfn}className="counter-btn">Increment</button>
            </div>
        </div>
    )

}