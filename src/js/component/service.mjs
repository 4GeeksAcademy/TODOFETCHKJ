import { useEffect, useState } from "react";

const FetchTodos = () => {
  const [todos, setTodos] = useState([]);
//POST
  useEffect(() => {
    const fetchForPosts = async () => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/todos/user/atkinkj"
        );
        const todos = await response.json();
        setTodos(todos);
      } catch (error) {
        console.error(error); // For errors
      }
    };

    fetchForPosts();
  }, []); 
  const addNewTodo = async () => {
    const newTodo = { label: "Do the replits" };
    const updatedTodos = [...todos, newTodo]; // Combine existing and new todo

    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/atkinkj",
        { method: "POST", body: JSON.stringify(updatedTodos) } // Use POST for adding
      );

      const newTodos = await response.json(); // Might not be necessary based on API
      setTodos(newTodos); // Update state with new todos including the added one
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = (todoToDelete) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoToDelete.id); // Filter out deleted todo
    updateTodos(filteredTodos); // Update state with filtered todos
  };

  const updateTodos = async (updatedTodosList) => { // Reuse existing function
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/atkinkj",
        { method: "PUT", body: JSON.stringify(updatedTodosList) }
      );

      const newTodos = await response.json(); // Might not be necessary based on API
      setTodos(newTodos); // Update state with new todos
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id || todo.label}>{todo.label}</p>
      ))}
      <button onClick={addNewTodo}>Click to add Task</button>
      {todos.map((todo) => ( // Render delete button for each todo
        <button key={todo.id} onClick={() => deleteTodo(todo)}>
          Delete
        </button>
      ))}
    </div>
  );
};

export default FetchTodos;
