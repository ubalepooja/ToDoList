
import { useContext } from "react";
import { UserContext } from "./usercontext";
function FourtComponent()
{
    const user = useContext(UserContext);

    return(
        <>
        <h1>Fourth</h1>
        <h1>{user}</h1>
        </>
    )
    
}

export default FourtComponent;