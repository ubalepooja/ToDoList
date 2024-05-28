import React, { useReducer } from "react";


function reducer(state,action)
{
    if(action.type=="INCREMENT")
        {
            return state+1;
        }
        else if(action.type=="DECREMENT")
        {
            return state-1; 
        }
        else if(action.type=="MULTIPLY")
            {
                return state*2;
            }
    return state;
}
function UseReducerDemo()
{
    let initialvalue=0;
    

    let [state,dispatch]=useReducer(reducer,initialvalue);


   
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button><br></br>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button><br></br>
        <button onClick={()=>dispatch({type:"MULTIPLY"})}>MULTIPLY</button>

        </>
    )
}

export default UseReducerDemo;