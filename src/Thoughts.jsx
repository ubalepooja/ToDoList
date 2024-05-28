import React from "react";
import { useReducer } from "react";


// console.log(quotes[0]);

let initialvalue = 0;
console.log(initialvalue);



function reducerMethod(state, action) {
    if (action.type == 'FWD') {
        return state + 1;
    }
    else if(action.type=='BCK'){
        return state-1;
    }
    return state;
}


function Thoughts() {

    
    let quotes = [{ quote: "Old is Gold" },
    { quote: "Life is short; make it sweet" },
    { quote: "Cherish the little things" },
    { quote: "Happiness is homemade" }]

    const [state, dispatch] = useReducer(reducerMethod, initialvalue);
     console.log("State initially:", state.quote1);

    return (
        <>
            <h4>Thoughts Generator</h4>
            <div className="bg-slate-300 h-[131px] w-full flex justify-center items-center">

                <div>{(state>=0 && state<quotes.length) ? quotes[state].quote:quotes[0].quote}</div>


            </div>
            <div className="flex justify-between">
                
                
                <button onClick={()=>dispatch({type:"BCK"})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Back</button>
                <br></br>
                <button onClick={() => dispatch({ type: "FWD" })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Go</button> 


            </div>
        </>
    )
}








export default Thoughts;