import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setText("");
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                onClick={deleteItem}
                value={toDoItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
