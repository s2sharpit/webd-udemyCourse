import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => [...prevNotes, newNote]);
    }

    function delNote(id) {
        setNotes(prevNotes => prevNotes.filter((item, index) => index !== id));
    }

  return (
    <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) =>
            <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDel={delNote} />
        )}
        <Footer />
    </div>
  );
}

export default App;