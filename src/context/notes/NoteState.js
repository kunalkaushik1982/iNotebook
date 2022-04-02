import NoteContext from "./noteContext";
import { useState } from "react";

const NoteSate = (props)=>{
    const notesIntial = [
        {
          "_id": "62475be87b55ece6311e4b53",
          "user": "6247394004197452e39e134d",
          "title": "My First note",
          "description": "my first description",
          "tag": "personal",
          "timestamp": "2022-04-01T20:08:03.284Z",
          "__v": 0
        },
        {
            "_id": "62475be87b55ece6311e4b53",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        },
        {
            "_id": "62475be87b55ece6311e4b53",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        },
        {
            "_id": "62475be87b55ece6311e4b53",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        },
        {
          "_id": "62475be97b55ece6311e4b55",
          "user": "6247394004197452e39e134d",
          "title": "My First note",
          "description": "my first description",
          "tag": "personal",
          "timestamp": "2022-04-01T20:08:03.284Z",
          "__v": 0
        },
        {
          "_id": "62475be97b55ece6311e4b57",
          "user": "6247394004197452e39e134d",
          "title": "My First note",
          "description": "my first description",
          "tag": "personal",
          "timestamp": "2022-04-01T20:08:03.284Z",
          "__v": 0
        }, 
        {
            "_id": "62475be87b55ece6311e4b53",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesIntial);
      

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteSate