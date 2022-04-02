import NoteContext from "./noteContext";
import { useState } from "react";

const NoteSate = (props)=>{

    return(
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteSate