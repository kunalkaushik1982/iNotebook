import NoteContext from "./noteContext";
import { useState } from "react";

const NoteSate = (props)=>{
    const s1 = {
        "name": "Kunal",
        "class":"X"
    }
    const [state,setState] =useState(s1)
    const update = () =>{
        setTimeout(() => {
            setState({
                "name": "Harsh",
                "class":"IV"
            })
        }, 1000);

    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteSate