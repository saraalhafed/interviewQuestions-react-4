import React from 'react'
import { useState } from 'react'

export default function Calculator() {
  
    //controlled component 1-
    const [number, setNumber] = useState(0)
    const [steps, setSteps] = useState([]) //to stor the value of name property
    //i need to stor wat would clickid ,with name property is a way  or difind func for that way2, if 
    const [result, setResult] = useState(0)

    const half = (number) => number / 2
    const double = (number) => number * 2
    const increment = (number) => number + 1
    const decrement = (number) => number - 1
    // i can stor in obj  we combin 2 ways 
    const operations = {
        "half": half,
        "double": double,
        "increment": increment,
        "decrement": decrement,
        "clear": () => setSteps([])
    }

    const handleFunctionClick = (e) => {
        setSteps([...steps, e.target.name])//keep everything in this array and add new operation  with eaclick 
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let temp = number;

        for (let item of steps) {
            temp = operations[item](temp)
        }

        setResult(temp)
        
       
    }

  return (
    <div>
         <div>
        {/*  <button name="half" 
               onClick={() => setSteps([...steps, half])}>Half</button>{/* here we use func way to stor the steps */} 
              <button name="half" 
               onClick={handleFunctionClick}
               >Half</button>
            <button name="double"
                onClick={handleFunctionClick}
            >Double</button>
            <button name="increment"
               onClick={handleFunctionClick}
            >Increment</button>
            <button name="decrement"
               onClick={handleFunctionClick}
            >Decrement</button>
            <button onClick={() => setSteps([])}>Clear</button>
        </div>
        <h3 style={{textAlign: 'center'}}>My Function</h3>
        <div style={{textAlign: 'center'}}>
            {/* list the steps */}
            {steps.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder='Enter a number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
        <div>
            <h3>Result {result}</h3>
        </div>
    </div>
  )
}



//the btn doest need state  ,it include just eventhandler to handle the state