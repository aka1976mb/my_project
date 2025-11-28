import { Valdi, useState } from 'valdi';

function TodoList() {
  const [todos, setTodos] = useState(['Learn Valdi', 'Build an app']);

  // Simulate adding a new todo after some time
  setTimeout(() => {
    setTodos([...todos, 'Profit!']);
  }, 1000);

  return (
    <ul>
      {todos.map(todo => <li>{todo}</li>)}
    </ul>
  );
}

console.log(Valdi.render(<TodoList />));
