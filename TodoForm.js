function TodoForm({addTodo}) {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-list" 
        value={value}
        placeholder="Add Todo item ..." 
        onChange={e => setValue(e.target.value)}
        />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}