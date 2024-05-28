// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ToDoListEg()
{
    // UseState for Input Field
    let[text,setText]=useState("");
    // UseState for Add Item Button
    let[items,setItems]=useState([]);
    // let[del,setDel]=useState([]);

    //To display down the text entered in input field
    function display(event)
    {
        setText(event.target.value);
    }
    function addItem()
    {
        if(text.trim!=="")
            {
                setItems([...items,text]);
                //setText("") after clicking on add item the input field gets empty
                 setText("");
            }
    }
    function delItems(index)
    {
        let newarray=[...items];
            newarray.splice(index,1);
            setItems(newarray);
    }

    return(
        <>
        Input Field: <input type="text" placeholder="Enter text here" value={text} onChange={display}></input>
        <button onClick={addItem}>Add Item</button>
          <ul>
                {
                    items.map((ele,ind,arr)=>{
                        return(
                            <>
                            <li key={ind}>
                                {ele}
                                <button onClick={()=>delItems(ind)}>delete</button>
                            </li>
                            </>
                        )
                    })
                }
            </ul>
                       
  

        </>

    )

}

export default ToDoListEg;

