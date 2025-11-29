import { useState } from "react";

const DailyTask = () =>{
    const [initial, setInitial]= useState(0)
/*  brief explanation  
const countArr = useState(0);
const firstValue = countArr[0]
const secondValue = countArr[1]
//    console.log(firstValue)
//    console.log(secondValue)
//    console.log(countArr) */


// destructured way
let counter = 0
const count = ()=>{
    counter++;
    setInitial( initial + 1)
        console.log("Button clicked",counter)
    }
    return <>
        <h2>Daily Target</h2>
    <p>Task: {initial} </p>
    <p>Task Counter: {initial} </p>

    <button onClick={count}>Add Task</button>
    </>
}

export default DailyTask