import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleAdd(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea handleAdd={handleAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            ondelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}
