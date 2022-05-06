function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: 'Learn React',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Build a Todo App',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Spend time with family',
      isCompleted: false
    },
    {
      id: 4,
      text: 'Exercise',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const index = todos.length + 1;
    const newTodos = [...todos, {id: index, text: text, isCompleted: false}];
    setTodos(newTodos);
  }

  const toggleTodos = (id) => {
    const newTodos = [...todos]; //best practice: make a copy of the todo-list instead of modifying the current one
    const index = newTodos.findIndex((todo) => todo.id === id);
    const isComplete = !newTodos[index].isCompleted;
    newTodos[index].isCompleted = isComplete;
    setTodos(newTodos);
  }

  const complete = () => {
    const completedTasks = todos.filter(todo => todo.isCompleted === true).map((todo, i) => {
      return <Todo id={todo.id} todo={todo} toggle={toggleTodos} key={i} /> 
    })
    return completedTasks;
  }

  const incomplete = () => {
    const incompletedTasks = todos.filter(todo => todo.isCompleted === false).map((todo, i) => {
      return <Todo id={todo.id} todo={todo} toggle={toggleTodos} key={i} /> 
    })
    return incompletedTasks;
  }

  return (
    <>
      {incomplete()}
      <TodoForm addTodo={addTodo}/>
      <h1>Completed Tasks</h1>
      {complete()}
    </> 
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
