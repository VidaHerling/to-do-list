function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Build a Todo App',
      isCompleted: false
    },
    {
      text: 'Spend time with family',
      isCompleted: true
    },
    {
      text: 'Exercise',
      isCompleted: true
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text: text, isCompleted: false}];
    setTodos(newTodos);
  }

  const removeTodos = index => {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  const completedTasks = () => {
    let done = todos.filter(todo => todo.isCompleted === true);
    let len = done.length;
    for(let i = 0; i < len; i++) {
    }
  }

  return (
    <div className="todo-list">
      {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove={removeTodos}/> 
      )}
      <TodoForm addTodo={addTodo}/>
      {completedTasks}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
