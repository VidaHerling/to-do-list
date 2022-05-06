function Todo({id, todo, toggle}) {

  const handle = () => toggle(id);
  return (
    <div className="todo-item" onClick={handle}>
    {todo.text}&nbsp; 
    <button>done</button>
    </div>
  );
}
