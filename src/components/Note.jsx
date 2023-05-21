export default function Note({ title, content, ondelete, id }) {
  function handleDelete() {
    ondelete(id);
  }
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
