
import SecondComponent from "./SecondComponent";
import { useState } from "react";
import { UserContext } from "./UserContext";

function FirstComponent()
{
    let [text,setText] = useState("Hi");
    return(
        <>
        <UserContext.Provider value={text}>
        <SecondComponent/>
        </UserContext.Provider>

        </>
    )
    
}

export default FirstComponent;