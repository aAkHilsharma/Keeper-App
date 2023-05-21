import React, { useState } from 'react';

function CreateArea({ handleAdd }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function onAdd(e) {
    e.preventDefault();
    handleAdd(note);
    setNote({
      title: '',
      content: '',
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name='title'
          placeholder='Title'
          value={note.title}
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
        />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
