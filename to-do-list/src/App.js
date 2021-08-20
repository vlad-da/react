import React from 'react'
import './App.css';
import ToDoItem from './to-do-item/ToDoItem';
import todoData from './todoData';

function App() {
  const handleChnge = () => {
    console.log("Значение поменялось");
  }
  const todoItems = todoData.map(item => {
    return (
      <ToDoItem 
        key ={item.id}
        description = {item.description}
        completed ={item.completed}
        handleChnge={() => {handleChnge()}}
      />
    )
  })
  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
