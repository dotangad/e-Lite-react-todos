import React, {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([
    "Clean the kitchen",
    "Get groceries",
    "Cook dinner"
  ])
  const [inputState, setInputState] = useState("")

  const handleAdd = e => {
    e.preventDefault()

    setTodos([
      ...todos,
      inputState
    ])

    setInputState("")
  }

  const handleDelete = (i) => (e) => {
    setTodos(todos_ => 
      todos_.filter((_, k) => i !== k)
    )
  }

  return (
    <div className="App">
      <h1>TODO list</h1>
      <div>
        <input
          type="text"
          placeholder="New todo"
          value={inputState}
          onChange={e => setInputState(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo, i) => 
          <li key={i} onClick={handleDelete(i)}>{todo}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
