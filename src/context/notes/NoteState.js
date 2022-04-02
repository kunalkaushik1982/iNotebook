import NoteContext from "./noteContext";
import { useState } from "react";

const NoteSate = (props)=>{
    const notesIntial = [
        {
          "_id": "62475be87b55ece63141e4b531",
          "user": "6247394004197452e39e134d",
          "title": "My First note",
          "description": "my first description",
          "tag": "personal",
          "timestamp": "2022-04-01T20:08:03.284Z",
          "__v": 0
        },
        {
            "_id": "62475be87b535ece6311e4b532",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        },
        {
            "_id": "62475be87b55ec5e63115e4b533",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        },
        {
            "_id": "624755be87b55ece6311e4b534",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        },
        {
          "_id": "652475be97b555ece6311e4b555",
          "user": "6247394004197452e39e134d",
          "title": "My First note",
          "description": "my first description",
          "tag": "personal",
          "timestamp": "2022-04-01T20:08:03.284Z",
          "__v": 0
        },
        {
          "_id": "652475be597b55ece6311e4b5576",
          "user": "6247394004197452e39e134d",
          "title": "My First note",
          "description": "my first description",
          "tag": "personal",
          "timestamp": "2022-04-01T20:08:03.284Z",
          "__v": 0
        }, 
        {
            "_id": "62475be867b55ece66311e4b537",
            "user": "6247394004197452e39e134d",
            "title": "My First note",
            "description": "my first description",
            "tag": "personal",
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesIntial);

      //Add Notes

      const addNote = (title,description,tag) =>{
          //TODO: API CALL
          console.log("Adding a new Note")
          const note = {
            "_id": "62475be867b55ece66311ssfe4b537",
            "user": "6247394004197452e39e134d",
            "title": title,
            "description":  description ,
            "tag": tag,
            "timestamp": "2022-04-01T20:08:03.284Z",
            "__v": 0
        }
          setNotes(notes.concat(note))

      }

      //Delete a Note
      const deleteNote = (id) =>{
          //TODO: API CALL
          console.log("Deleting the node with id"+id)
          const newNotes =notes.filter((note)=>{return note._id!==id})
          setNotes(newNotes)
    }
      //Edit a Note
      const editNote = (id) =>{
          
    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteSate