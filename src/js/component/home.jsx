import React, { useState } from "react";



//create your first component
const Home = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = (event) => {
    if (event.keyCode === 13 && inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (todoIndex) => {
    const filteredTodos = todos.filter((todo, index) => index !== todoIndex);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={addTodo}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
